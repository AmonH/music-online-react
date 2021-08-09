import React, { memo } from 'react';

import { HYResidentSingersWrapper } from './style';

import HYSingerListRCM from '@/components/singer-list-rcm';

import { residentSingersDatas } from '@/common/local-data';

export default memo(function HYResidengSingers() {
  return (
    <HYResidentSingersWrapper>
      <div className="wrapper-inner">
        <HYSingerListRCM title="入驻歌手" infos={residentSingersDatas} isShow={true} />
      </div>
    </HYResidentSingersWrapper>
  )
})
