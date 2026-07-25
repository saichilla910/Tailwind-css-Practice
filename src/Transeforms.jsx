

const Transeforms = () => {
  return (
    <div>
        <button className="transition duration-1000 ease-in-out delay-100 hover:translate-x-100 bg-green-300 rounded-4xl cursor-auto">move</button><br></br>
         <button className="transition duration-1000 ease-in-out delay-100 hover:scale-150 bg-green-300 rounded-3xl cursor-pointer">scale</button>
          <button className="transition duration-1000 ease-in-out delay-100 hover:rotate-360 bg-green-300 rounded-3xl cursor-not-allowed">rotate</button>
           <button className="transition duration-1000 ease-in-out delay-100 hover:skew-90 bg-green-300 rounded-3xl cursor-wait pointer-events-none">skew(not working because we are using pointer-events-none)</button>
    </div>
  )
}

export default Transeforms