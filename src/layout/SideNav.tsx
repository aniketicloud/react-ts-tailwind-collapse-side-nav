import { FC } from "react";
import { NavLink } from "react-router-dom";
import { ComputerDesktop } from "../components/icons/ComputerDesktop";
import { AcademicCap } from "../components/icons/AcademicCap";

interface SideNavProps {
  isExpanded: boolean;
}

export const SideNav: FC<SideNavProps> = ({ isExpanded }) => {
  return (
    <nav>
      <NavLink to="/">
        <div className="flex gap-x-1">
          <ComputerDesktop />
          {isExpanded && "Dashboard"}
        </div>
      </NavLink>

      <NavLink to="/courses">
        <div className="flex gap-x-1">
          <AcademicCap />
          {isExpanded && "Courses"}
        </div>
      </NavLink>
    </nav>
  );
};
