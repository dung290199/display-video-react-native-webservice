import {call,all} from 'redux-saga/effects'
import {watchFetchMovies} from "./movieSaga";

export default function* rootSaga() {
    yield  call(watchFetchMovies);
}