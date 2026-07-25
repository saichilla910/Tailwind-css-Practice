const Table = () => {
  return (
    <div>
      <table className="w-full border-2 border-collapse border-black">
        <thead>
          <th colSpan={5} className="caption-top  text-3xl text-center ">Educational Details</th>
          <tr>
            <th className="border border-black p-2 ">Qualification</th>
            <th className="border border-black p-2">Board / University</th>
            <th className="border border-black p-2">Institution</th>
            <th className="border border-black p-2">Year of Passing</th>
            <th className="border border-black p-2">Percentage / CGPA</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="text-center border border-black p-2" >B.Tech</td>
            <td className=" align-bottom border border-black p-2" >JNTUA Anantapur</td>
            <td className=" align-middle border border-black p-2">RGMCET</td>
            <td className="border border-black p-2">2028</td>
            <td className="border border-black p-2">8.62/10</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;