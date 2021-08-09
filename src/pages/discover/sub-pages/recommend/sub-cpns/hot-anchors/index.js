import React, { memo } from 'react';

import { HYHotAnchorsWrapper } from './style';

import HYSingerListRCM from '@/components/singer-list-rcm';

import { hotAnchorsDatas } from '@/common/local-data';

export default memo(function HYHotAnchors() {
  return (
    <HYHotAnchorsWrapper>
      <div className="wrapper-inner">
        <HYSingerListRCM title="热门主播" infos={hotAnchorsDatas} />
      </div>
    </HYHotAnchorsWrapper>
  )
})
