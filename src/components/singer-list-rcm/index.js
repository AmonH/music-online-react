import React, { memo } from 'react';

import { HYSingerListRCMWrapper } from './style';

export default memo(function HYSingerListRCM(props) {
  const { title,isShow,infos } = props;

  return (
    <HYSingerListRCMWrapper>
      <h3 className="title">
        <span className="hd">{title}</span>
        { isShow ? <a href="javascript:;" className="check-all">查看全部&gt;&gt;</a> : null }
      </h3>
      <ul className="list">
        { 
          infos.map(item => (
            <li key={item.id} className="list-item">
              <a className="item-cover" href="javascript:;"></a>
              <img src={item.picUrl} alt={item.singer} className="img" />
              <p className="text">
                <span className="hd">{item.singer}</span>
                <span className="des text-nowrap">{item.des}</span>
              </p>
            </li>
          ))
        }
      </ul>
    </HYSingerListRCMWrapper>
  )
})
