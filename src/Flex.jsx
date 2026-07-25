const Flex = () => {
  return (
    <>
      //put select box at the middle of the container
      <div className="flex justify-center items-center w-40 h-40 border-4">
        <button className="bg-green-500 rounded-3xl px-4 py-2">Submit</button>
      </div>
      //put the select button at teh end of the conatiner
      <div className="flex justify-start items-end w-40 h-40 border-4">
        <button className="bg-green-500 rounded-3xl px-4 py-2 mb-2 ">
          Submit
        </button>
      </div>
      //navigation Bar
      <header className="w-screen h-20 bg-amber-600">
        <nav className="flex justify-between items-center h-full px-6">
          <div className="text-xl font-bold">Logo</div>
          <div>
            {" "}
            <input
              className="border-2"
              type="text"
              placeholder="eneter any text here"
            ></input>
          </div>
          <div className="flex gap-6">
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
            <p>Login</p>
          </div>
        </nav>
        //vertical menu
        <nav className="flex justify-end bg-amber-500">
          <div className=" flex flex-col space-y-1.5 pr-5 ">
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
            <p>Login</p>
          </div>
        </nav>
        //creating cards
      
    <div className="w-72 rounded-lg border shadow-md overflow-hidden">

      <img
        src="https://picsum.photos/300/200"
        alt="Product"
        className="w-full h-48 object-cover"
      />

      <div className="p-4">

        <h2 className="text-xl font-semibold">
          Shoes
        </h2>

        <p className="line-through text-gray-500">
          ₹3900
        </p>

        <p className="text-green-600 font-medium">
          Discount 20%
        </p>

        <p className="text-2xl font-bold">
          ₹2400
        </p>

        <button className="mt-4 w-full rounded bg-green-500 py-2 text-white">
          Add to Cart
        </button>

      </div>

    </div>
  


      </header>
    </>
  );
};

export default Flex;
