import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <section className="bg-gray-100 min-h-screen p-10">
        <Outlet />
      </section>
    </div>
  );
};

export default HomeLayout;
