import styled from "styled-components";

export const HYNewAlbumsWrapper = styled.div`
  padding-bottom : 20px;
  .content {
    position: relative;
    width: 100%;
    height: 186px;
    background-color: #f5f5f5;
    border: 1px solid #c2c2c2;
    margin-top: 20px;
  }
  .content-slide {
    width: 635px;
    margin: 18px auto 0;
  }
  .slide-item {
    display: flex;
    justify-content: space-between;
  }
  .ablum-item {
    flex:0 0 118px;
    min-width: 118px;
    height: 150px;
    background-position: -260px 100px;
    background-repeat: no-repeat;
  }
  .slide-left,
  .slide-right {
    display: inline-block;
    width: 17px;
    height: 17px;
    position: absolute;
    top: 50%;
    margin-top: -9px;
  }
  .slide-left {
    left: 5px;
    background-position: -260px -75px;
  }
  .slide-right {
    right: 5px;
    background-position: -300px -75px
  }
`;
