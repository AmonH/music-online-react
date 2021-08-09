import React, { memo } from 'react';

import { HYUserLoginWrapper } from './style';

export default memo(function HYUserLogin() {
  
  return (
    <HYUserLoginWrapper>
     <div className="wrapper sprite_02">
       <p className="login-text">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
       <a href="javascript:;" className="login-btn sprite_02">用户登录</a>
     </div>
    </HYUserLoginWrapper>
  )
})
