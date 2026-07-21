import { Outlet } from "react-router-dom";
import HeroCarousel from "./components/Carosual";
import Header from "./components/Header";
import NoticeBoard from "./components/NoticeBoard";
import Principal from "./components/Principal";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* <Header />
      <HeroCarousel /> */}
      <div className="flex flex-col ">
        <Outlet />
      </div>
      <section
        className="
max-w-7xl
mx-auto
px-5
py-16
grid
lg:grid-cols-2
gap-8
"
      >
        <NoticeBoard />
        <Principal />
      </section>
      <Footer />
    </>
  );
}

export default App;
