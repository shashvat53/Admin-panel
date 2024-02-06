import React from "react";
import { Link } from "react-router-dom";

const TwoColTable = ({ tableData, tableTitle, path, menu }) => {
  return (
    <div className=" w-full  sm:w-[45%] p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold mb-2">{tableTitle}</h2>
        <span>{menu}</span>
      </div>
      <table className="table-auto w-full">
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td className="border-b px-4 py-2 text-[#0056BA]">
                <Link to={`${path}`}>{row.column1}</Link>
              </td>
              <td className="border-b px-4 py-2">₹&nbsp; {row.column2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TwoColTable;
