import styled from "styled-components";
import sprite01 from "@/assets/img/sprite_01.png";

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;

  .top-nav {
    display: flex;
    justify-content: space-between;
    line-height: 70px; //设置子元素的垂直居中
    text-align: center; //设置子元素的水平居中
  }
  .nav-logo {
    display: block;
    flex:0 0 176px;
    min-width: 176px;
    height:69px;
    background-position: 0 0;
    text-indent:-9999px;
  }
  .nav-list {
    display: flex;
    flex: 1;
    justify-content: space-around;
    font-size: 14px;
    a { 
      display: inline-block;
      width:100%;
      height:100%;
      color: #ccc; 
    }
  }
  .nav-list-item {
      position: relative;
      flex: 1;
      a:hover,a.active {
        background-color: #131313;
        color:#fff;
      }
      .icon {
        display: none;
        width: 0;
        height: 0;
        border: 6px solid #c20c0c;
        border-color: transparent transparent #c20c0c transparent;
        position: absolute;
        bottom: 0;
        left:50%;
        margin-left:-3px;
      }
      .active .icon {
        display: block;
      }
      &:last-of-type {
        position: relative;
        &::after {
          position: absolute;
          content: "";
          width: 28px;
          height: 19px;
          background: url(${sprite01}) no-repeat -190px 0;
          top: 20px;
          right: -22px;
        }
      }
    }
  .nav-search {
    position: relative;
    flex:0 0 240px;
    min-width: 240px;
    text-align: right;
    .search-logo {
      display: inline-block;
      position: absolute;
      top: 50%;
      right: 125px;
      margin-top: -12px;
      width: 24px;
      height: 24px;
      background-position: -10px -103px;
    }
    .search-input {
      width: 158px;
      height: 32px;
      padding-left: 28px;
      box-sizing: border-box;
      border-radius: 30px;
      background-color: #fff;
    }
  }
  .nav-fcreator {
    flex:0 0 110px;
    min-width: 110px;
    a { 
      display: inline-block;
      width:90px;
      height: 32px;
      text-align: center;
      line-height: 32px;
      border: 1px solid #575757;
      border-radius: 20px;
      color: #ccc;
    }
    &:hover a{
      border-color: #ccc;
    }
  }
  .nav-login {
    flex:0 0 50px;
    min-width: 50px;
    &:hover { color: #ccc; }
  }
  .top-line {
    height: 5px;
    background-color: #c20c0c;
  }
`