import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { HYRankingsWrapper } from "./style";
import HYThemeHeaderRCM from "@/components/theme-header-rcm";
import HYTopRanking from "@/components/top-ranking";

import { getTopRankingsAction } from "../../store/actionCreators";
import { 
  addPlaylistAction,
  changeCurrentSongAction 
} from '@/pages/music-player/store';


export default memo(function HYRankings() {
  //获取redux内的榜单数据：
  const state = useSelector((state) => ({
      topSongs: state.getIn(["recommend", "topSongs"]),
      newSongs: state.getIn(["recommend", "newSongs"]),
      originalSongs: state.getIn(["recommend", "originalSongs"]),
      playlist: state.getIn(["musicPlayer","playlist"])
  }),shallowEqual);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopRankingsAction("19723756"));
    dispatch(getTopRankingsAction("3779629"));
    dispatch(getTopRankingsAction("2884035"));
  }, [dispatch]);

  //其他业务逻辑：
  const playMuisc = item => { //将点击的歌曲存入到localStorage中
    if(state.playlist.length) {
      for(let i = 0; i < state.playlist.length; i++) {
        const iten = state.playlist[i];
        if(iten.id === item.id) {
          return false;
        }
      }
    } 
    dispatch(addPlaylistAction(item));
    dispatch(changeCurrentSongAction(item));
  }

  return (
    <HYRankingsWrapper>
      <HYThemeHeaderRCM title="榜单" />
      <div className="content">
        <div className="content-item">
          <HYTopRanking info={state.topSongs} playMusicHandle = {playMuisc} />
        </div>
        <div className="content-item">
          <HYTopRanking info={state.newSongs} playMusicHandle = {playMuisc} />
        </div>
        <div className="content-item">
          <HYTopRanking info={state.originalSongs} playMusicHandle = {playMuisc} />
        </div>
      </div>
    </HYRankingsWrapper>
  );
});
