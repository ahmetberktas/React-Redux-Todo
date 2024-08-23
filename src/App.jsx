import React, { useEffect } from "react";
import AddForm from "./components/AddForm";
import ListTodos from "./components/ListTodos";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setTodo } from "./redux/actions/todoActions";

axios.defaults.baseURL = `http://localhost:3000/`;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("/todos")
    .then((res) => dispatch(setTodo(res.data)))
  },[])

  return (
    <div className="container d-flex flex-column gap-5 my-5">
      <h2 className="text-center text-warning">REDUX</h2>
      <AddForm></AddForm>
      <ListTodos></ListTodos>
    </div>
  );
};

export default App;
