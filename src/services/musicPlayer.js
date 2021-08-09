import request from './request';

//请求歌曲详情数据的封装：
export function getTheSongDetail(ids) {
  return request({
    url: "/song/detail",
    params: {
      ids
    }
  })
}
//请求歌词数据：
export function getTheSongLyrics(id) {
  return request({
    url: "/lyric",
    params: {
      id
    }
  })
}
//请求歌曲的评论数据：
export function getTheSongComments(id,limit) {
  return request({
    url: "/comment/music",
    params: {
      id,
      limit
    }
  })
}