import { FaBatteryFull, FaWifi } from "react-icons/fa";
import { TbAntennaBars5 } from "react-icons/tb";

const TopBar = () => {
  const time = new Date().toLocaleTimeString();

  return (
    <div className="h-6 w-full flex justify-between items-center">
      <p className="text-xs font-medium">{time}</p>
      <div className="flex items-center gap-1">
        <TbAntennaBars5 />
        <FaWifi />
        <FaBatteryFull />
      </div>
    </div>
  );
};

export default TopBar;
