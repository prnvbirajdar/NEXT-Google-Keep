import { useState, useEffect } from "react";
import ListContextProvider from "../assets/contexts/ListContext";
import InputArea from "../components/InputArea";
import ListComponent from "../components/ListComponent";
import Navbar from "../components/Navbar";

const Home = () => {
  //   const [inputTitle, setInputTitle] = useState("");
  //   const [inputBody, setInputBody] = useState("");
  //const [todo, setTodo] = useState([]);

  return (
    <React.Fragment>
      <ListContextProvider>
        <Navbar />
        <InputArea />
        <ListComponent />
      </ListContextProvider>
    </React.Fragment>
  );
};

export default Home;

// inputTitle={inputTitle}
//           setInputTitle={setInputTitle}
//           inputBody={inputBody}
//           setInputBody={setInputBody}
