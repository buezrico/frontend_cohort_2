import Buttons from "./Buttons";
import Indicator from "./Indicator";
import Screen from "./Screen";
import TopBar from "./TopBar";
import { useState } from "react";

const Calculator = () => {
  const [value, setValue] = useState("");

  return (
    <div className="h-[80%] max-w-72 w-72 bg-black rounded-3xl text-white overflow-hidden px-6 py-2 flex flex-col justify-between">
      <TopBar />
      <Screen value={value} setValue={setValue} />
      <div className="">
        <Buttons value={value} setValue={setValue} />
        <Indicator />
      </div>
    </div>
  );
};

export default Calculator;
