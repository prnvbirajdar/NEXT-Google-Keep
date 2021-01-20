import { useContext } from "react";
import { ListContext } from "../assets/contexts/ListContext";
import ListDetail from "./ListDetail";

const ListComponent = () => {
  const { list } = useContext(ListContext);

  return list.length ? (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 gap-x-0 gap-y-5 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 sm:mx-12 ">
        {[...list].reverse().map((l) => {
          return <ListDetail list={l} key={l.id} />;
        })}
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default ListComponent;

//<div className="flex flex-wrap justify-center">

// className="grid grid-cols-1 gap-0 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 "
