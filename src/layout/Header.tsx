import { FC } from "react";
import { BarsFour } from "../components/icons/BarsFour";
import { BarsTwo } from "../components/icons/BarsTwo";

interface HeaderProps {
  isExpanded: boolean;
  onLogoClick: () => void;
}

export const Header: FC<HeaderProps> = ({ isExpanded, onLogoClick }) => {
  const handleLogoClick = () => {
    onLogoClick();
  };

  return (
    <header>
      <button onClick={handleLogoClick}>
        <div className="flex">
          {isExpanded ? <BarsTwo /> : <BarsFour />}
          {isExpanded && "YOTA"}
        </div>
      </button>
    </header>
  );
};
