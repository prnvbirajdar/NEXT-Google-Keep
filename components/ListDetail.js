import { useState } from "react";
import Edit from "./IconComponents/Edit";
import Modal from "./Modal";

const ListDetail = ({ list }) => {
  const [showModal, setShowModal] = useState(false);

  console.log(list);

  return (
    <section
      className="cursor-pointer focus:outline-none focus:shadow"
      tabIndex="0"
    >
      <div
        onClick={() => setShowModal(true)}
        className="min-h-10 bg-white flex flex-col min-w-xs max-w-xs border rounded-md pt-3 p-5 m-auto break-all hover:shadow-md transition h-full"
      >
        <div className="flex justify-between">
          {list.title.length === 0 && list.body.length === 0 ? (
            <h2>Empty note</h2>
          ) : (
            <p className=" font-roboto text-base sm:text-sm md:text-sm lg:text-sm">
              <strong>{list.title}</strong>
            </p>
          )}
        </div>

        <p className="pt-1 font-roboto text-base sm:text-sm md:text-sm lg:text-sm">
          {list.body}
        </p>
      </div>
      <Modal list={list} showModal={showModal} setShowModal={setShowModal} />
    </section>
  );
};

export default ListDetail;

// <div className="absolute bottom-0 right-0 p-1.5 m-2 cursor-pointer bg-gray-100 hover:bg-gray-200 transition rounded">
//           <Edit />
//         </div>
