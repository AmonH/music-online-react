import React, { memo } from "react";
import { NavLink } from "react-router-dom";

import { HYTopRankingWrapper } from "./style";

export default memo(function HYTopRanking(props) {
  if(!props.info) {
    return null;
  }
  const { name,coverImgUrl,tracks } = props.info;
 
  return (
    <HYTopRankingWrapper>
      <div className="title">
        <div className="img-cover">
          <img src={coverImgUrl} alt={name} className="img" />
          <a href="javascript:;" className="img-mask sprite_cover"></a>
        </div>
        <div className="text">
          <span className="text-title">{name}</span>
          <a href="javascript:;" className="icon-play sprite_02"></a>
          <a href="javascript:;" className="icon-collect sprite_02"></a>
        </div>
      </div>

      <ul> 
        {
          tracks && tracks.slice(0,10).map((item,index) => (
            <li className="list-item clearfix" key={item.id}>
              <div className="song-title text-nowrap">
                <span className="order">{index+1}</span>
                <NavLink className="song-link" to={`/discover/song?id=${item.id}`}>{item.name}</NavLink>
              </div>
              <div className="open">
                <a href="javascript:;" 
                   className="icon icon-play sprite_02"
                   onClick={e => props.playMusicHandle(item)}></a>
                <a href="javascript:;" className="icon icon-addlist sprite_icon2"></a>
                <a href="javascript:;" className="icon icon-collect sprite_02"></a>
              </div>
            </li>
          ))
        }
      </ul>

      <a href="javascript:;" className="more">查看全部&gt;&gt;</a>
    </HYTopRankingWrapper>
  );
});
