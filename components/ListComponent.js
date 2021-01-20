import { useContext } from "react";
import { ListContext } from "../assets/contexts/ListContext";
import ListDetail from "./ListDetail";

const ListComponent = () => {
  const { list } = useContext(ListContext);

  return list.length ? (
    <div>
      {list.map((l) => {
        return(<ListDetail list={l} key={l.id} />);
      })}
    </div>
  ) : (
    <div></div>
  );
};

export default ListComponent;
