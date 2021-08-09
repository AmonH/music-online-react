import React, { memo,useState,useEffect,useRef,useCallback } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Carousel } from "antd";

import { TopBannersWrapper } from "./style"; //导入样式

import { getTopBannersAction } from "../../store/actionCreators";

export default memo(function HYTopBanners(props) {
  //state
  const [currentIndex,setCurrentIndex] = useState(0);

  //组件和redux关联，获取数据和进行操作
  //connect函数内部已经对性能做了优化
  //useSelector的第二个参数没传时，会影响性能;第二个参数shallowEqual会和connect一样进行浅层比较，优化性能
  //当组件不对某个数据依赖时，不会重新渲染该组件(性能优化)
  const { topBanners } = useSelector(
    (state) => ({
      // topBanners: state.get("recommend").get("topBanners")
      topBanners: state.getIn(["recommend", "topBanners"]), //等价于上面的代码
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  //其他hooks使用
  //发送网络请求
  useEffect(() => {
    dispatch(getTopBannersAction());
  }, [dispatch]);
  const bannerRef= useRef(null);

  const changeBgImage = useCallback((from,to) => {
    setCurrentIndex(to);
  },[]);

  //其他业务逻辑
  const bgImageUrl = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl+"?imageView&blur=40x20");
  
  return (
    <TopBannersWrapper bgImage={bgImageUrl}>
      <div className="top-banner">
        <div className="top-banner-inner wrap-v2">
          <div className="carousel-right">
            <Carousel effect="fade" 
                      autoplay 
                      dots={{className: "carousel-slide" }}
                      ref={bannerRef} 
                      beforeChange={changeBgImage}>
              {
                topBanners.map(item => (
                  <div key={item.imageUrl} className="carousel-item">
                    <img src={item.imageUrl} alt={item.typeTitle} className="carousel-img" />
                  </div>
                ))
              }
            </Carousel>
          </div>
          <a href="javascript:;" className="download-left">PC 安卓 iPhone WP iPad Mac 六大客户端</a>
        </div>
        <a href="javascript:;" className="slide-btn slide-left" onClick={e => bannerRef.current.prev()}></a>
        <a href="javascript:;" className="slide-btn slide-right" onClick={e => bannerRef.current.next()}></a>
      </div>
    </TopBannersWrapper>
  );
});
