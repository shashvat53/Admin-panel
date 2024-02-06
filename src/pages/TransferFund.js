import React, { useState } from "react";
import PagePath from "../components/PagePath";
import { Button, MenuItem, Select, TextField, Toolbar } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

const TransferFund = () => {
  const [value, setValue] = useState("");
  const handleChange1 = (event) => {
    setValue(event.target.value);
  };
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    setValue(data);
    console.log(data);
    // Handle form submission logic here
  };
  const tableData = [
    // Sample data, replace with your actual data
    {
      column1: "1",
      column2: "Test",
      column3: "admin@12345",
      column4: "test@gmail.com",
      column5: "2023-02-23 11:28:03",
    },
    {
      column1: "2",
      column2: "user1",
      column3: "demo",
      column4: "companyname@gmail.com	",
      column5: "2018-12-26 14:49:08",
    },
  ];
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-[10px]">Fund Transfer</h2>
      <PagePath
        pathOne={"/"}
        pathTwo={"#"}
        pathOneName={"Home"}
        pathTwoName={" Fund Transfer"}
        pathThreeName={"  Fund Transfer"}
      />

      <h2 className="text-sm font-semibold mt-[25px]">FUND TRANSFER</h2>
      <div class="border-t border-gray-400 my-4 "></div>

      <div className="bg-white shadow-md rounded-md p-6 my-8">
        {/*  Input Fields */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex mb-4 flex-wrap gap-4"
        >
          <Controller
            name="Enter Username"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Enter Username"
                className="w-full sm:w-auto"
              />
            )}
          />
          <Controller
            name="Enter Full Name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Enter Full Name"
                className="w-full sm:w-auto"
              />
            )}
          />

          <Button type="submit" variant="outlined">
            Fillter
          </Button>
          <input
            type="submit"
            name="export_to_excel"
            className="border p-[4px_8px]"
            value="Export to excel"
          ></input>
        </form>
      </div>

      <div className="max-w-[375px] sm:max-w-full container mx-auto mt-8">
        <div className="bg-white shadow-md rounded-md p-4 overflow-x-auto">
          <h3 className="text-right my-[10px]">Total Order Amount(0)</h3>
          <div className="overflow-x-scroll">
            <table className="w-full table-auto border">
              <thead>
                <tr>
                  <th className="border-b border-gray-300  p-2 text-left">
                    S NO.
                  </th>

                  <th className="border-b border-gray-300 p-2 text-left">
                    USERID
                  </th>
                  <th className="border-b border-gray-300 p-2 text-left">
                    FULL NAME
                  </th>
                  <th className="border-b border-gray-300 p-2 text-left">
                    AMOUNT
                  </th>
                  <th className="border-b border-gray-300 p-2 text-left">
                    WALLET TYPE
                  </th>
                  <th className="border-b border-gray-300 p-2 text-left">
                    DATE
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

export default TransferFund;
