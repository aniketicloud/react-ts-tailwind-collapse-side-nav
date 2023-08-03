import { HomeIcon } from "./icons/HomeIcon";
import { BarsIcon } from "./icons/BarsIcon";
import { CollapseBarIcon } from "./icons/CollapseBarIcon";

interface LogoDetailsProps {
  isExpanded: boolean;
}
export const LogoDetails: React.FC<LogoDetailsProps> = ({ isExpanded }) => {
  return (
    <>
      <div className="logo_details">
        <HomeIcon />
        <div className="logo_name">Company Name</div>
        {isExpanded ? <BarsIcon /> : <CollapseBarIcon />}
      </div>
    </>
  );
};
