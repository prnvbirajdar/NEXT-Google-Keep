import Footer from "../components/Footer";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

export default function IndexPage() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="pt-16"></div>
      <Main />
      <Footer />
    </React.Fragment>
  );
}

