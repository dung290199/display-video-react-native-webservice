import React, {Component} from 'react';
import {View, FlatList, Text} from 'react-native';
import WebView from 'react-native-webview';
import {Searchbar} from 'react-native-paper';

export default class MovieComponent extends Component {
  state = {
    firstQuery: '',
  };
  constructor(props) {
    super(props);
    this.state = {firstquery: ''};
  }

  getVideos() {
    let object = this.props.movies;
    let separator = 'videos/';
    let separatorLen = separator.length;
    let l = object.length;
    let videos = [];
    for (let i = 0; i < l; i++) {
      let index = object[i].url.indexOf(separator);
      if (index > 0) {
        let urlsplt = object[i].url.split(separator, 2);
        let id = urlsplt[1].split('/');
        let video = {
          url:
            'https://www.facebook.com/video/embed?video_id=' +
            id +
            '&fullscreen=1',
          title: this.getTitle(object[i].title),
          description: object[i].description,
        };
        videos.push(video);
      }
    }
    return videos;
  }

  getTitle(title) {
    const REGEX = '#';
    let titleArray = title.split(REGEX, 2);
    return titleArray[0];
  }
  render() {
    const {firstquery} = this.state;
    {
      this.props.onFetchMovies();
    }
    return (
      <View style={{flex: 1}}>
        <Searchbar
          placeholder="Search"
          onChangeText={query => {
            this.setState({firstquery: query});
          }}
          value={firstquery}
          icon={require('D:/codegym/codegym/display-video-react-native-webservice/app/assets/icons/Search-05.png')}
          clearIcon={require('D:/codegym/codegym/display-video-react-native-webservice/app/assets/icons/Clear-01.png')}
        />
        <FlatList
          data={this.getVideos()}
          keyExtractor={item => item.toString()}
          renderItem={({item, index}) => (
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                height: 200,
                marginBottom: 10,
              }}>
              <WebView
                contentInset={{top: 0, left: 0, bottom: 0, right: 0}}
                style={{backgroundColor: 'grey', width: '100%'}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                source={{uri: item.url}}
              />
              <Text style={{width: 150, fontWeight: 'bold'}}>
                ${item.title}
              </Text>
            </View>
          )}
        />
      </View>
    );
  }
}
