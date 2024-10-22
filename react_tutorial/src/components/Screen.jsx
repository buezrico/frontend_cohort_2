/* eslint-disable react/prop-types */

const Screen = ({ value, result }) => {
  return (
    <div className={`flex-1 flex flex-col justify-end items-end gap-2 py-6`}>
      <div
        className={`text-4xl font-semibold ${
          result !== "" ? "text-xl text-slate-500" : ""
        }`}
      >
        {value}
      </div>

      {/* Result */}
      <div className="">
        <p className="text-4xl font-semibold">{result}</p>
      </div>
    </div>
  );
};

export default Screen;
