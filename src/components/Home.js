import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  let todos = useSelector((state) => state.todos);
  return (
    <div>
      {todos.todolist}
    </div>
  );
};

export default Home;
