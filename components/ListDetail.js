import { useContext } from "react";
import { ListContext } from "../assets/contexts/ListContext";

const ListDetail = ({ list }) => {
  const { removeList } = useContext(ListContext);

  console.log(list);

  return (
    <section className="">
      <div className="bg-white flex flex-col min-w-xs max-w-xs border rounded-md p-3 m-auto break-words hover:shadow-md transition h-full">
        <div className="flex justify-between">
          <p className="p-1">
            <strong>{list.title}</strong>
          </p>
          <div className=" cursor-pointer invisible">II</div>
        </div>

        <p>{list.body}</p>
        <button
          className="flex justify-end"
          onClick={() => removeList(list.id)}
        >
          X
        </button>
      </div>
    </section>
  );
};

export default ListDetail;
