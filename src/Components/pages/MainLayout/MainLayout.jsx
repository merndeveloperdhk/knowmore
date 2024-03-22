import { Outlet } from "react-router-dom";
import Header from "../../Header/Header";

const MainLayout = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className=" ">
        <Header></Header>
        <div className="min-h-screen ">
          <Outlet></Outlet>
        </div>
        {/* <h1>new Date().getFullYear()</h1> */}
      </div>
    </div>
  );
};

export default MainLayout;
