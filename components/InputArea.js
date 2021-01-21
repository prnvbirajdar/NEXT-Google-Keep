import { useState, useContext, useRef, useEffect } from "react";
import { ListContext } from "../assets/contexts/ListContext";

const InputArea = () => {
  const { list, addList } = useContext(ListContext);

  const [inputTitle, setInputTitle] = useState("");
  const [inputBody, setInputBody] = useState("");
  const [showInput, setShowInput] = useState(false);

  const titleRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
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
    <main className="bg-white border rounded-md overflow-hidden w-3/4 sm:max-w-md md:max-w-md lg:max-w-lg mx-auto mt-10 mb-5 shadow-md transition cursor-text">
      <form onSubmit={handleSubmit}>
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
            rows="3"
            cols="20"
            placeholder="Take a note..."
            value={inputBody}
            onChange={(e) => setInputBody(e.target.value)}
            onFocus={() => setShowInput(true)}
          />
        </div>

        {inputTitle || inputBody ? (
          <div className="flex justify-end p-0 m-0">
            <button
              type="submit"
              tabIndex="0"
              disabled={!inputBody && !inputTitle}
              className="text-gray-700 bg-gray-100 rounded-md px-3 py-1 mr-1 mb-1 md:px-4 md:py-1 md:mr-1.5 md:mb-1.5 transition select-none hover:bg-gray-200 focus:bg-gray-200 focus:outline-none"
            >
              Done
            </button>
          </div>
        ) : (
          <div></div>
        )}
      </form>
    </main>
  );
};

// bg-gray-100 text-gray-700 active:bg-gray-200 hover:bg-gray-200 font-bold uppercase text-sm px-5 py-2 rounded outline-none focus:outline-none 

export default InputArea;

// { inputBody, inputTitle, setInputBody, setInputTitle }

// import { useState, useContext, useRef, useEffect } from "react";
// import { ListContext } from "../assets/contexts/ListContext";

// const InputArea = () => {
//   const { list, addList } = useContext(ListContext);

//   const [inputTitle, setInputTitle] = useState("");
//   const [inputBody, setInputBody] = useState("");
//   const [showInput, setShowInput] = useState(false);

//   //   const titleRef = useRef(null);

//   const handleSubmit = () => {
//     addList(inputTitle, inputBody);
//     setInputBody("");
//     setInputTitle("");
//   };

//   //   const handleClickOutside = (e) => {
//   //     const { current: wrap } = titleRef;
//   //     if (wrap && !wrap.contains(e.target)) {
//   //       setShowInput(false);
//   //     }
//   //   };

//   //   useEffect(() => {
//   //     document.addEventListener("mousedown", handleClickOutside);
//   //     return () => {
//   //       document.removeEventListener("mousedown", handleClickOutside);
//   //     };
//   //   }, []);

//   return (
//     <main
//       className="bg-white border rounded-md overflow-hidden max-w-250 sm:max-w-xs md:max-w-md lg:max-w-lg mx-auto mt-10 mb-5 shadow-md transition cursor-text"
//     >
//       {showInput && (
//         <div
//           onClick={() => setShowInput(false)}
//           onFocus={() => setShowInput(false)}
//         />
//       )}

//       <div className="flex flex-col ">
//         {showInput && (
//           <input
//             type="text"
//             placeholder="Title"
//             value={inputTitle}
//             onChange={(e) => setInputTitle(e.target.value)}
//             onFocus={() => setShowInput(true)}
//             className="pl-3 pt-1 outline-none"
//           />
//         )}

//         <textarea
//           className="pl-3 pt-2 outline-none"
//           type="text"
//           rows="2"
//           cols="20"
//           placeholder="Take a note..."
//           value={inputBody}
//           onChange={(e) => setInputBody(e.target.value)}
//           onFocus={() => setShowInput(true)}
//         />
//       </div>
//       <div className={` flex justify-end p-0 m-0`}>
//         <button
//           tabIndex="0"
//           disabled={!inputBody && !inputTitle}
//           onClick={handleSubmit}
//           onFocus={() => setShowInput(true)}
//           className="text-gray-700 rounded-md px-2 py-1 mr-1 mb-1 md:px-4 md:py-1 md:mr-1.5 md:mb-1.5 transition select-none hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
//         >
//           Done
//         </button>
//       </div>
//     </main>
//   );
// };

// export default InputArea;

// { inputBody, inputTitle, setInputBody, setInputTitle }

// ${!showInput ? "invisible" : ""}
