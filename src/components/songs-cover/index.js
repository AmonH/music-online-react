import React, { memo } from 'react';

import { SongsCoverWrapper } from './style';

import { getCount,getSizeImage } from '@/utils/format-utils';

export default memo(function HYSongsCover(props) {
  const { songInfo,renderType } = props;

  const showDiffTypeHtml = () => {
    if(!renderType || renderType=== "0") { //默认显示
      return <a href="javascript:;" className="cover-bottom-default">{songInfo.name}</a>;
    }else {
      return (
        <div className="cover-bottom">
          <a href="javascript:;" className="text text-nowrap">{songInfo.name}</a>
          <p className="author">
            <span>by</span>
            <a href="javascript:;">{songInfo.copywriter || songInfo.creator.nickname}</a>
          </p>
        </div>
      )
    }
  }
  
  return (
    <SongsCoverWrapper>
      <div className="cover-top">
        <img className="img" src={getSizeImage(songInfo.picUrl,140)} alt={songInfo.name} />
        <a className="img-mask" href="#/"></a>
        <div className="pic-bottom sprite_cover">
          <i className="icon-headerset sprite_icon"></i>
          <span>{getCount(songInfo.playCount)}</span>
          <i className="icon-player sprite_icon"></i>
        </div>
      </div>
      
      {showDiffTypeHtml()}
    </SongsCoverWrapper>
  )
})
