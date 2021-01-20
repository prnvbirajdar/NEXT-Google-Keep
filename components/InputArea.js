import { useState, useContext } from "react";
import { ListContext } from "../assets/contexts/ListContext";

const InputArea = ({ inputBody, inputTitle, setInputBody, setInputTitle }) => {
  const { list } = useContext(ListContext);

  const [showInput, setShowInput] = useState(false);

  const handleOnFocus = () => {
    setShowInput(false);
  };

  const handleSubmit = () => {
    console.log(inputTitle);
    console.log(inputBody);
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
      <button type="submit" onSubmit={handleSubmit}>
        DONE
      </button>
    </main>
  );
};

export default InputArea;
