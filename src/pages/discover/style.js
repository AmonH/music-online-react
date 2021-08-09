import styled from "styled-components";

export const DiscoverWrapper = styled.div`
  .top-wrapper {
    height: 34px;
    background-color: #c20c0c;
  }
  .top-menu {
    display: flex;
    width: 750px;
    height: 34px;
    justify-content: space-evenly;
    align-items: center;
    padding-left: 325px;
    text-align: center;
  }
  .menu-item {
    flex: 1 1 auto;
    display: inline-block;
    height: 34px;
    line-height: 34px;
    color: #fff;
    span{
      padding:5px 10px;
      border-radius: 20px;
    }
    &:hover span,
    &.active span {background-color: #940a0a;}
  }
`;
