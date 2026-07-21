import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-[100vh]">
        <Outlet />
      </div>
    </>
  );
}

export default App;
