import React, { memo, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector,shallowEqual } from 'react-redux';
import classnames from 'classnames';
import { Button } from 'antd';
import { 
  PlayCircleOutlined,
  FolderAddOutlined, 
  ShareAltOutlined,
  DownloadOutlined,
  CommentOutlined} from '@ant-design/icons';
import { HYSongPanelWrapper } from './style';

import { 
  getTheSongDetailAction,
  getTheSongLyricsAction,
  getTheSongCommentsAction } from '../store/actionCreators';

import { getSizeImage } from '@/utils/format-utils';

export default memo(function HYSongPanel(props) {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id");

  //hooks about data: 
  const [isShowMore,setIsShowMore] = useState(false);
  const dispatch = useDispatch();
  const { 
    theSongDetail,
    theSongLyrics,
    theSongComments 
  } = useSelector(state => ({
    theSongDetail: state.getIn(["musicPlayer","theSongDetail"]),
    theSongLyrics: state.getIn(["musicPlayer","theSongLyrics"]),
    theSongComments: state.getIn(["musicPlayer","theSongComments"])
  }),shallowEqual);
  useEffect(() => {
    dispatch(getTheSongDetailAction(id));
    dispatch(getTheSongLyricsAction(id));
    dispatch(getTheSongCommentsAction(id,1));
  },[]);

  //其他业务逻辑：
  const songName = theSongDetail.name,
        picUrl = theSongDetail.al && theSongDetail.al.picUrl,
        singerName = theSongDetail.ar && theSongDetail.ar[0].name,
        albumName = theSongDetail.al && theSongDetail.al.name,
        totalComments = theSongComments.total;
  const reg = /\[\d{2}:\d{2}.\d{2,}\]/g;
  const songLyrics = theSongLyrics.lyric && theSongLyrics.lyric.split(reg);
  const toggleShowMore = () => {
    setIsShowMore(!isShowMore);
  }
  
  return (
    <HYSongPanelWrapper>
      <div className="panel wrap-v2">
        <div className="panel-left">
          <div className="img-area">
            <div className="img-cover">
              <img src={getSizeImage(picUrl,130)} className="img-pic" alt="" />
              <div className="img-mask sprite_cover"></div>
            </div>
            <a href="javascript:;" className="external-link">生成外链播放器</a>
          </div>
          <div className="song-detail">
            <div className="item-sd title">
              <i className="icon-single sprite_icon2"></i>
              <span>{songName}</span>
            </div>
            <div className="item-sd item-singer">
              <span className="color-gray">歌手:  </span>
              <span className="color-blue"> {singerName}</span>
            </div>
            <div className="item-sd auth-album">
              <span className="color-gray">所属专辑:  </span>
              <span className="color-blue"> {albumName}</span>
            </div>
            <div className="item-sd operation">
              <Button className="btn-primary btn-blue btn-play" icon={<PlayCircleOutlined />}>播放</Button>
              <Button className="btn-primary btn-blue btn-add">+</Button>
              <Button className="btn-primary" icon={<FolderAddOutlined />}>收藏</Button>
              <Button className="btn-primary" icon={<ShareAltOutlined />}>分享</Button>
              <Button className="btn-primary" icon={<DownloadOutlined />}>下载</Button>
              <Button className="btn-primary" icon={<CommentOutlined />}>({totalComments})</Button>
            </div>
            <div className={classnames("lyric", {"lyric-open":isShowMore})}>
              <div className="section-one">
                { songLyrics && songLyrics.slice(0,14) }
              </div>
              <div className={classnames({"section-two":!isShowMore})}>
                { songLyrics && songLyrics.slice(14) }
              </div>
              <div className="toggle-more" onClick={toggleShowMore}>
                { !isShowMore ? "展开":"收起" }
                <i className={classnames("icon",!isShowMore ? "icon-expand":"icon-shrink")}></i>
              </div>
            </div>
          </div>
        </div>
        <div className="panel-right"></div>
      </div>
    </HYSongPanelWrapper>
  )
})
