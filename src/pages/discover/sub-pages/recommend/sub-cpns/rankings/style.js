import styled from 'styled-components';

export const HYRankingsWrapper = styled.div`
  .content {
    display: flex;
    height: 472px;
    margin-top: 20px;
    border: 1px solid #cccccc;
  }
  .content-item {
    flex: 1;
    background-color: #f5f5f5;
    border-right: 1px solid #ccc;
    &:last-of-type {
      border-right: 0;
    }
  }
`;