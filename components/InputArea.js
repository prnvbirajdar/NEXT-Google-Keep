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
      className="bg-white border rounded-md overflow-hidden max-w-250 sm:max-w-sm md:max-w-md mx-auto mt-10 mb-5 shadow-md transition cursor-text"
    >
      <div className="flex flex-col ">
        {showInput && (
          <input
            ref={titleRef}
            type="text"
            placeholder="Title"
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
            onFocus={() => setShowInput(true)}
            className="pl-3 pt-1 outline-none"
          />
        )}

        <textarea
          className="pl-3 pt-2 outline-none"
          type="text"
          rows="2"
          cols="20"
          placeholder="Take a note..."
          value={inputBody}
          onChange={(e) => setInputBody(e.target.value)}
          onFocus={() => setShowInput(true)}
        />
      </div>
      <div className="flex justify-end p-0 m-0">
        <button
          disabled={!inputBody && !inputTitle}
          onClick={handleSubmit}
          className=" text-gray-700 rounded-md  px-2 py-1 mr-1 mb-1 md:px-4 md:py-1 md:mr-1.5 md:mb-1.5 transition select-none hover:bg-gray-100 focus:outline-none focus:shadow-outline"
        >
          Done
        </button>
      </div>
    </main>
  );
};

export default InputArea;

// { inputBody, inputTitle, setInputBody, setInputTitle }
