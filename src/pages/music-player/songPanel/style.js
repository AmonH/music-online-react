import styled from 'styled-components';
import sprite_icon2 from '@/assets/img/sprite_icon2.png';
import sprite_button from '@/assets/img/sprite_button.png';

export const HYSongPanelWrapper = styled.div`
  .panel {
    display: flex;
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;
    background-color: #fff;
  }
  .panel-left {
    display: flex;
    flex: 1;
    padding-top: 20px;
    .img-area {
      flex: 0 0 270px;
      min-width: 270px;
      text-align: center;
    }
    .img-cover {
      position: relative;
      width: 206px;
      height: 205px;
      line-height: 205px;
      margin: 0 auto;
    }
    .img-mask {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background-position: -140px -580px;
    }
    .img-pic {
      display: inline-block;
      width: 130px;
      height: 130px;
      margin: 0 auto;
    }
    .external-link {
      position: relative;
      display: inline-block;
      padding: 16px;
      color: #0c73c2;
      text-decoration: underline;
      &::before {
        position: absolute;
        top: 18px;
        left: -2px;
        content: "";
        display: inline-block;
        width: 16px;
        height: 16px;
        background: url(${sprite_icon2}) no-repeat -34px -863px;
      }
    }
    .song-detail {
      flex: 1;
      .item-sd {
        padding-bottom: 6px;
        &.title {
          font-size: 24px;
          span { padding: 0 10px;}
        }
        &.operation {
          .btn-primary {
            margin-right: 6px;
          }
          .btn-play {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            margin-right: 0;
          }
          .btn-add {
            position: relative;
            margin-left: -1px;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            border-left: 0;
            &::after {
              position: absolute;
              top: 1px;
              left: 0;
              display: inline-block;
              content: "";
              width: 1px;
              height: 29px;
              background-color: rgba(255, 255, 255, 0.3);
            }
          }
        }
      }
      .icon-single {
        display: inline-block;
        width: 54px;
        height: 24px;
        background-position: 0 -463px;
        vertical-align: middle;
      }
    }
    .lyric {
      height: 380px;
      line-height: 24px;
      white-space: pre-wrap;
      &.lyric-open {
        height: auto;
      }
      .section-two {
        display: none;
      }
      .toggle-more {
        color: #0c73c2;
        cursor: pointer;
        .icon {
          display: inline-block; 
          width: 11px;
          height: 8px;
          background: url(${sprite_icon2}) no-repeat 0 0;
        }
        .icon-expand { background-position: -65px -520px; }
        .icon-shrink { background-position: -45px -520px; }
      }
    }
  }
  .panel-right {
    flex: 0 0 270px;
    min-width:270px;
    border-left: 1px solid #ccc;
  }
`;