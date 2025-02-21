import { NavLink } from "react-router-dom";
import { NavLinkRoutes } from "../Data/data";

const Navbar = () => {
  return (
    <nav>
      <div>
        <span>MixMaster</span>
      </div>
      <div>
        {NavLinkRoutes.map((route) => (
          <NavLink key={route.name} to={route.path}>
            {route.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
