import { useState } from 'react';
import Backdrop from './Backdrop';
import Modal from './Modal';

const Todo = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const deleteHandler = () => {
    setModalIsOpen(true);
  };

  const closeModalHandler = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div className="card">
        <h3>{props.title}</h3>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </div>
      {modalIsOpen && <Modal onClose={closeModalHandler} />}
      {modalIsOpen && <Backdrop onClose={closeModalHandler} />}
    </>
  );
};

export default Todo;
