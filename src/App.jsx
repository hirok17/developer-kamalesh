import { Outlet } from "react-router";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#161616] overflow-hidden">
      <Header></Header>
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}

export default App;
