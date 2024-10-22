/* eslint-disable react/prop-types */
import { LuDelete } from "react-icons/lu";
import "../App.css";

const Buttons = ({ value, result, setValue, setResult }) => {
  const calculate = () => {
    try {
      const result = eval(value);
      setResult(result);
    } catch (error) {
      console.log(error);
      setValue("Syntax error");
    }
  };

  const clear = () => {
    setValue((prevValue) => {
      if (prevValue.length === 1 || result !== "") {
        return "0";
      }

      return prevValue.slice(0, -1);
    });
    setResult("");
  };

  return (
    <div className="grid grid-cols-4 place-items-center gap-2">
      {buttons.map((button, index) => (
        <button
          key={index}
          className={`text-lg size-14 flex items-center justify-center rounded-full bg-gray-800 font-semibold hover:opacity-70
            ${
              button.name === "clear" && "bg-red-600 bg-opacity-20 text-red-600"
            } 
          ${button.name === "operator" && "bg-yellow-600 text-2xl"}
           ${button.value === 0 && "col-span-2 w-full"}
           ${button.value === "=" && "bg-green-600"}
          `}
          onClick={() => {
            button.name === "clear"
              ? clear()
              : button.value === "="
              ? calculate()
              : setValue((prevValue) =>
                  prevValue === "0"
                    ? button.value.toString()
                    : prevValue.toString() + button.value.toString()
                );
          }}
        >
          {result === "" &&
          button.name === "clear" &&
          value !== "0" &&
          value.length > 0 ? (
            <LuDelete size={24} />
          ) : (
            button.value
          )}
        </button>
      ))}
    </div>
  );
};

export default Buttons;

const buttons = [
  { name: "clear", value: "C" },
  { name: "number", value: "(" },
  { name: "number", value: ")" },
  { name: "operator", value: "/" },
  { name: "number", value: 7 },
  { name: "number", value: 8 },
  { name: "number", value: 9 },
  { name: "operator", value: "*" },
  { name: "number", value: 4 },
  { name: "number", value: 5 },
  { name: "number", value: 6 },
  { name: "operator", value: "-" },
  { name: "number", value: 1 },
  { name: "number", value: 2 },
  { name: "number", value: 3 },
  { name: "operator", value: "+" },
  { name: "number", value: 0 },
  { name: "number", value: "." },
  { name: "operator", value: "=" },
];
