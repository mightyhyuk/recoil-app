import { atom, selector } from "recoil";

export const todoListState = atom({
  key: "TodoList",
  default: [],
});

export const todoListFilterState = atom({
  key: "TodoListFilter",
  default: "Show All",
});

export const filteredTodoListState = selector({
  key: "FilteredTodoList",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    if (filter === "Show Completed")
      return list.filter((item) => item.isComplete);
    else if (filter === "Show Uncompleted")
      return list.filter((item) => !item.isComplete);
    else return list;
  },
});
