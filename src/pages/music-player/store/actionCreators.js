import { 
  ADD_PLAYLIST,
  CHANGE_CURRENT_SONG,
  CHANGE_CURRENT_SONG_INDEX,
  CHANGE_CURRENT_PLAY_STATUS,
  CHANGE_THE_SONG_DETAIL,
  CHANGE_THE_SONG_LYRICS,
  CHANGE_THE_SONG_COMMENTS  } from './constants';

import { 
  getTheSongDetail,
  getTheSongLyrics,
  getTheSongComments } from '@/services/musicPlayer';

//将歌曲详情数据存储到redux中：
export const addPlaylistAction = (value) => ({
  type: ADD_PLAYLIST,
  value
})
export const changeCurrentSongAction = (value) => ({
  type: CHANGE_CURRENT_SONG,
  value
})
export const changeCurrentSongIndexAction = (value) => ({
  type: CHANGE_CURRENT_SONG_INDEX,
  value
})
export const changeCurrentPlayStatusAction = (value) => ({
  type: CHANGE_CURRENT_PLAY_STATUS,
  value
})

//songPanel data
const changeSongDetailAction = (res) => ({
  type: CHANGE_THE_SONG_DETAIL,
  value: res.songs && res.songs[0]
})
const changeSongLyricsAction = (res) => ({
  type: CHANGE_THE_SONG_LYRICS,
  value: res.lrc
})
const changeSongCommentsAction = (res) => ({
  type: CHANGE_THE_SONG_COMMENTS,
  value: res
})


//获取单首歌曲的信息：
export const getTheSongDetailAction = (ids) => {
  return dispatch => {
    getTheSongDetail(ids).then(res => {
      dispatch(changeSongDetailAction(res));
    })
  }
}
//获取单首歌曲的歌词：
export const getTheSongLyricsAction = (id) => {
  return dispatch => {
    getTheSongLyrics(id).then(res => {
      dispatch(changeSongLyricsAction(res));
    })
  }
}
//获取单首歌曲的评论：
export const getTheSongCommentsAction = (id,limit) => {
  return dispatch => {
    getTheSongComments(id,limit).then(res => {
      dispatch(changeSongCommentsAction(res));
    })
  }
}

