import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeDeleteHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={closeDeleteHandler} onConfirm={closeDeleteHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeDeleteHandler} />}
    </div>
  );
}

export default Todo;
