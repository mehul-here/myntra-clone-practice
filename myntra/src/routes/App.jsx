import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/header";
import FetchItems from "../components/FetchItems";

function App() {
  return (
    <>
      <Header />
      <FetchItems/>
      <Outlet/>
      <Footer />
    </>
  );
}

export default App;
