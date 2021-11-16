import React from 'react';
import styled from 'styled-components';

const TodoHeadBlock = styled.div`
  padding: 48px 32px 24px 32px;
  border-bottom:1px solid #e9ecef;


  h1 {
    margin : 0;
    font-size : 35px;
    color: #343a40;
  }

  .day {
    margin-top:4px;
    color: #868e96;
    font-size: 21px;
  }

  .tasks-left{
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

const TodoHead = () => {
  return (
      <TodoHeadBlock>
        <h1>2021년 11월 16일 화</h1>
        <div className="day"> 화요일 </div>
        <div className="tasks-left">할 일 2개남음</div>

      </TodoHeadBlock>
    
    )
}

export default TodoHead;