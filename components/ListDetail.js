import { useContext } from "react";
import { ListContext } from "../assets/contexts/ListContext";

const ListDetail = ({ list }) => {
  const { removeList } = useContext(ListContext);

  console.log(list);

  return (
    <div>
      <p>{list.title}</p>
      <p>{list.body}</p>
      <button onClick={()=>removeList(list.id)}>remove</button>
    </div>
  );
};

export default ListDetail;
