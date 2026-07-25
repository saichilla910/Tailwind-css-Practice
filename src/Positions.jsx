const Positions = () => {
  return (
    <div>
      <div className="fixed top-2 left-0 w-40 h-10  bg-color-blact text-white-100 border-black-9 ">
        Fixed
      </div>
      <div className="w-30 h-40 bg-green-500 border-2 relative  left-10">
        Relative
      </div>
      <div className="w-30 h-40 bg-gray-500 border-2 absolute ">abosolute</div>
      <div className="w-30 h-40 bg-green-500 border-2 sticky top-0 left-20">
        Sticky
      </div>
    </div>
  );
};

export default Positions;
