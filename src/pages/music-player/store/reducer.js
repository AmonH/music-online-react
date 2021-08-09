import {
  ADD_PLAYLIST,
  CHANGE_CURRENT_SONG,
  CHANGE_CURRENT_SONG_INDEX,
  CHANGE_CURRENT_PLAY_STATUS,
  CHANGE_THE_SONG_DETAIL,
  CHANGE_THE_SONG_LYRICS,
  CHANGE_THE_SONG_COMMENTS } from './constants';

import { Map } from 'immutable';

const defaultState = Map({
  playlist: [],
  currentSong: {},
  currentSongIndex: 0,
  currentPlayStatus: 0,
  theSongDetail: {},
  theSongLyrics: {},
  theSongComments: []
});

function reducer(state = defaultState, action) {
  switch(action.type) {
    case ADD_PLAYLIST:
      let newPlaylist = [];
      if(!state.get("playlist").length) {
        newPlaylist.push(action.value);
      } else {
        newPlaylist = [...state.get("playlist"),action.value];
      }
      return state.set("playlist",newPlaylist);
    case CHANGE_CURRENT_SONG:
      return state.set("currentSong",action.value);
    case CHANGE_CURRENT_SONG_INDEX:
      return state.set("currentSongIndex",action.value);
    case CHANGE_CURRENT_PLAY_STATUS:
      return state.set("currentPlayStatus",action.value);
    case CHANGE_THE_SONG_DETAIL:
      return state.set("theSongDetail",action.value);
    case CHANGE_THE_SONG_LYRICS:
      return state.set("theSongLyrics",action.value);
    case CHANGE_THE_SONG_COMMENTS:
      return state.set("theSongComments",action.value);
    default: 
      return state;
  }
}

export default reducer;