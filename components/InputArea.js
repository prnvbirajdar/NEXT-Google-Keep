import { useState, useContext, useRef, useEffect } from "react";
import db from "../assets/firebase/firebase";
import firebase from "firebase";
//import { ListContext } from "../assets/contexts/ListContext";

const InputArea = ({ mainTodoList, setMainTodoList }) => {
  //const { list, addList } = useContext(ListContext);

  const [inputTitle, setInputTitle] = useState("");
  const [inputBody, setInputBody] = useState("");
  const [showInput, setShowInput] = useState(false);

  const titleRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("keepList").add({
      title: inputTitle,
      body: inputBody,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    // addList(inputTitle, inputBody);
    setInputBody("");
    setInputTitle("");
    setShowInput(false);
  };

  console.log(db.collection("keepList"));

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
    <main className="transition duration-300 relative border dark:border-gray-500 dark:hover:border-gray-300  bg-white dark:bg-background border rounded-md overflow-hidden w-3/4 sm:max-w-md md:max-w-md lg:max-w-lg mx-auto mt-10 mb-5 shadow-md transition cursor-text">
      <form onSubmit={handleSubmit} className="px-2 pt-2 pb-1">
        <div className="flex flex-col ">
          {showInput && (
            <input
              ref={titleRef}
              type="text"
              placeholder="Title"
              value={inputTitle}
              onChange={(e) => setInputTitle(e.target.value)}
              onFocus={() => setShowInput(true)}
              className=" transition duration-300 font-medium px-1 pt-1 py-1 outline-none font-roboto text-base sm:text-sm md:text-sm lg:text-sm dark:bg-background dark:text-offwhite"
            />
          )}

          <textarea
            className="transition duration-300 font-medium px-1 mt-1 my-2 outline-none font-roboto text-base sm:text-sm md:text-sm lg:text-sm dark:bg-background dark:text-offwhite"
            type="text"
            rows="3"
            cols="20"
            placeholder="Take a note..."
            value={inputBody}
            onChange={(e) => setInputBody(e.target.value)}
            onFocus={() => setShowInput(true)}
            style={{ resize: "none" }}
          />
        </div>

        {inputTitle || inputBody ? (
          <div className="flex justify-end m-0">
            <button
              onFocus={() => setShowInput(true)}
              type="submit"
              tabIndex="0"
              disabled={!inputBody && !inputTitle}
              className="transition duration-300 font-bold text-xs font-roboto text-gray-700 bg-gray-100 rounded-md px-5 py-2 mr-1 mb-1 md:mr-1.5 md:mb-1.5 transition select-none hover:bg-gray-200 focus:bg-gray-200 focus:outline-none dark:text-offwhite dark:bg-gray-700 dark:hover:bg-gray-600"
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

export default InputArea;

// import { useState, useContext, useRef, useEffect } from "react";
// import { ListContext } from "../assets/contexts/ListContext";

// const InputArea = () => {
//   const { list, addList } = useContext(ListContext);

//   const [inputTitle, setInputTitle] = useState("");
//   const [inputBody, setInputBody] = useState("");
//   const [showInput, setShowInput] = useState(false);

//   const titleRef = useRef(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addList(inputTitle, inputBody);
//     setInputBody("");
//     setInputTitle("");
//     setShowInput(false);
//   };

//   const handleClickOutside = (e) => {
//     const { current: wrap } = titleRef;
//     if (wrap && !wrap.contains(e.target)) {
//       setShowInput(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <main className="transition duration-300 relative border dark:border-gray-500 dark:hover:border-gray-300  bg-white dark:bg-background border rounded-md overflow-hidden w-3/4 sm:max-w-md md:max-w-md lg:max-w-lg mx-auto mt-10 mb-5 shadow-md transition cursor-text">
//       <form onSubmit={handleSubmit} className="px-2 pt-2 pb-1">
//         <div className="flex flex-col ">
//           {showInput && (
//             <input
//               ref={titleRef}
//               type="text"
//               placeholder="Title"
//               value={inputTitle}
//               onChange={(e) => setInputTitle(e.target.value)}
//               onFocus={() => setShowInput(true)}
//               className=" transition duration-300 font-medium px-1 pt-1 py-1 outline-none font-roboto text-base sm:text-sm md:text-sm lg:text-sm dark:bg-background dark:text-offwhite"
//             />
//           )}

//           <textarea
//             className="transition duration-300 font-medium px-1 mt-1 my-2 outline-none font-roboto text-base sm:text-sm md:text-sm lg:text-sm dark:bg-background dark:text-offwhite"
//             type="text"
//             rows="3"
//             cols="20"
//             placeholder="Take a note..."
//             value={inputBody}
//             onChange={(e) => setInputBody(e.target.value)}
//             onFocus={() => setShowInput(true)}
//             style={{ resize: "none" }}
//           />
//         </div>

//         {inputTitle || inputBody ? (
//           <div className="flex justify-end m-0">
//             <button
//               onFocus={() => setShowInput(true)}
//               type="submit"
//               tabIndex="0"
//               disabled={!inputBody && !inputTitle}
//               className="transition duration-300 font-bold text-xs font-roboto text-gray-700 bg-gray-100 rounded-md px-5 py-2 mr-1 mb-1 md:mr-1.5 md:mb-1.5 transition select-none hover:bg-gray-200 focus:bg-gray-200 focus:outline-none dark:text-offwhite dark:bg-gray-700 dark:hover:bg-gray-600"
//             >
//               Done
//             </button>
//           </div>
//         ) : (
//           <div></div>
//         )}
//       </form>
//     </main>
//   );
// };

// export default InputArea;
