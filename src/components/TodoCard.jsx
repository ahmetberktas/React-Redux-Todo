import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "./Modal";

const TodoCard = ({ todo }) => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch({
      type: "REMOVE_TODO",
      payload: todo.id,
    });
  };

  const handleDone = () => {
    const updated = { ...todo, is_done: !todo.is_done };
    dispatch({
      type: "EDIT_TODO",
      payload: updated,
    });
  };

  return (
    <>
      <div className="border shadow shadow-lg p-4 my-5">
        <h5>{todo.text}</h5>
        <h6>{todo.is_done ? "Tamamlandı" : "Devam Ediyor"}</h6>
        <p>{todo.created_at.toLocaleDateString()}</p>
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
