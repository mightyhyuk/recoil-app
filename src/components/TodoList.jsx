import { useRecoilValue } from "recoil";
import { todoListState } from "../lib/recoil-atoms";

import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";

function TodoList() {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}

export default TodoList;
