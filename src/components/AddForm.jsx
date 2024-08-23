import React from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { ActionTypes } from "../redux/actionTypes/todoTypes";
import { addTodo } from "../redux/actions/todoActions";

const AddForm = () => {
  /* Dispatch Kurulum */
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    /* Yeni Todo Objesi Oluşturma */
    e.preventDefault();
    const newTodo = {
      id: v4(),
      text: e.target[0].value,
      is_done: false,
      created_at: new Date(),
    };
    /* Store Ekleme */
    dispatch(addTodo(newTodo));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex justify-content-center gap-2"
    >
      <input type="text" className="form-control"></input>
      <button className="btn btn-lg btn-outline-light">Ekle</button>
    </form>
  );
};

export default AddForm;
