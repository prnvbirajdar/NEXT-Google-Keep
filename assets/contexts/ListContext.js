import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import db from "../firebase/firebase";

// import firebase from "../assets/firebase/firebase";

// firebase.firestore().collection("keepList").add({
//   title: "fake",
//   body: "more fake",
// });

export const ListContext = createContext();

const ListContextProvider = (props) => {
  const [mainList, setMainList] = useState([]);

  console.log(mainList);

  useEffect(() => {
    db.collection("keepList").onSnapshot((snapshot) => {
      const dbData = snapshot.docs.map((doc) => doc.data());
      console.log(dbData);
      dbData.map(({ title, body }) =>
        setMainList([...mainList, { title, body }])
      );
      //setMainList(snapshot.docs.map((doc) => doc.data().data));
    });
  }, []);

  const addList = (title, body) => {
    setMainList([...mainList, { title, body, id: uuidv4() }]);
  };

  const removeList = (id) => {
    setMainList(mainList.filter((l) => l.id !== id));
  };

  const updateList = (title, body, id) => {
    setMainList(mainList.map((l) => (l.id === id ? { title, body, id } : l)));
  };

  return (
    <ListContext.Provider value={{ mainList, addList, removeList, updateList }}>
      {props.children}
    </ListContext.Provider>
  );
};

export default ListContextProvider;
