import styled from "styled-components";

import footerIcon from "@/assets/img/foot_enter_new.png";

export const FooterWrapper = styled.div`
  background-color:#f2f2f2;
  border-top: 1px solid #d3d3d3;
  height: 172px;

  .footer-area {
    display: flex;
    height: 115px;
    align-items: center;
  }
  .footer-left {
    display: flex;
    flex-direction: column;
    flex: 0 0 520px;
  }
  .fl-item { 
    flex: 0 0 24px; 
    line-height:24px;
  }
  .copy-list {
    display: flex;
    justify-content: space-evenly;
    a { color:#909090; }

    .copy-item {
      flex: 1 1 auto;
      box-sizing: border-box;
      &:last-of-type .copy-text {
        border-right:0;
      }
    }
    .copy-text {
      border-right: 1px solid #bfbfbf;
      padding-right: 10px;
    }
  }
  .footer-right {
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .list-item {
    display: block;
    flex:1;
    width: 80px;
    height: 70px;
    text-align: center;
    color:#666;
  }
  .list-item .icon {
    display: block;
    width: 50px;
    height: 50px;
    margin: 0 auto 5px;
    background-image: url(${footerIcon});
    background-size: 110px 552px;
  }
  .amped .icon { background-position: -60px -451px; }
  .auth .icon { background-position: -60px -96px; }
  .musician .icon { background-position: 0px 6px; }
  .reward .icon { background-position: -60px -45px; }
  .plan .icon { background-position: 0 -96px;}
`;