import styled from 'styled-components';

export const HeaderRcmWrapper = styled.div`
  display: flex;
  height: 35px;
  line-height: 35px;
  border-bottom: 2px solid #c20c0c;

  .header-left {
    width: 120px;
    background-position: -230px -154px;
    padding-left: 28px;
    .title {
      font-size: 20px;
    }
  }
  .header-list {
    display: flex;
    .list-item {
      span {
        padding: 0 12px;
        border-right: 1px solid #bfbfbf;
      }
      &:last-of-type span {
        border-right:0;
      }
    }
  }
  .header-right {
    flex: 1 0  auto;
    text-align: right;
    padding-right: 5px;
    .icon {
      display: inline-block;
      width:16px;
      height: 12px;
      margin-left: 5px;
      background-position: 0 -239px;
    }
  }
`;