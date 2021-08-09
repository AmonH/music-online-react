import React, { memo } from 'react';

import {HeaderRcmWrapper} from './style';

export default memo(function HYThemeHeaderRCM(props) {
  const {title,keywords} = props;

  return (
    <HeaderRcmWrapper>
      <div  className="header-left sprite_02">
        <a href="#/" className="title">{title}</a>
      </div>
      {
          keywords ? (
            <ul className="header-list">
              { keywords.map(item => <li className="list-item" key={item}><span>{item}</span></li>) }
            </ul>
          ) : null
       }
      <div className="header-right">
        <a href="javascript:;">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderRcmWrapper>
  )
})
