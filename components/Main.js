import db from "../assets/firebase/firebase";
import InputArea from "../components/InputArea";
import ListComponent from "../components/ListComponent";
import { useState, useEffect } from "react";

const Main = () => {
  const [mainTodoList, setMainTodoList] = useState([]);

  return (
    <React.Fragment>
      <InputArea
        mainTodoList={mainTodoList}
        setMainTodoList={setMainTodoList}
      />
      <ListComponent
        mainTodoList={mainTodoList}
        setMainTodoList={setMainTodoList}
      />
    </React.Fragment>
  );
};

export default Main;
