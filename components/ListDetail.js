import { useState } from "react";
import Modal from "./Modal";

const ListDetail = ({ title, id, body }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section
      className="cursor-pointer focus:outline-none focus:ring-1 focus:ring-gray-400 rounded transition duration-300"
      tabIndex="0"
    >
      <div
        onClick={() => setShowModal(true)}
        className=" duration-300 transition border dark:border-gray-500 dark:hover:border-gray-300 dark:transition min-h-10 bg-white dark:bg-background flex flex-col min-w-xs max-w-xs border rounded-md pt-3 p-5 m-auto break-words hover:shadow-md transition h-full"
      >
        <div className="transition flex justify-between">
          {title === "" && body === "" ? (
            <h2>Empty note</h2>
          ) : (
            <p className="transition font-roboto text-base sm:text-sm md:text-sm lg:text-sm dark:text-offwhite ">
              <strong>{title}</strong>
            </p>
          )}
        </div>

        <p className="transition pt-1 font-roboto text-base sm:text-sm md:text-sm lg:text-sm dark:text-offwhite">
          {body}
        </p>
      </div>
       <Modal
        title={title}
        body={body}
        id={id}
        showModal={showModal}
        setShowModal={setShowModal}
     />
    </section>
  );
};

export default ListDetail;

// // import { useState } from "react";
// // import Modal from "./Modal";

// // const ListDetail = ({ list }) => {
// //   const [showModal, setShowModal] = useState(false);

// //   return (
// //     <section
// //       className="cursor-pointer focus:outline-none focus:ring-1 focus:ring-gray-400 rounded transition duration-300"
// //       tabIndex="0"
// //     >
// //       <div
// //         onClick={() => setShowModal(true)}
// //         className=" duration-300 transition border dark:border-gray-500 dark:hover:border-gray-300 dark:transition min-h-10 bg-white dark:bg-background flex flex-col min-w-xs max-w-xs border rounded-md pt-3 p-5 m-auto break-words hover:shadow-md transition h-full"
// //       >
// //         <div className="transition flex justify-between">
// //           {list.title.length === 0 && list.body.length === 0 ? (
// //             <h2>Empty note</h2>
// //           ) : (
// //             <p className="transition font-roboto text-base sm:text-sm md:text-sm lg:text-sm dark:text-offwhite ">
// //               <strong>{list.title}</strong>
// //             </p>
// //           )}
// //         </div>

// //         <p className="transition pt-1 font-roboto text-base sm:text-sm md:text-sm lg:text-sm dark:text-offwhite">
// //           {list.body}
// //         </p>
// //       </div>
// //       <Modal list={list} showModal={showModal} setShowModal={setShowModal} />
// //     </section>
// //   );
// // };

// // export default ListDetail;
