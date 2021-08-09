import styled from "styled-components";

export const SongsCoverWrapper = styled.div`
  width: 140px;
  height: 204px;

  .cover-top {
    position: relative;
    width: 140px;
    height: 140px;
    .img {
      width: 100%;
    }
    .img-mask {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 27px;
      width: 100%;
    }
    .pic-bottom {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 27px;
      line-height: 27px;
      background-position: 0 -537px;
      color: #fff;
    }
    .icon-headerset,
    .icon-player {
      display: inline-block;
      width: 16px;
      height: 16px;
      vertical-align: middle;
      cursor: pointer;
    }
    .icon-headerset {
      background-position: 0 -21px;
      margin: 0 2px;
    }
    .icon-player {
      position: absolute;
      right: 5px;
      top: 50%;
      margin-top: -8px;
      background-position: 0 -60px;
      opacity: 0.6;
      &:hover { opacity: 1}
    }
  }
  .cover-bottom-default {
    display: block;
    padding-top: 10px;
    font-size: 14px;
    line-height: 16px;
  }
  .cover-bottom {
    padding-top: 10px;
    .text {
      display: block;
      font-size: 14px;
      line-height: 16px;
    }
    .author {
      font-size: 10px;
      color: #9d9d9d;
      span { padding-right: 6px; }
    }
  }
`;
