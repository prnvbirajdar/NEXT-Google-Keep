import { useContext } from "react";
import { ListContext } from "../assets/contexts/ListContext";
import ListDetail from "./ListDetail";

const ListComponent = () => {
  const { mainList } = useContext(ListContext);

  console.log(mainList);

  return mainList.length ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-5 mx-4 sm:mx-12 ">
      {[...mainList].reverse().map((l) => {
        return <ListDetail list={l} key={l.id} />;
      })}
    </div>
  ) : (
    <div></div>
  );
};

export default ListComponent;

//<div className="flex flex-wrap justify-center">

// className="grid grid-cols-1 gap-0 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 "
