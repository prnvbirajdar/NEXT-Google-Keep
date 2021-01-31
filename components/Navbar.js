import { useContext } from "react";
import ThemeContext from "./Theme/ThemeContext";
import KeepIcon from "./IconComponents/KeepIcon";
import Moon from "./IconComponents/Moon";
import Sun from "./IconComponents/Sun";

const Navbar = () => {
  //dark theme context
  const { dark, toggleDark, setDark } = useContext(ThemeContext);

  //toggle theme
  const handleClick = () => {
    setDark(dark === true ? false : true);
    toggleDark();
  };

  return (
    <div className=" transition duration-300 w-screen flex flex-row items-center py-1.5 px-2 sm:pl-5 sm:pr-7 justify-between bg-white shadow dark:bg-background border-b dark:border-gray-600 z-20 fixed top-0">
      <div className="flex">
        <KeepIcon />
        <p className="select-none cursor-pointer transition duration-300 text-xl self-center font-medium text-gray-700 ml-1 dark:text-offwhite">
          Keep
        </p>
      </div>

      {dark ? (
        <div
          onClick={handleClick}
          className="cursor-pointer p-2 rounded bg-gray-700 hover:bg-gray-600 transition "
        >
          <Sun />
        </div>
      ) : (
        <div
          onClick={handleClick}
          className="cursor-pointer p-2 bg-gray-100 hover:bg-gray-200 rounded transition"
        >
          <Moon />
        </div>
      )}
    </div>
  );
};

export default Navbar;
