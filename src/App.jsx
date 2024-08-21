import React from "react";
import AddForm from "./components/AddForm";
import ListTodos from "./components/ListTodos";

const App = () => {
  return (
    <div className="container d-flex flex-column gap-5 my-5">
      <h2 className="text-center text-warning">REDUX</h2>
      <AddForm></AddForm>
      <ListTodos></ListTodos>
    </div>
  );
};

export default App;
