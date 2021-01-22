import { useState } from "react";
import Modal from "./Modal";

const ListDetail = ({ list }) => {
  const [showModal, setShowModal] = useState(false);

  console.log(list);

  return (
    <section>
      <div
        onClick={() => setShowModal(true)}
        className="min-h-10 bg-white flex flex-col min-w-xs max-w-xs border rounded-md p-3 m-auto break-words hover:shadow-md transition h-full"
      >
        <div className="flex justify-between">
          {list.title.length === 0 && list.body.length === 0 ? (
            <h3>EMPTY</h3>
          ) : (
            <p className="px-1.5 font-roboto text-lg">
              <strong>{list.title}</strong>
            </p>
          )}
        </div>

        <p className="px-1.5 font-roboto">{list.body}</p>
      </div>
      <Modal list={list} showModal={showModal} setShowModal={setShowModal} />
    </section>
  );
};

export default ListDetail;

// <div className=" cursor-pointer">II</div>

// <section>
// {list.title.length === 0 && list.body.length === 0 ? (
//    <div
//     onClick={() => setShowModal(true)}
//     className="min-h-10 bg-white flex flex-col min-w-xs max-w-xs border rounded-md p-3 m-auto break-words hover:shadow-md transition h-full"
//   >
//     <div className="flex justify-between">
//       {list.title.length === 0 ? (
//         <React.Fragment></React.Fragment>
//       ) : (
//         <p className="px-1.5">
//           <strong>{list.title}</strong>
//         </p>
//       )}
//     </div>

//     <p className="px-1.5">{list.body}</p>
//   </div>
// ) : (
//   <div
//     onClick={() => setShowModal(true)}
//     className="min-h-10 bg-white flex flex-col min-w-xs max-w-xs border rounded-md p-3 m-auto break-words hover:shadow-md transition h-full"
//   >
//     <div className="flex justify-between">
//       {list.title.length === 0 ? (
//         <React.Fragment></React.Fragment>
//       ) : (
//         <p className="px-1.5">
//           <strong>{list.title}</strong>
//         </p>
//       )}
//     </div>

//     <p className="px-1.5">{list.body}</p>
//   </div>
// )}
// <Modal list={list} showModal={showModal} setShowModal={setShowModal} />
// </section>
