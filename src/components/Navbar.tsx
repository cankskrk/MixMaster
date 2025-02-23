import { NavLink } from "react-router-dom";
import { NavLinkRoutes } from "../Data/data";

const Navbar = () => {
  return (
    <nav className="bg-white text-black p-4">
      <div className="flex justify-between items-center">
        <span className="text-xl font-semibold">MixMaster</span>
        <div className="hidden lg:flex space-x-4">
          {NavLinkRoutes.map((route) => (
            <NavLink
              key={route.name}
              to={route.path}
              className="hover:text-gray-400"
            >
              {route.name}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="lg:hidden mt-4 space-y-2">
        {NavLinkRoutes.map((route) => (
          <NavLink
            key={route.name}
            to={route.path}
            className="block text-black hover:bg-gray-100 p-2 rounded"
          >
            {route.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
