import { useState, useEffect } from "react";
import InputArea from "../components/InputArea";

const Home = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputBody, setInputBody] = useState("");
  const [todo, setTodo] = useState([]);

  return (
    <div>
      <InputArea />
    </div>
  );
};

export default Home;
