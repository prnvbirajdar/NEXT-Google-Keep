import { useState, useContext, useRef, useEffect } from "react";
import { ListContext } from "../assets/contexts/ListContext";

const InputArea = () => {
  const { list, addList } = useContext(ListContext);

  const [inputTitle, setInputTitle] = useState("");
  const [inputBody, setInputBody] = useState("");
  const [showInput, setShowInput] = useState(false);

  const titleRef = useRef(null);

  const handleOnFocus = () => {
    setShowInput(true);
  };

  console.log(inputTitle);
  console.log(inputBody);

  const handleSubmit = () => {
    addList(inputTitle, inputBody);
    setInputBody("");
    setInputTitle("");
  };

  const handleClickOutside = (e) => {
    const { current: wrap } = titleRef;
    if (wrap && !wrap.contains(e.target)) {
      setShowInput(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <main
      onClick={() => setShowInput(true)}
      onFocus={() => setShowInput(true)}
      className="flex flex-col border rounded-md overflow-hidden max-w-md mx-auto mt-10 mb-5 shadow transition cursor-text"
    >
      {showInput && (
        <input
          ref={titleRef}
          type="text"
          placeholder="Title"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
          onFocus={() => setShowInput(true)}
        />
      )}

      <textarea
        type="text"
        rows="2"
        cols="30"
        placeholder="Take a note..."
        value={inputBody}
        onChange={(e) => setInputBody(e.target.value)}
      />
      <button disabled={!inputBody && !inputTitle} onClick={handleSubmit}>
        DONE
      </button>
    </main>
  );
};

export default InputArea;

// { inputBody, inputTitle, setInputBody, setInputTitle }
