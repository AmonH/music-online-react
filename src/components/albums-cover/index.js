import React, { memo } from "react";

import { AlbumsCoverWrapper } from "./style";

import { getSizeImage } from "@/utils/format-utils";

export default memo(function HYAlbumsCover(props) {
  const {info,size=100} = props;
  
  return (
    <AlbumsCoverWrapper imgSize={size}>
      <div className="img-cover">
        <img
          src={getSizeImage(info.picUrl, 100)}
          alt={info.name}
          className="img"
        />
        <a href="javascript:;" className="img-mask sprite_cover"></a>
        <a href="javascript:;" className="icon-play sprite_icon"></a>
      </div>
      <p className="text text-nowrap">{info.name}</p>
      <p className="author text-nowrap">{info.artist.name}</p>
    </AlbumsCoverWrapper>
  );
});
