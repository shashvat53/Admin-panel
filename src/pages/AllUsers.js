import React from "react";
import PagePath from "../components/PagePath";
import FilterForm from "../components/FilterForm";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Button from "@mui/material/Button";
import CustomeTAbleButton from "../components/CustomeTAbleButton";

const AllUsers = () => {
  const TableHead = [
    "ID",
    "ACTION",
    "NAME",
    "USERNAME",
    "EMAIL",
    "MOBILE",
    "MY PACKAGE",
    "MY BANK",
    "JOIN DATE",
    "ACTIVE STATUS	",
    "BLOCK STATUS	",
    "SPONSOR",
    "UPLINE",
  ];

  const tableData = [
    // Sample data, replace with your actual data
    [
      1,
      <CustomeTAbleButton />,
      "User1",
      "Demo",
      "companyname@gmail.com	",
      9813538826,
      "Diamond",
      "",
      "2018-12-26 14:49:08	",
      "Active 2020-10-30 11:26:14 ",
      "Unblock",
      "",
      "",
    ],
    [
      2,
      <CustomeTAbleButton />,
      "test",
      "admin@12345	",
      "test@gmail.com	",
      2222222222,
      "",
      "",
      "2023-02-23 11:28:03	",
      "Inactive",
      "Unblock",
      "demo (user1)	",
      "demo (user1)",
    ],
  ];
  return (
    <div>
      <PagePath
        pathOne={"/"}
        pathTwo={"#"}
        pathOneName={"home"}
        pathTwoName={"users"}
        pathThreeName={"All Users"}
      />

      <FilterForm />

      <section className="max-w-[370px] sm:max-w-full">
        <div className="bg-white shadow-md rounded-md sm:p-4 ">
          <h2 className="text-lg font-semibold mb-4 text-right">
            | All Users:(6)
          </h2>
          <div className="overflow-x-scroll  ">
            <table className="   w-screen table-auto border">
              <thead>
                <tr className="bg-gray-200 w-full">
                  {TableHead.map((heading, index) => (
                    <th key={index} className="border p-2 text-left w-auto">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, rowIndex) => (
                  <tr key={rowIndex} className="  ">
                    {row.map((data, colIndex) => (
                      <td key={colIndex} className="border p-2">
                        {data}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllUsers;
