import React from "react";
import { useDispatch } from "react-redux";
import { ActionTypes } from "../redux/actionTypes/todoTypes";
import { editTodo } from "../redux/actions/todoActions";

const Modal = ({ close, todo }) => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const updated = { ...todo, text: e.target[0].value };
    dispatch(editTodo(updated));
    close();
  };
  return (
    <div className="modal d-block text-black">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <form onSubmit={handleSubmit} className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Todo'yu Düzenle
            </h5>
          </div>
          <div className="modal-body">
            <label>Yeni Todo'yu Belirle</label>
            <input
              defaultValue={todo.text}
              className="form-control"
              type="text"
            ></input>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" onClick={close}>
              Kapat
            </button>
            <button type="submit" className="btn btn-success">
              Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
