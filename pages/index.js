import Main from "../components/Main";
import Navbar from "../components/Navbar";

export default function IndexPage() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="pt-16"></div>
      <Main />
    </React.Fragment>
  );
}

//import ListContextProvider from "../assets/contexts/ListContext";
// import Main from "../components/Main";
// import Navbar from "../components/Navbar";

// export default function IndexPage() {
//   return (
//     <React.Fragment>
//       <ListContextProvider>
//         <Navbar />
//         <div className="pt-16"></div>
//         <Main />
//       </ListContextProvider>
//     </React.Fragment>
//   );
// }
