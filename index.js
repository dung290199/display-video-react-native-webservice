/**
 * @format
 */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

//redux must be installed by npm i redux-saga
import createSagaMiddleware from 'redux-saga';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from "./app/reducers";
import MovieContainer from "./app/containers/movieContainer";
import rootSaga from "./app/sagas/rootSaga";
import AppContainer from './app/components/navComponent';

const sagaMiddleware = createSagaMiddleware();
let store = createStore(reducers,applyMiddleware(sagaMiddleware));
const App = () => {
  return (<Provider store={store}>
    <AppContainer/>
  </Provider>)
};

sagaMiddleware.run(rootSaga);
AppRegistry.registerComponent(appName, () => App);
