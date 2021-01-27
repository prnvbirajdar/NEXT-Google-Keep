import db from "../assets/firebase/firebase";
import InputArea from "../components/InputArea";
import ListComponent from "./ListComponent";
import { useState, useEffect } from "react";

const Main = () => {
  const [mainTodoList, setMainTodoList] = useState([]);

  useEffect(() => {
    getKeepList();
  }, []);

  const getKeepList = () => {
    db.collection("keepList").onSnapshot((querySnapshot) => {
      setMainTodoList(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
          body: doc.data().body,
        }))
      );
    });
  };

  mainTodoList.map((list) => {
    console.log(list);
  });

  return (
    <React.Fragment>
      <InputArea
        mainTodoList={mainTodoList}
        setMainTodoList={setMainTodoList}
      />

      {mainTodoList.map((list) => {
        <div>
          <p>{list.title}</p>
          <p>{list.body}</p>
        </div>;
      })}

       <ListComponent
        mainTodoList={mainTodoList}
        setMainTodoList={setMainTodoList}
    />
    </React.Fragment>
  );
};

export default Main;
