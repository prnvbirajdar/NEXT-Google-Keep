import { useState, useContext } from "react";
import { ListContext } from "../assets/contexts/ListContext";
import Modal from "./Modal";

const ListDetail = ({ list }) => {
  const [showModal, setShowModal] = useState(false);

  const { removeList } = useContext(ListContext);

  console.log(showModal);

  return (
    <section >
      <div
        onClick={() => setShowModal(true)}
        className="bg-white flex flex-col min-w-xs max-w-xs border rounded-md p-3 m-auto break-words hover:shadow-md transition h-full"
      >
        <div className="flex justify-between">
          {list.title.length === 0 ? (
            <React.Fragment></React.Fragment>
          ) : (
            <p className="px-1.5">
              <strong>{list.title}</strong>
            </p>
          )}
        </div>

        <p className="px-1.5">{list.body}</p>
        <button
          className="flex justify-end"
          onClick={() => removeList(list.id)}
        >
          X
        </button>
      </div>
      <Modal list={list} showModal={showModal} setShowModal={setShowModal} />
    </section>
  );
};

export default ListDetail;

// <div className=" cursor-pointer">II</div>
