import React from "react";
import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";

const ListTodos = () => {
  /* todoReducer'a abone olma işlemi */
  const storeData = useSelector((store) => store);

  return (
    <div>
      {storeData.todos.length === 0 ? (
        <h5>Herhangi bir yapılacak eklenmedi.</h5>
      ) : (
        storeData.todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo}></TodoCard>
        ))
      )}
    </div>
  );
};

export default ListTodos;
