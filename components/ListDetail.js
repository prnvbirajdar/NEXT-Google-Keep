import { useState } from "react";
import Edit from "./IconComponents/Edit";
import Modal from "./Modal";

const ListDetail = ({ list }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section
      className="cursor-pointer focus:outline-none focus:shadow "
      tabIndex="0"
    >
      <div
        onClick={() => setShowModal(true)}
        className="border dark:border-gray-500 dark:hover:border-gray-300 dark:transition min-h-10 bg-white dark:bg-background flex flex-col min-w-xs max-w-xs border rounded-md pt-3 p-5 m-auto break-words hover:shadow-md transition h-full"
      >
        <div className="flex justify-between">
          {list.title.length === 0 && list.body.length === 0 ? (
            <h2>Empty note</h2>
          ) : (
            <p className=" font-roboto text-base sm:text-sm md:text-sm lg:text-sm dark:text-offwhite ">
              <strong>{list.title}</strong>
            </p>
          )}
        </div>

        <p className="pt-1 font-roboto text-base sm:text-sm md:text-sm lg:text-sm dark:text-offwhite">
          {list.body}
        </p>
      </div>
      <Modal list={list} showModal={showModal} setShowModal={setShowModal} />
    </section>
  );
};

export default ListDetail;
