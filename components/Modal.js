import { useState, useRef } from "react";
import db from "../assets/firebase/firebase";
import Delete from "./IconComponents/Delete";

const Modal = ({ title, body, id, showModal, setShowModal }) => {
  const [modalTitle, setModalTitle] = useState(title);
  const [modalBody, setModalBody] = useState(body);

  const modalRef = useRef();

  const removeTodo = () => {
    db.collection("keepList").doc(id).delete();
  };

  const updateTodo = () => {
    db.collection("keepList").doc(id).update({
      title: modalTitle,
      body: modalBody,
    });
  };

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
      updateTodo();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTodo();
    setShowModal(false);
  };

  const handleTitleChange = (e) => {
    setModalTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setModalBody(e.target.value);
  };

  return (
    <div>
      {showModal ? (
        <React.Fragment>
          <div
            onClick={closeModal}
            ref={modalRef}
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <main className="border dark:border-gray-400 dark:bg-background  bg-white break-all p-3 pb-1 rounded-md overflow-hidden h-72 w-full sm:w-3/4 sm:max-w-md md:max-w-md lg:max-w-lg mx-auto mt-10 mb-5 shadow-md transition cursor-text">
              <form onSubmit={handleSubmit} className="py-2 pb-1">
                <div className="flex flex-col">
                  {
                    <input
                      type="text"
                      placeholder="Title"
                      onChange={handleTitleChange}
                      className="dark:text-offwhite dark:bg-background  font-bold px-2 pt-1 outline-none pb-2 font-roboto text-base sm:text-sm md:text-sm lg:text-sm"
                      value={modalTitle}
                    />
                  }

                  <textarea
                    value={modalBody}
                    className="dark:text-offwhite dark:bg-background font-normal px-2 pt-2 outline-none font-roboto text-base sm:text-sm md:text-sm lg:text-sm"
                    type="text"
                    rows="6"
                    cols="20"
                    placeholder="Take a note..."
                    onChange={handleBodyChange}
                    style={{ resize: "none" }}
                  />
                </div>

                <div className="flex justify-between pt-9 sm:pt-16 md:pt-16">
                  <div
                    onClick={() => removeTodo()}
                    tabIndex="0"
                    className="cursor-pointer self-end p-2 bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 transition rounded select-none focus:outline-none dark:text-offwhite dark:bg-background dark:hover:bg-gray-200 dark:focus:bg-gray-200 "
                  >
                    <Delete />
                  </div>
                  <button
                    type="submit"
                    tabIndex="0"
                    className="font-bold text-xs font-std text-gray-700 bg-gray-100 rounded-md px-5 py-1.5 transition select-none hover:bg-gray-200 focus:bg-gray-200 focus:outline-none dark:text-offwhite dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:bg-gray-600 "
                  >
                    Done
                  </button>
                </div>
              </form>
            </main>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default Modal;
