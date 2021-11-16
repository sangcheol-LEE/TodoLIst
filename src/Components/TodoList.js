import React from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoContext";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1; //리스트가 되는 화면에서 todoTemplate에서 먹인 flex와 방향을 column으로 정했는데
  // 이때 1이라고 해줌으로써 자신이 차지 할 수 있는 모든 영역을 차지하겠다는 의미 
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto; //나중에 항목이 너무 많아지게 된다면 스크롤 바를 보여준다.overflow-y
 `; 

const TodoList = () => {
  const state = useTodoState();
  console.log(state)
  return (
  <TodoListBlock>
    <TodoItem text="프로젝트 생성하기" done={true} />
    <TodoItem text="컴포넌트 스타일링" done={true} />
    <TodoItem text="Context 만들기" done={true} />
    <TodoItem text="기능 구현하기" done={true} />
  </TodoListBlock>
  );
}

export default TodoList;