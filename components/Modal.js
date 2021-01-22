import { useState, useContext, useRef } from "react";
import { ListContext } from "../assets/contexts/ListContext";

const Modal = ({ list, showModal, setShowModal }) => {
  const [modalTitle, setModalTitle] = useState(list.title);
  const [modalBody, setModalBody] = useState(list.body);

  const { updateList, removeList } = useContext(ListContext);

  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
      updateList(modalTitle, modalBody, list.id);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateList(modalTitle, modalBody, list.id);
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
            <main className="bg-white border rounded-md overflow-hidden w-3/4 sm:max-w-md md:max-w-md lg:max-w-lg mx-auto mt-10 mb-5 shadow-md transition cursor-text">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col ">
                  {
                    <input
                      type="text"
                      placeholder="Title"
                      onChange={handleTitleChange}
                      className="pl-3 pt-1 outline-none font-std"
                      value={modalTitle}
                    />
                  }

                  <textarea
                    value={modalBody}
                    className="pl-3 pt-2 outline-none font-std"
                    type="text"
                    rows="4"
                    cols="20"
                    placeholder="Take a note..."
                    onChange={handleBodyChange}
                  />
                </div>

                <div className="flex justify-between">
                  <button
                    className="pb-2 pl-3"
                    onClick={() => removeList(list.id)}
                  >
                    X
                  </button>
                  <button
                    type="submit"
                    tabIndex="0"
                    className="font-std text-gray-700 bg-gray-100 rounded-md px-3 py-1 mr-1 mb-1 md:px-4 md:py-1 md:mr-1.5 md:mb-1.5 transition select-none hover:bg-gray-200 focus:bg-gray-200 focus:outline-none"
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
