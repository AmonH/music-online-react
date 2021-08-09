import styled from 'styled-components';

export const HYSingerListRCMWrapper = styled.div`
  margin-top: 15px;
  .title { 
    padding: 5px 0;
    border-bottom: 1px solid #ccc;
    color: #333;
    .hd { font-weight: 600; }
    .check-all {
      float: right;
    }
  }
  .list-item { 
    position: relative;
    .item-cover { 
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .text { 
      float: right;
      .hd,
      .des { 
        display: block;
      }
      .hd { 
        font-weight: 600;
      }
    }
  }
`;