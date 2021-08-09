import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import {HotRecommendWrapper} from './style';
import HYThemeHeaderRCM from '@/components/theme-header-rcm';
import HYSongsCover from '@/components/songs-cover';

import {getHotRecommendsAction} from '../../store/actionCreators';

export default memo(function HYHotRecommend() {
  
  //使用useSelector的hook来获取数据：
  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(["recommend","hotRecommends"])
  }),shallowEqual);
  const dispatch = useDispatch();

  //网络请求：
  useEffect(() => {
    dispatch(getHotRecommendsAction(8));
  },[dispatch]);
  
  return (
    <HotRecommendWrapper>
      <HYThemeHeaderRCM title="热门推荐" keywords={["华语","流行","摇滚","民谣","电子"]} />
      <div className="recommend-list">
        {
          hotRecommends.map(item => (
            <HYSongsCover key={item.id} songInfo={item} />
          ))
        }
      </div>
    </HotRecommendWrapper>
  )
})
