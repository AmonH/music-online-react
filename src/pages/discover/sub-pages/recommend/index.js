import React, { memo } from 'react';

import {
  RecommendWrapper,
  RecommendContent,
  RecomendLeft,
  RecomendRight
} from './style';

import HYTopBanners from './sub-cpns/top-banners';
import HYHotRecommend from './sub-cpns/hot-recommend';
import HYNewAlbums from './sub-cpns/new-albums';
import HYRankings from './sub-cpns/rankings';
import HYUserLogin from './sub-cpns/user-login';
import HYResidengSingers from './sub-cpns/resident-singers';
import HYHotAnchors from './sub-cpns/hot-anchors';

function HYRecommend(props) {
  return (
    <RecommendWrapper>
      <HYTopBanners />
      <RecommendContent className="wrap-v2">
        <RecomendLeft>
          {/* 热门推荐 */}
          <HYHotRecommend />
          {/* 新碟上架 */}
          <HYNewAlbums />
          {/* 榜单 */}
          <HYRankings />
        </RecomendLeft>

        <RecomendRight>
          {/* 用户登录 */}
          <HYUserLogin />
          {/* 入驻歌手 */}
          <HYResidengSingers />
          {/* 热门主播 */}
          <HYHotAnchors />
        </RecomendRight>
      </RecommendContent>
    </RecommendWrapper>
  )
}

export default memo(HYRecommend);

//对比见top-banners/index.js
// function HYRecommend(props) {
//   const {getBanners,topBanners} = props;

//   useEffect(() => {
//     getBanners();
//   },[]);

//   return (
//     <div>
//       {topBanners.length}
//     </div>
//   )
// }
// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })
// const mapDispatchToProps = dispatch =>({
//   getBanners:() => {
//     dispatch(getTopBannersAction())
//   }
// })
// export default connect(mapStateToProps,mapDispatchToProps)(memo(HYRecommend));
