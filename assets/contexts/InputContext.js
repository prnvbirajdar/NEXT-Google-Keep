// import { createContext, useState } from "react";

// export const InputContext = createContext();

// const InputContextProvider = (props) => {
//   const [list, setList] = useState([
//     {
//       title: "hi",
//       body: "hellow world",
//     },
//     {
//       title: "hi",
//       body: "hellow world",
//     },
//   ]);

//   const addList = (title, body) => {
//     setList([...list, { title: title, body: body, id }]);
//   };

//   const removeList = (id) => {
//     setList(list.filter((l) => l.id !== id));
//   };

//   return (
//     <ListContext.Provider value={{ list, addList, removeList }}>
//       {props.children}
//     </ListContext.Provider>
//   );
// };

// export default ListContextProvider;
