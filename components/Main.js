import db from "../assets/firebase/firebase";
import InputArea from "../components/InputArea";
import ListComponent from "./ListComponent";
import { useState, useEffect } from "react";

const Main = () => {
  //main array to save todos
  const [mainTodoList, setMainTodoList] = useState([]);

  useEffect(() => {
    getKeepList();
  }, []);

  //getKeepList calls firestore's 'keepList' collections, orders it my most recent created todo,
  //gives back a snapshot promise which has an array of all the todo items
  const getKeepList = () => {
    db.collection("keepList")
      .orderBy("timeStamp", "desc")
      .onSnapshot((querySnapshot) => {
        setMainTodoList(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            title: doc.data().title,
            body: doc.data().body,
          }))
        );
      });
  };

  return (
    <React.Fragment>
      <InputArea
        mainTodoList={mainTodoList}
        setMainTodoList={setMainTodoList}
      />

      <ListComponent mainTodoList={mainTodoList} />
    </React.Fragment>
  );
};

export default Main;
