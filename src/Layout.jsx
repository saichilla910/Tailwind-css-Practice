const Layout = () => {
  return (
    <>
      <div className="container w-2xl border-2  bg-amber-300 mx-auto p-4">
        Hello
        <div className="whitespace-pre">
          <h1>hello </h1>
          <p>nothing to say</p>
        </div>
      </div>
      <div className="block ">
        it create a block level element( it takes full width of their parent
        element.)
        <div className="bg-pink-400 mb-4">1</div>
        <div className="bg-pink-400 mb-4">2</div>
        <div className="bg-pink-400 mb-4">3</div>
      </div>

      <div className=" space-x-4">
        it create a inline element( it takes how much length it's needed.)
        <div className="inline text-6xl bg-pink-400 ">1</div>
        <div className="inline text-6xl bg-pink-400 ">2</div>
        <div className="inline text-6xl bg-pink-400 ">3</div>
      </div>

      <p className="whitespace-line-pre">for space</p>
      <p className="whitespace-line-pre"> for space </p>

      <div className=" space-x-4">
        contents( it attaches the non children elemnts to their higher parent)
        <div className="inline text-6xl bg-pink-400 ">1</div>
        <div className="contents space-x-4">
          <div className="inline text-6xl bg-pink-400 ">2</div>
          <div className="inline text-6xl bg-pink-400 ">3</div>
        </div>
      </div>


      <p> nothing</p>
    </>
  );
};

export default Layout;
