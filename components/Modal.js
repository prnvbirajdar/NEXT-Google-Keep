import { useContext, useRef } from "react";
import { ListContext } from "../assets/contexts/ListContext";

const Modal = ({ list, showModal, setShowModal }) => {
  const { removeList } = useContext(ListContext);

  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
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
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="border-2 flex items-start justify-between px-4 py-3 border-solid border-gray-300 rounded-t">
                  <input
                    className="text-2xl font-semibold"
                    placeholder="Title"
                  />
                </div>
                {/*body*/}
                <div className="border-2 relative px-4 flex-auto">
                  <textarea className="my-4 text-gray-600 text-lg leading-relaxed w-full" />
                </div>
                {/*footer*/}
                <div className="border-2 flex items-center justify-end p-2 border-solid border-gray-300 rounded-b">
                  <button
                    className="bg-gray-100 text-gray-700 active:bg-gray-200 hover:bg-gray-200 font-bold uppercase text-sm px-5 py-2 rounded outline-none focus:outline-none "
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default Modal;
