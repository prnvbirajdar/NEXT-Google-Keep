import { useState, useEffect } from "react";
import ListContextProvider from "../assets/contexts/InputContext";
import InputArea from "../components/InputArea";

const Home = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputBody, setInputBody] = useState("");
  const [todo, setTodo] = useState([]);

  return (
    <div>
      <InputArea
        inputTitle={inputTitle}
        setInputTitle={setInputTitle}
        inputBody={inputBody}
        setInputBody={setInputBody}
      />
    </div>
  );
};

export default Home;
