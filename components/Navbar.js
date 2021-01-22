import KeepIcon from "./IconComponents/KeepIcon";

const Navbar = () => {
  return (
    <div className="w-screen flex flex-row items-center p-2 justify-between bg-white shadow">
        <KeepIcon />
      <span className="w-screen md:w-1/3 h-10 bg-gray-200 cursor-pointer border border-gray-300 text-sm rounded-full flex">
        <input
          type="search"
          name="serch"
          placeholder="Search"
          className="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none"
        />
        <i className="fas fa-search m-3 mr-5 text-lg text-gray-700 w-4 h-4"></i>
      </span>
      <div className="flex flex-row-reverse mr-4 ml-4 md:hidden">
        <i className="fas fa-bars"></i>
      </div>
      <div>dark Mode</div>
    </div>
  );
};

export default Navbar;
