import React, { memo, useState,useEffect,useRef,useCallback } from 'react';
import { useDispatch, useSelector,shallowEqual } from 'react-redux';

import { HYPlaybarWrapper } from "./style";
import { 
  getSizeImage,
  formatMinuteSecond,
  getMusicPlayerSong
} from "@/utils/format-utils";

import { Slider } from 'antd';
import classnames from 'classnames';

export default memo(function HYPlaybar(props) {
  const [currentTime,setCurrentTime] = useState(0);
  const [progress,setProgress] = useState(0);
  const [isChanging,setIsChanging] = useState(false);
  const [isPlaying,setIsPlaying] = useState(false);
  const [isShowPlaylist,setIsShowPlaylist] = useState(false);

  //获取redux中的歌曲详情数据：
  const { playlist,currentSong } = useSelector(state => ({
    playlist: state.getIn(["musicPlayer","playlist"]),
    currentSong: state.getIn(["musicPlayer","currentSong"])
  }),shallowEqual);
  const playRef = useRef();
  const dispatch = useDispatch();
  
  useEffect(() => {
    
  },[dispatch]);
  useEffect(() => {
    //在歌曲发生改变后才需要重新获取数据。在同一首歌曲时，src不需要发生改变
    if(!currentSong.id)  { 
      return false; 
    } else {
      playRef.current.src = getMusicPlayerSong(currentSong.id);
      playRef.current.play();
      setIsPlaying(true);
    }
  },[currentSong.id]);


  //其他业务逻辑：
  const coverImgUrl = "https://s4.music.126.net/style/web2/img/default/default_album.jpg";
  const picUrl = (currentSong.al && currentSong.al.picUrl) || coverImgUrl;
  const songName = currentSong.name || "";
  const artist = (currentSong.ar && currentSong.ar[0].name) || "";
  const duration = currentSong.dt || 0;
  const playCurrentSong = useCallback(() => {
    isPlaying ? playRef.current.pause() : playRef.current.play();
    setIsPlaying(!isPlaying);
  },[isPlaying]);
  const timeUpdate = (e) => {
    if(!isChanging) {
      setCurrentTime(e.target.currentTime*1000);
      setProgress((currentTime/duration) * 100);
    }
  }
  const sliderChange = useCallback((value) => {
    setIsChanging(true);
    setProgress(value);
  },[]);
  const sliderAfterChange = useCallback((value) => {
    const currentTime = (value/100 * duration)/1000; //转为秒
    playRef.current.currentTime = currentTime;
    setCurrentTime(currentTime*1000); //转为毫秒
    setIsChanging(false);
    if(!isPlaying) {
      playCurrentSong();
    }
  },[duration,isPlaying,playCurrentSong]);

  const toggleShowPlaylist = () => {
    setIsShowPlaylist(!isShowPlaylist);
  }
  const getSongArtists = (arr) => {
    let str = "";
    arr.forEach((item,index) => {
      index === 0 ? (str += item.name) : (str += "/" + item.name);
    })
    return str;
  }

  return (
    <HYPlaybarWrapper>
      <div className="inner">
        <div className="up-down">
          <div className="left-lock sprite_playbar">
            <a href="javascript:;" className="btn sprite_playbar"></a>
          </div>
          <div className="right-cover sprite_playbar"></div>
        </div>
        <div className="bar-bg"></div>
        <div className="wrap-inner">
          <div className="play-item play-btns">
            <a href="javascript:;" className="prev" title="上一首(ctrl+←)">上一首</a>
            <a href="javascript:;" 
               className={classnames("on-pause",isPlaying ? "playing":null)} 
               title="播放/暂停(p)"
               onClick={e => playCurrentSong()}>播放/暂停</a>
            <a href="javascript:;" className="next" title="下一首(ctrl+→)">下一首</a>
          </div>
          <div className="play-item play-icon">
            <img src={getSizeImage(picUrl,35)} alt="" />
            <a href="javascript:;" className="mask"></a>
          </div>
          <div className="play-item play-slider">
            <div className="words">
              <a href="javascript:;" className="song-name">{songName}</a>
              <a href="javascript:;" className="artist">{artist}</a>
              {
                playlist.length ? (<a href="javascript:;" className="link"></a>):null
              }
            </div>
            <div className="slider">
              <div className="slider-bg">
                <Slider defaultValue={0}
                        value={progress}
                        onChange={sliderChange} 
                        onAfterChange={sliderAfterChange} />
              </div>
              <span className="slider-time">
                {formatMinuteSecond(currentTime)} / {formatMinuteSecond(duration)}
              </span>
            </div>
          </div>
          <div className="play-item play-share">
            <a href="javascript:;" className="icon icon-pip" title="画中画歌词">画中画歌词</a>
            <a href="javascript:;" className="icon icon-add" title="收藏">收藏</a>
            <a href="javascript:;" className="icon icon-share" title="分享">分享</a>
          </div>
          <div className="play-item play-ctrl">
            <a href="javascript:;" className="icon icon-vol"></a>
            <a href="javascript:;" className="icon icon-loop" title="循环"></a>
            <a href="javascript:;" 
               className="icon icon-list" 
               onClick={e => toggleShowPlaylist()}>{playlist.length}</a>
          </div>
        </div>
      </div>

      {
        isShowPlaylist ? (
          <div className="bar-playlist">
            <div className="head">
              <div className="play-left">
                <div className="title">播放列表({playlist.length})</div>
                <div className="operation">
                  <a href="javascript:;">
                    <i className="icon icon-collect"></i>
                    收藏全部
                  </a>
                  <a href="javascript:;">
                    <i className="icon icon-clear"></i>
                    清除
                  </a>
                </div>
              </div>
              <div className="play-right">{currentSong.name}</div>
            </div>
            <div className="content">
              <div className="play-left">
                <ul>
                  {
                    playlist.map(item => (
                      <li key={item.id} 
                          className={classnames("playlist-item",item.id === currentSong.id ? "active":null)}>
                        <div className="song-name">{item.name}</div>
                        <a href="javascript:;" 
                           className="singer-name text-nowrap">{getSongArtists(item.ar)}</a>
                        <span className="song-time">{formatMinuteSecond(item.dt)}</span>
                        <a href="javascript:;" className="link-to">
                          <i className="icon icon-link"></i>
                        </a>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="play-right">歌词</div>
            </div>
          </div>
        ) : null
      }
      <audio ref={playRef} onTimeUpdate = {timeUpdate} />
    </HYPlaybarWrapper>
  );
});
