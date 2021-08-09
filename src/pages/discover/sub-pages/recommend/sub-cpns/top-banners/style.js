import styled from "styled-components";

import downloadImg from "@/assets/img/download.png";
import bannerSpriteImg from "@/assets/img/banner_sprite.png";

export const TopBannersWrapper = styled.div`
  .top-banner {
    position: relative;
    background: url(${props => props.bgImage}) center/6000px;
  }
  .top-banner-inner {
    display: flex;
    height: 285px;
    .ant-carousel .carousel-slide.slick-dots {
      z-index: 0;
    }
    .carousel-slide li {
      width: 6px;
      height: 6px;
      margin-right: 8px;
      margin-left: 8px;
      button {
        height: 6px;
        border-radius: 50%;
      }
      &.slick-active button {
        background-color: #c20202;
      }
   }
  }
  .carousel-right {
    width: 730px;
    height: 100%;
    overflow: hidden;
  }
  .carousel-item {
    width: 100%;
    height: 285px;
  }
  .carousel-img {
    height: 100%;
  }
  .download-left {
    display: inline-block;
    width: 254px;
    text-align: center;
    padding-top: 250px;
    background: url(${downloadImg}) no-repeat 0 0;
    color: #b4b4b4;
  }
  .slide-btn {
    display: inline-block;
    width: 37px;
    height: 63px;
    position: absolute;
    top: 50%;
    margin-top:-31.5px;
    background: url(${bannerSpriteImg}) no-repeat 0 0;
    &:hover {
      background-color: rgba(0,0,0,0.3);
    }
  }
  .slide-left {
    left: 85px;
    background-position: 0 -360px;
  }
  .slide-right {
    right: 85px;
    background-position: 0 -506px;
  }
`;
