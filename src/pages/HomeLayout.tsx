import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import LoadingCircle from "../components/LoadingCircle";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div>
      <Navbar />
      <section className="bg-gray-100 min-h-screen flex flex-col items-center p-10">
        {isLoading && <LoadingCircle />}
        <Outlet />
      </section>
    </div>
  );
};

export default HomeLayout;
