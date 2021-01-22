import { useState, useEffect } from "react";
import ListContextProvider from "../assets/contexts/ListContext";
import InputArea from "../components/InputArea";
import ListComponent from "../components/ListComponent";
import Navbar from "../components/Navbar";

const Home = () => {
    

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
