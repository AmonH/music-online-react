import React, { memo, useEffect, useRef } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Carousel } from "antd";

import { HYNewAlbumsWrapper } from "./style";

import HYThemeHeaderRCM from "@/components/theme-header-rcm";
import HYAlbumsCover from "@/components/albums-cover";
import { getNewAlbumsAction } from "../../store/actionCreators";

export default memo(function HYNewAlbums() {
  //获取redux内state的数据newAlbums
  const { newAlbums } = useSelector(
    (state) => ({
      newAlbums: state.getIn(["recommend", "newAlbums"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewAlbumsAction(10));
  }, [dispatch]);
  const slideRef = useRef();

  //其他业务逻辑：
  const NewAlbumsItem = (props) => {
    const {infos} = props;
  
    return (
      <div className="slide-item">
          {infos.map((item,index) => (
            <div className="ablum-item sprite_02" key={index}>
              <HYAlbumsCover info={item} size={100} />
            </div>
          ))}
      </div>
    )
  };
  
  return (
    <HYNewAlbumsWrapper>
      <HYThemeHeaderRCM title="新碟上架" />
      <div className="content">
        <Carousel className="content-slide" ref={slideRef} dots={false}>
          {newAlbums && [newAlbums.slice(0, 5), newAlbums.slice(5)].map((item, index) => (
            <NewAlbumsItem infos={item} key={index} />
          ))}
        </Carousel>
        <a
          href="javascript:;"
          className="slide-left sprite_02"
          onClick={(e) => slideRef.current.prev()}
        ></a>
        <a
          href="javascript:;"
          className="slide-right sprite_02"
          onClick={(e) => slideRef.current.next()}
        ></a>
      </div>
    </HYNewAlbumsWrapper>
  );
});
