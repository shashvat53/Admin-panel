import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const FiveColTable = ({ tableData, tableTitle }) => {
  return (
    <>
      <div className="  bg-white  p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold mb-2">{tableTitle}</h2>
          <Link to={"/all-user"}>
            <Button variant="contained" startIcon={<AddIcon />}>
              Add
            </Button>
          </Link>
        </div>
        <div className="overflow-x-scroll">
          <table className=" table-auto w-full">
            <thead>
              <tr>
                <th className="border-b px-4 py-2 text-left">SR NO.</th>
                <th className="border-b px-4 py-2 text-left">Name</th>
                <th className="border-b px-4 py-2 text-left">USERNAME</th>
                <th className="border-b px-4 py-2 text-left">EMAIL</th>
                <th className="border-b px-4 py-2 text-left">JOIN DATE</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td className="border-b px-4 py-2 ">{row.column1}</td>
                  <td className="border-b px-4 py-2">{row.column2}</td>
                  <td className="border-b px-4 py-2">{row.column3}</td>
                  <td className="border-b px-4 py-2">{row.column4}</td>
                  <td className="border-b px-4 py-2">{row.column5}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default FiveColTable;
