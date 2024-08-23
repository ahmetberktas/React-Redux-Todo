import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "./Modal";
import { ActionTypes } from "../redux/actionTypes/todoTypes";
import { editTodo, removeTodo } from "../redux/actions/todoActions";
import axios from "axios";

const TodoCard = ({ todo }) => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    axios
      .delete(`/todos/${todo.id}`)
      .then(() => {
        dispatch(removeTodo(todo.id));
      })
      .catch((err) => {
        console.error("Todo silinirken hata oluştur", err);
      });
  };

  const handleDone = () => {
    const updated = { ...todo, is_done: !todo.is_done };
    axios
      .put(`/todos/${todo.id}`, updated)
      .then(() => {
        dispatch(editTodo(updated));
      })
      .catch((err) => {
        console.error("Todo güncellenirken hata oluştu", err);
      });
  };

  return (
    <>
      <div className="border shadow shadow-lg p-4 my-5">
        <h5>{todo.text}</h5>
        <h6>{todo.is_done ? "Tamamlandı" : "Devam Ediyor"}</h6>
        <p>{new Date(todo.created_at).toLocaleDateString()}</p>
        <button onClick={() => setModal(true)} className="btn btn-warning ">
          Düzenle
        </button>
        <button onClick={handleDone} className="btn btn-success mx-2">
          {todo.is_done ? "Geri Al" : "Tamamla"}
        </button>
        <button onClick={handleDelete} className="btn btn-danger">
          Sil
        </button>
      </div>
      {modal && <Modal close={() => setModal(false)} todo={todo}></Modal>}
    </>
  );
};

export default TodoCard;
