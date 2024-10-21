/* eslint-disable react/prop-types */

const Screen = ({ value, setVlaue }) => {
  return (
    <div className={`flex-1 flex flex-col justify-end items-end gap-2 py-6`}>
      <div className={`text-4xl font-semibold`}>{value}</div>

      {/* Result */}
      {/* <div className="">
        <p className="text-4xl font-semibold">1736326</p>
      </div> */}
    </div>
  );
};

export default Screen;
