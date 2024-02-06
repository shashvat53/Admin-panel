import React, { useState } from "react";
import PagePath from "../components/PagePath";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
// import Button from "@mui/material/Button";

const WithPending = () => {
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
    "Data 1",
    "Data 2",
    "Data 3",
    "Data 4",
    "Data 5",
    "Data 6",
    "Data 7",
    "Data 8",
    "Data 9",
  ];
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-[10px]">Pending Withdrwals</h2>
      <PagePath
        pathOne={"/"}
        pathTwo={"#"}
        pathOneName={"Home"}
        pathTwoName={" Withdrwals"}
        pathThreeName={" Pending"}
      />

      <h2 className="text-sm font-semibold mt-[25px]">PENDING WITHDRWALS</h2>
      <div class="border-t border-gray-400 my-4 "></div>

      <div className="bg-white shadow-md rounded-md p-6 my-8">
        {/*  Input Fields */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex mb-4 flex-wrap gap-4"
        >
          <Controller
            name="Enter Name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Enter Name"
                className="w-full sm:w-auto"
              />
            )}
          />

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

          {/*  Dropdwon Fields */}
          <Controller
            name="number"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className="w-full sm:w-[160px]">
                <FormControl fullWidth>
                  <InputLabel id="number">Number</InputLabel>
                  <Select {...field} labelId="number" label="number">
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
                    <MenuItem value={100}>100</MenuItem>
                    <MenuItem value={200}>200</MenuItem>
                  </Select>
                </FormControl>
              </div>
            )}
          />

          <Button type="submit" variant="outlined">
            Fillter
          </Button>

          <Button variant="contained">Reset</Button>
          <input
            type="submit"
            name="export_to_excel"
            className="border p-[4px_8px]"
            value="Export to excel"
          ></input>
        </form>
      </div>

      <div>
        <Button variant="contained">APPROVE ALL</Button>
        <Button sx={{ m: 1 }} variant="contained" color="secondary">
          REJECT ALL
        </Button>
      </div>

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
                    TX USER
                  </th>
                  <th className="border-b border-gray-300 p-2 text-left">
                    ACTION
                  </th>
                  <th className="border-b border-gray-300 p-2 text-left">
                    AMOUNT
                  </th>
                  <th className="border-b border-gray-300 p-2 text-left">
                    TX CHARGE
                  </th>
                  <th className="border-b border-gray-300 p-2 text-left">
                    PAYABLE AMOUNT
                  </th>
                  <th className="border-b border-gray-300 p-2 text-left">
                    ACCOUNT DETAILS
                  </th>
                  <th className="border-b border-gray-300 p-2 text-left">
                    STATUS
                  </th>
                  <th className="border-b border-gray-300 p-2 text-left">
                    DATE
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {tableData.map((data, index) => (
                    <td key={index} className="border-b p-2 text-left">
                      {data}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithPending;
