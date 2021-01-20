import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const ListContext = createContext();

const ListContextProvider = (props) => {
  const [list, setList] = useState([]);

  const addList = (title, body) => {
    setList([...list, { title, body, id: uuidv4() }]);
  };

  const removeList = (id) => {
    setList(list.filter((l) => l.id !== id));
  };

  return (
    <ListContext.Provider value={{ list, addList, removeList }}>
      {props.children}
    </ListContext.Provider>
  );
};

export default ListContextProvider;
