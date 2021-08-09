import {
  CHANGE_TOP_BANNERS,
  CHANGE_HOT_RECOMMENDS,
  CHANGE_NEW_ALBUMS,
  CHANGE_TOP_SONGS,
  CHANGE_NEW_SONGS,
  CHANGE_ORIGINAL_SONGS
} from './constants';
import {
  getTopBanners,
  getHotRecommends,
  getNewAlbums,
  getRankings
} from '@/services/recommend';

//将banners数据更新到redux：
const changeTopBannersAction = res => ({
  type: CHANGE_TOP_BANNERS,
  value: res.banners
})
//将热门推荐数据更新到redux：
const changeHotRecommendsAction = res => ({
  type: CHANGE_HOT_RECOMMENDS,
  value: res.result
})
//将新碟上架数据更新到redux：
const changeNewAlbumsAction = res => ({
  type: CHANGE_NEW_ALBUMS,
  value: res.albums
})

//将榜单数据数据更新到redux：
const changeTopSongsAction = res => ({
  type: CHANGE_TOP_SONGS,
  value: res.playlist
}) 
const changeNewSongsAction = res => ({
  type: CHANGE_NEW_SONGS,
  value: res.playlist
})
const changeOriginalSongsAction = res => ({
  type: CHANGE_ORIGINAL_SONGS,
  value: res.playlist
})


//获取banners数据：
export const getTopBannersAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBannersAction(res));
    })
  }
}

//获取热门推荐数据：
export const getHotRecommendsAction = (limit) => {
  return dispatch => {
    getHotRecommends(limit).then(res => {
      dispatch(changeHotRecommendsAction(res));
    })
  }
}

//获取新碟上架数据：
export const getNewAlbumsAction = (limit) => {
  return dispatch => {
    getNewAlbums(limit).then(res => {
      dispatch(changeNewAlbumsAction(res));
    })
  }
}

//获取榜单数据：
export const getTopRankingsAction = (id) => {
  return dispatch => {
    getRankings(id).then(res => {
      switch (id) {
        case "19723756":
          dispatch(changeTopSongsAction(res));
          break;
        case "3779629":
          dispatch(changeNewSongsAction(res));
          break;
        case "2884035":
          dispatch(changeOriginalSongsAction(res));
          break;
        default:
          console.log("其他数据处理");
      }
    })
  }
}

