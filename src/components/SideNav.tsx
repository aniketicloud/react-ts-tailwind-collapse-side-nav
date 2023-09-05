import { Link } from "react-router-dom";
export const SideNav = () => {
  return (
    <nav>
      <Link to="/">Dashboard</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};
