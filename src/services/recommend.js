import request from './request';

//网络请求-banners的数据的封装
export function getTopBanners() {
  return request({
    url: "/banner"
  })
}

//热门推荐网络请求榜单的封装
export function getHotRecommends(limit) {
  return request({
    url: "/personalized",
    params: {
      limit
    }
  })
}

//新碟上架网络请求榜单的封装
export function getNewAlbums(limit) {
  return request({
    url: "/top/album",
    params: {
      limit
    }
  })
}

//榜单网络请求榜单的封装
export function getRankings(id) {
  return request({
    url: "playlist/detail",
    params: {
      id
    }
  })
}

//入驻歌手请求榜单的封装
export function getResidentSingers() {
  return request({
    url: "/top/artists"
  })
}