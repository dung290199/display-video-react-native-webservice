import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MovieContainer from '../containers/movieContainer';

class HomeScreen extends React.Component {
  render() {
    return(
      <MovieContainer/>
    );
  }
}

class ExploreScreen extends React.Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>This is my Explore screen</Text>
      </View>
    );
  }
}

class NotificationScreen extends React.Component{
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'}}>
        <Text>This is Notificatin screen</Text>
      </View>
    );
  }
}

class AddScreen extends React.Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#d0d0d0'}}>
        <Text>This is my add screen</Text>
      </View>
    );
  }
}

const bottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon size={24} color="grey" name="md-home" />
        )
      }
    },
    Explore: {
      screen: ExploreScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon size={24} color="grey" name="logo-ionic" />
        )
      }
    },
    Add: {
      screen: AddScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon size={24} color="grey" name="md-add-circle" />
        )
      }
    },
    Notifications: {
      screen: NotificationScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon size={24} color="grey" name="md-notifications" />
        )
      }
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: '#eb6e3d'
    }
  }
);

export default AppContainer = createAppContainer(bottomTabNavigator);