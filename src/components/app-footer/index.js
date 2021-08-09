import React, { memo } from "react";
import classnames from "classnames";

import {footerEnterLinks,footerCopyLinks} from "@/common/local-data";

import { FooterWrapper } from "./style";

export default memo(function MYAppFooter() {
  return (
    <FooterWrapper>
      <div className="footer-area wrap-v2">
        <div className="footer-left">
          <p className="fl-item copy-list">
            { 
            footerCopyLinks.map(item => (
              <a href={item.link} className="copy-item" key={item.title} >
                <span className="copy-text">{item.title}</span>
              </a>
            )) 
            }
          </p>
          <p className="fl-item">
            <span>网易公司版权所有©1997-2021</span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span>杭州乐读科技有限公司运营：<a href="#/">浙网文[2021] 1186-054号</a></span>
          </p>
          <p className="fl-item">
            <span>违法和不良信息举报电话：0571-89853516</span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span>举报邮箱：ncm5990@163.com</span>
          </p>
          <p className="fl-item">
            <a href="#/">粤B2-20090191-18  工业和信息化部备案管理系统网站</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#/"> 浙公网安备 33010902002564号</a>
          </p>
        </div>

        <div className="footer-right">
          {
            footerEnterLinks.map(item => (
              <a href={item.link} className={classnames("list-item",item.className)} key={item.title}>
                <i className="icon"></i>
                <span>{item.title}</span>
              </a>
            ))
          }
        </div>
      </div>
    </FooterWrapper>
  );
});
