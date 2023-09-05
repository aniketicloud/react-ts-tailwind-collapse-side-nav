import { NavLink } from "react-router-dom";
export const SideNav = () => {
  return (
    <nav>
      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};
