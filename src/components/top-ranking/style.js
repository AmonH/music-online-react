import styled from "styled-components";

export const HYTopRankingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  .title {
    flex: 0 0 100px;
    height: 100px;
    padding: 10px;
  }
  .img-cover {
    position: relative;
    float: left;
    width: 80px;
    height: 80px;
    .img {
      width: 100%;
    }
    .img-mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: -10px -586px;
    }
  }
  .text {
    float: left;
    padding: 15px 0 0 10px;
    .text-title {
      display: block;
      font-size: 14px;
      font-weight: 600;
      padding-bottom: 6px;
    }
    .icon-play,
    .icon-collect {
      display: inline-block;
      width: 22px;
      height: 22px;
    }
    .icon-play {
      background-position: -267px -235px;
      margin-right: 5px;
    }
    .icon-collect {
      background-position: -300px -205px;
    }
  }
  .icon-play,
  .icon-addlist,
  .icon-collect {
    display: inline-block;
    width: 17px;
    height: 17px;
  }
  .icon-play {
    background-position: -267px -268px;
  }
  .icon-addlist {
    background-position: 2px -698px;
    margin: 0 5px;
  }
  .icon-collect {
    background-position: -297px -268px;
  }
  .list-item {
    display: flex;
    flex: 1;
    height: 32px;
    line-height: 32px;
    &:nth-child(odd) {
      background-color: #ececec;
    }
    &:hover {
      .song-link { text-decoration: underline; }
      .song-title { width: 96px; }
      .open { display: block; }
    }
    &:nth-child(-n+3) .order{
      color: #c20c0c;
      font-weight: 600;
    }
    .song-title {
      flex: 1;
      padding-left: 10px;
      .song-link {
        padding-left: 10px;
      }
    }
    .open {
      flex: 0 0 82px;
      display: none;
      .icon {
        vertical-align: middle;
      }
    }
  }
  .more {
    display: inline-block;
    flex: 0 0 32px;
    height: 32px;
    line-height: 32px;
    text-align: right;
    padding-right: 20px;
    background-color: #ececec;
    &:hover { color: #c20c0c; }
  }
`;
