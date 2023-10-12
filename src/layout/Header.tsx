import { FC } from "react";
import { BarsFour } from "../components/icons/BarsFour";
import { BarsTwo } from "../components/icons/BarsTwo";
import profile_pic from "../assets/profile_pic.jpg";
import { useWindowDimensions } from "../hooks/useWindowDimension";
import { HamburgerMenu } from "../components/HamburgerMenu";

interface HeaderProps {
  isExpanded: boolean;
  onLogoClick: () => void;
}

export const Header: FC<HeaderProps> = ({ isExpanded, onLogoClick }) => {
  const { width } = useWindowDimensions();

  const handleLogoClick = () => {
    onLogoClick();
  };

  return (
    <header className="flex items-center justify-between bg-blue-400 px-4 py-3 text-white capitalize">
      {width < 640 ? (
        <HamburgerMenu />
      ) : (
        <button onClick={handleLogoClick}>
          <div className="flex">
            {isExpanded ? <BarsTwo /> : <BarsFour />}
            {isExpanded && "YOTA"}
          </div>
        </button>
      )}

      <span>second item</span>
      <span>Third item</span>
      <div className="relative">
        <img
          src={profile_pic}
          alt="profile picture"
          className="w-10 h10 p-1 rounded-full ring-2 ring-gray-300"
        />
        <span className="absolute w-3.5 h-3.5 bottom-0  left-7 transform translate-y-1/4 bg-green-400 rounded-full"></span>
      </div>
    </header>
  );
};
