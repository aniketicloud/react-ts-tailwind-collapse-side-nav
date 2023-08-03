import { useState } from "react";
import { LogoDetails } from "./LogoDetails";
import { NavList } from "./NavList";

export const SideBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div
        className={`sidebar ${isExpanded && "open"}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <LogoDetails isExpanded={isExpanded} />
      </div>
      <NavList />
    </>
  );
};
