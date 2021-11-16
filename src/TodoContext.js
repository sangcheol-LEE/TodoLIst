import React, { useReducer,createContext,useContext, useRef } from 'react';

const initialTodos = [
  {
    id: 1,
    text: "프로젝트 생성하기",
    done: true
  },
  {
    id: 2,
    text: "컴포넌트 스타일링 하기",
    done: true
  },
  {
    id: 3,
    text: "Context 만들기",
    done: false,
  },
  {
    id: 4,
    text: "기능 구현하기",
    done: false
  },
];

  /* 
   앞으로 만들 3가지 action !
    CREATE
    TOGGLE
    REMOVE
  */

const todoReducer = ( state, action ) =>{ 
  // 투두리듀서는 추후 유즈리듀서 함수에서 사용할 함수
  // 스테이트와 액션을 가져와서 그 다음 상태를 리턴해주는 함수 
  switch(action.type) {
    case "CREATE" :
      return state.concat(action.todo);
    case "TOGGLE" :
      return state.map(
        todo => todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE" :
      return state.filter(todo => todo.id !== action.id);
      default: 
        throw new Error(`Unhandled action type : ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  )
}

export function useTodoState() {
  const context = useContext(TodoStateContext);
  if(!context) {
    throw new Error ("Cannot find TodoProvider")
  }
  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if(!context) {
    throw new Error ("Cannot find TodoProvider")
  }
  return context;
}

export function useTodoNextId() {
  const context = useContext(TodoNextIdContext);
  if(!context) {
    throw new Error ("Cannot find TodoProvider")
  }
  return context;
}