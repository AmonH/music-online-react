import styled from 'styled-components';

export const AlbumsCoverWrapper = styled.div`
  width: 100%;
  height: 100%;
  font-size: 12px;
  .img-cover {
    position: relative;
    width: 100%;
    height: ${props => props.imgSize + "px"};
    &:hover .icon-play{
      display: inline-block;
    }
  }
  .img-mask {
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    display: inline-block;
    background-position: 0 -570px;
  }
  .img {
    width: ${props => props.imgSize+"px"};
    height: ${props => props.imgSize+"px"};
  }
  .icon-play {
    display:none;
    position: absolute;
    bottom: 5px;
    right: 24px;
    width: 22px;
    height: 22px;
    background-position: 0 -111px;
  }
  .text {
    width: 78%;
    padding-top: 10px;
  }
  .author {
    color: #666;
  }
`;