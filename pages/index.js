import ListContextProvider from "../assets/contexts/ListContext";
import InputArea from "../components/InputArea";
import ListComponent from "../components/ListComponent";
import Navbar from "../components/Navbar";


export default function IndexPage() {
  return (
    <React.Fragment>
      <ListContextProvider>
        <Navbar />
        <div className="pt-16"></div>
        <InputArea />
        <ListComponent />
      </ListContextProvider>
    </React.Fragment>
  );
}
