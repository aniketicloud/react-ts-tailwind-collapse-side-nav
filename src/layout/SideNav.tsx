import { FC } from "react";
import { NavLink } from "react-router-dom";

import { ComputerDesktop } from "../components/icons/ComputerDesktop";
import { AcademicCap } from "../components/icons/AcademicCap";
import "./Sidenav.css";
import { Beaker } from "../components/icons/Beaker";

interface SideNavProps {
  isExpanded: boolean;
}

export const SideNav: FC<SideNavProps> = ({ isExpanded }) => {
  return (
    <nav className="bg-blue-400 px-3 py-4">
      <ul className={`mt-4  font-medium `}>
        <li>
          <NavLink
            to="/"
            className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
          >
            <ComputerDesktop />
            {isExpanded && <span>Dashboard</span>}
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/courses"
            className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
          >
            <AcademicCap />
            {isExpanded && <span>Courses</span>}
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/tests"
            className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
          >
            <Beaker />
            {isExpanded && <span>Tests</span>}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
