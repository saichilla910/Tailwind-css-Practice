const TransformationsAndAnimations = () => {
  return (
    <div>
      <button className="transition duration-1000 ease-out  hover:scale-125 bg-green-400 rounded-xl px-4 py-2">
        Hover
      </button>
      {/* animations */}
      <button className="  hover:animate-spin bg-green-400 rounded-xl px-4 py-2">
        spin
      </button>
      <button className=" hover:animate-ping bg-green-400 rounded-full px-4 py-2">
        ping (scale In and out can be done)
      </button>
      <button className=" animate-bounce bg-green-400 rounded-full px-4 py-2">
        Bounce
      </button>
      <button className=" animate-pulse bg-green-400 rounded-full px-4 py-2">
       pulse
      </button>

      
    </div>
  );
};

export default TransformationsAndAnimations;
