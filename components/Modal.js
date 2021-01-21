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
          <main className="bg-white border rounded-md overflow-hidden w-3/4 sm:max-w-md md:max-w-md lg:max-w-lg mx-auto mt-10 mb-5 shadow-md transition cursor-text">
          <form >
            <div className="flex flex-col ">
              {(
                <input
                  type="text"
                  placeholder="Title"
                  onChange={(e) => setInputTitle(e.target.value)}
                  className="pl-3 pt-1 outline-none"
                />
              )}
    
              <textarea
                className="pl-3 pt-2 outline-none"
                type="text"
                rows="3"
                cols="20"
                placeholder="Take a note..."
                onChange={(e) => setInputBody(e.target.value)}
              />
            </div>
    
            
              <div className="flex justify-end p-0 m-0">
                <button
                  type="submit"
                  tabIndex="0"
                  className="text-gray-700 bg-gray-100 rounded-md px-3 py-1 mr-1 mb-1 md:px-4 md:py-1 md:mr-1.5 md:mb-1.5 transition select-none hover:bg-gray-200 focus:bg-gray-200 focus:outline-none"
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



// <div className="relative w-auto my-6 mx-auto max-w-3xl">
// {/*content*/}
// <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
//   {/*header*/}
//   <div className="border-2 flex items-start justify-between px-4 py-3 border-solid border-gray-300 rounded-t">
//     <input
//       className="text-2xl font-semibold"
//       placeholder="Title"
//     />
//   </div>
//   {/*body*/}
//   <div className="border-2 relative px-4 flex-auto">
//     <textarea className="my-4 text-gray-600 text-lg leading-relaxed w-full" />
//   </div>
//   {/*footer*/}
//   <div className="border-2 flex items-center justify-end p-2 border-solid border-gray-300 rounded-b">
//     <button
//       className="bg-gray-100 text-gray-700 active:bg-gray-200 hover:bg-gray-200 font-bold uppercase text-sm px-5 py-2 rounded outline-none focus:outline-none "
//       type="button"
//       style={{ transition: "all .15s ease" }}
//       onClick={() => setShowModal(false)}
//     >
//       Close
//     </button>
//   </div>
// </div>
// </div>