import { useState, useContext } from "react";
import { ListContext } from "../assets/contexts/ListContext";

const InputArea = () => {
  const { list, addList } = useContext(ListContext);

  const [inputTitle, setInputTitle] = useState("");
  const [inputBody, setInputBody] = useState("");
  const [showInput, setShowInput] = useState(false);

  const handleOnFocus = () => {
    setShowInput(false);
  };

  console.log(inputTitle);
  console.log(inputBody);

  const handleSubmit = () => {
    addList(inputTitle, inputBody);
    setInputBody("");
    setInputTitle("");
  };

  return (
    <main className="flex">
      <input
        type="text"
        placeholder="Title"
        value={inputTitle}
        onChange={(e) => setInputTitle(e.target.value)}
        onFocus={handleOnFocus}
      />
      <textarea
        type="text"
        rows="4"
        cols="50"
        placeholder="Take a note..."
        value={inputBody}
        onChange={(e) => setInputBody(e.target.value)}
      />
      <button onClick={handleSubmit}>DONE</button>
    </main>
  );
};

export default InputArea;

// { inputBody, inputTitle, setInputBody, setInputTitle }
