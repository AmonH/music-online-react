import styled from "styled-components";
import playbarBg from "@/assets/img/playbar_sprite.png";
import progressBarBg from "@/assets/img/progress_bar.png";
import playlistBg from "@/assets/img/playlist_bg.png";
import playlistIcon from "@/assets/img/playlist.png";
const pipImgUrl = "https://p1.music.126.net/DLVi_1eymwAX8gDunfd2bg==/109951165524394991";

export const HYPlaybarWrapper = styled.div`
  position: fixed;
  zoom: 1;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0;
  color: #e2e2e2;
  a { color: #e2e2e2; }
  .inner {
    position: absolute;
    width: 100%;
    height: 53px;
    right: 0;
    /* top: -6px; */
    top: -53px;
  }
  .bar-bg {
    height: 53px;
    margin-right: 67px;
    background: url(${playbarBg}) repeat-x 0 0;
  }
  .sprite_playbar,
  .play-btns a,
  .play-slider .link,
  .play-share .icon,
  .play-ctrl .icon {
    background: url(${playbarBg}) no-repeat 0 9999px;
  }
  .left-lock {
    position: absolute;
    top: -14px;
    right: 15px;
    width: 52px;
    height: 67px;
    background-position: 0 -380px;
    .btn {
      display: block;
      width: 18px;
      height: 18px;
      margin: 6px 0 0 17px;
      background-position: -100px -380px;
      &:hover {
        background-position: -100px -400px;
      }
    }
  }
  .right-cover {
    position: absolute;
    top: -1px;
    right: 0;
    width: 15px;
    height: 54px;
    background-position: -52px -393px;
    pointer-events: none;
  }
  .wrap-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    left: 50%;
    top: 6px;
    width: 980px;
    height: 47px;
    transform: translate(-50%, 0);
    .play-btns {
      flex: 0 0 130px;
      min-width: 130px;
      a {
        display: inline-block;
        width: 28px;
        height: 28px;
        margin-right: 6px;
        text-indent: -9999px;
        vertical-align: middle;
      }
      .prev {
        background-position: 0 -130px;
      }
      .next {
        background-position: -80px -130px;
      }
      .on-pause {
        width: 36px;
        height: 36px;
        background-position: 0 -204px;
        &.playing {
          background-position: 0 -166px;
        }
      }
    }
    .play-icon {
      position: relative;
      flex: 0 0 34px;
      min-width: 34px;
      img {
        width: 34px;
        height: 34px;
        border-radius: 5px;
      }
      .mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
    .play-slider {
      flex: 0 0 581;
      min-width: 581px;
      .ant-slider { margin-top: 3px; }
      .ant-slider-track { background-color: #c20c0c; }
      .ant-slider-rail { 
        background: url(${progressBarBg}) repeat-x 0 0;
      }
      .ant-slider-handle { 
        border:4px solid #fff;
        background-color: #c20c0c;
      }
      .words {
         padding: 5px 0 0 6px;
         a { padding-right: 15px; }
        .song-name { color: #e8e8e8; }
        .artist { color: #9b9b9b; }
        .link { 
          display: inline-block;
          width: 14px;
          height: 15px;
          background-position: -110px -103px;
          vertical-align: middle;
          &:hover { background-position: -130px -103px; }
        }
      }
      .slider {
        position: relative;
        .slider-bg {
          width: 466px;
        }
        .slider-time {
          position: absolute;
          right: 35px;
          top: 50%;
          transform: translate(0,-50%);
          color: #a1a1a1;
          text-shadow: 0 1px 0 #121212;
        }
      }
    }
    .play-share {
      flex: 0 0 92px;
      min-width: 92px;
      .icon {
        display: inline-block;
        width: 25px;
        height: 25px;
        text-indent: -9999px;
        vertical-align: middle;
      }
      .icon-pip { 
        background: url(${pipImgUrl}) no-repeat 0 0;
      }
      .icon-add { background-position: -88px -163px; }
      .icon-share { background-position: -114px -163px; }
    }
    .play-ctrl {
      flex: 0 0 120px;
      min-width: 120px;
      .icon { 
        display: inline-block;
        width: 25px;
        height: 25px;
        text-indent: -9999px;
        vertical-align: middle;
      }
      .icon-vol { 
        background-position: -2px -248px;
      }
      .icon-loop { 
        background-position: -3px -344px;
      }
      .icon-list { 
        display: inline-block;
        width: 59px;
        height: 36px;
        background-position: -42px -63px;
        line-height: 36px;
        text-align: right;
        padding-right: 12px;
        color: #666;
        text-shadow: 0 1px 0 #080707;
        text-indent: 0;
        text-decoration: none;
      }
    }
  }
  .bar-playlist {
    position: fixed;
    bottom: 47px;
    left: 50%;
    transform: translate(-50%,0);
    width: 985px;
    height: 300px;
    color: #ccc;
    a { color: #ccc; }
    .icon {
      display: inline-block;
      width: 16px;
      height: 16px;
      background: url(${playlistIcon}) no-repeat 0 0;
      vertical-align: middle;
      margin: 0 5px;
    }
    .icon-collect { background-position: -24px 0; }
    .icon-clear { 
      background-position: -51px -20px;
      margin-left: 20px;
    }
    .icon-link { background-position: -80px -20px;}
    .head,
    .content {
      display: flex;
      background: url(${playlistBg}) no-repeat 0 9999px;
    }
    .head {
      height: 40px;
      line-height: 40px;
      background-position: 0 0;
      .play-left {
        padding: 0 20px;
        .title { float: left; }
        .operation { float: right; }
      }
      .play-right { text-align: center; }
    }
    .content {
      height: calc(100% - 40px);
      background-position: -1014px 0;
      background-repeat: repeat-y;
      .play-right { text-align: center; }
      .play-left { 
        height: 100%;
        overflow: auto;
        //修改滚动条的样式：
        &::-webkit-scrollbar {
          width: 6px;
          border-radius: 5px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.2);
        }
      }
      .playlist-item {
        display: flex;
        justify-content: space-between;
        height: 28px;
        line-height: 28px;
        padding-left: 20px;
        cursor: pointer;
        &:hover { background-color: rgba(0,0,0,0.5); }
        &.active { 
          position: relative;
          background-color: rgba(0,0,0,0.5); 
        }
        .song-name {
          flex: 1;
        }
        .singer-name {
          flex: 0 0 70px;
          min-width: 70px;
        }
        .song-time {
          flex: 0 0 75px;
          min-width: 75px;
          text-align: center;
        }
        .link-to {
          flex: 0 0 35px;
          min-width: 35px;
          text-align: right;
        }
      }
    }
    .play-left {
      flex: 0 0 552px;
      min-width: 552px;
      .title {
        font-size: 14px;
        font-weight: 600;
      }
    }
    .play-right {
      flex: 1;
    }
  }
`;
