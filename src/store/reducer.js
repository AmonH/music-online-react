// import {combineReducers} from 'redux';
import {combineReducers} from 'redux-immutable';


import {reducer as recommendedReducer} from '@/pages/discover/sub-pages/recommend/store';
import {reducer as musiciPlayerReducer} from '@/pages/music-player/store';

const reducers = combineReducers({
  recommend: recommendedReducer,
  musicPlayer: musiciPlayerReducer
});

export default reducers;