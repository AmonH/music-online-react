import {
  CHANGE_TOP_BANNERS,
  CHANGE_HOT_RECOMMENDS,
  CHANGE_NEW_ALBUMS,
  CHANGE_TOP_SONGS,
  CHANGE_NEW_SONGS,
  CHANGE_ORIGINAL_SONGS
} from './constants';
import { Map } from 'immutable';

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],
  topSongs: {},
  newSongs: {},
  originalSongs: {}
})

function reducer(state = defaultState,action) {
  switch(action.type) {
    case CHANGE_TOP_BANNERS:
      return state.set("topBanners",action.value);
    case CHANGE_HOT_RECOMMENDS:
      return state.set("hotRecommends",action.value);
    case CHANGE_NEW_ALBUMS:
      return state.set("newAlbums",action.value);
    case CHANGE_TOP_SONGS:
      return state.set("topSongs",action.value);
    case CHANGE_NEW_SONGS:
      return state.set("newSongs",action.value);
    case CHANGE_ORIGINAL_SONGS:
      return state.set("originalSongs",action.value);
    default:
       return state;
  }
}

export default reducer;