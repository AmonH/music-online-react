import React, { memo } from "react";
import { NavLink } from "react-router-dom";

import {headerLinks} from "@/common/local-data";

import { HeaderWrapper } from "./style";

export default memo(function MYAppHeader() {
  const showItemHtml = item => {
    if(item.routing) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      );
    } else {
      return <a href={item.link}>{item.title}</a>;
    }
  }

  return (
    <HeaderWrapper>
      <div className="top-nav wrap-v1">
        <a href="#/" className="nav-logo sprite_01">网易云音乐</a>
      
        <ul className="nav-list">
          {
            headerLinks.map(item => (
              <li className="nav-list-item" key={item.title}>{showItemHtml(item)}</li>)
            )
          }
        </ul>

        <div className="nav-search">
          <label className="search-logo sprite_01"></label>
          <input className="search-input" type="text" placeholder="音乐/视频/电台/用户" />
        </div>
        <div className="nav-fcreator"><a href="#/">创作者中心</a></div>
        <a className="nav-login" href="#/">登录</a>
      </div>

      <div className="top-line"></div>
    </HeaderWrapper>
  );
});
