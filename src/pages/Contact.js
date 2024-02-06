import React from "react";
import PagePath from "../components/PagePath";

const Contact = () => {
  const tableData = [
    // Sample data, replace with your actual data
    {
      column1: "1",
      column2: "Test",
      column3: "admin@12345",
      column4: "test@gmail.com",
      column5: "2023-02-23 11:28:03",
      column6: "2023-02-23 11:28:03",
    },
    {
      column1: "2",
      column2: "user1",
      column3: "demo",
      column4: "companyname@gmail.com	",
      column5: "2018-12-26 14:49:08",
      column6: "2023-02-23 11:28:03",
    },
  ];
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-[10px]">Contact</h2>
      <PagePath
        pathOne={"/"}
        pathTwo={"#"}
        pathOneName={"Home"}
        pathTwoName={" Contact"}
        pathThreeName={"  Details"}
      />

      <h2 className="text-sm font-semibold mt-[25px]">CONTACT DETAIL</h2>
      <div class="border-t border-gray-400 my-4 "></div>

      <div className="max-w-[375px] sm:max-w-full container mx-auto mt-8">
        <div className="bg-white shadow-md rounded-md p-4 overflow-x-auto">
          <div className="overflow-x-scroll">
            <table className="w-full table-auto border">
              <thead>
                <tr>
                  <th className="border-b border-gray-300  p-2 text-left">
                    S NO.
                  </th>

                  <th className="border-b border-gray-300 p-2 text-left">
                    NAME
                  </th>
                  <th className="border-b border-gray-300 p-2 text-left">
                    EMAIL
                  </th>
                  <th className="border-b border-gray-300 p-2 text-left">
                    MOBILE
                  </th>
                  <th className="border-b border-gray-300 p-2 text-left">
                    SUBJECT
                  </th>
                  <th className="border-b border-gray-300 p-2 text-left">
                    MESSAGE
                  </th>
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
                    <td className="border-b px-4 py-2">{row.column6}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
