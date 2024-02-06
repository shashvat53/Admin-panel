import React, { useState } from "react";
import PagePath from "../components/PagePath";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";

const Income = () => {
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
    45, 236, 100, 11,
  ];
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-[10px]">Income</h2>
      <PagePath
        pathOne={"/"}
        pathTwo={"#"}
        pathOneName={"Home"}
        pathTwoName={" Income"}
        pathThreeName={""}
      />

      <h2 className="text-sm font-semibold mt-[25px]">INCOME</h2>
      <div class="border-t border-gray-400 my-4 "></div>

      <div className="bg-white shadow-md rounded-md p-6 my-8">
        {/*  Input Fields */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex mb-4 flex-wrap gap-4"
        >
          {/*  Dropdwon Fields */}

          <Controller
            name="Month"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className="w-full sm:w-[160px]">
                <FormControl fullWidth>
                  <InputLabel id="Month">Select a Month</InputLabel>
                  <Select {...field} labelId="Month" label="Month">
                    <MenuItem value="January">January</MenuItem>
                    <MenuItem value="Faburary">Faburary</MenuItem>
                    <MenuItem value="March">March</MenuItem>
                    <MenuItem value="April">April</MenuItem>
                    <MenuItem value="May">May</MenuItem>
                    <MenuItem value="June">June</MenuItem>
                    <MenuItem value="July">July</MenuItem>
                    <MenuItem value="Agust">Agust</MenuItem>
                    <MenuItem value="September">September</MenuItem>
                    <MenuItem value="October">October</MenuItem>
                    <MenuItem value="November">November</MenuItem>
                    <MenuItem value="December">December</MenuItem>
                  </Select>
                </FormControl>
              </div>
            )}
          />

          <Button type="submit" variant="outlined">
            Fillter
          </Button>
        </form>
      </div>

      <div className="container mx-auto mt-8">
        <div className="bg-white shadow-md rounded-md p-4 w-full">
          <div className="overflow-x-scroll">
            <h3 className="text-center text-3xl mb-[20px]">Income Section</h3>
            <table className="w-full table-auto border">
              <thead>
                <tr>
                  <th className="border-b border-gray-300  p-2 text-left">
                    DIRECT SPONSOR
                  </th>

                  <th className="border-b border-gray-300 p-2 text-left">
                    MATCHING INCOME
                  </th>
                  <th className="border-b border-gray-300 p-2 text-left">
                    REWARD INCOME
                  </th>
                  <th className="border-b border-gray-300 p-2 text-left">
                    ROI INCOME
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {tableData.map((data, index) => (
                    <td
                      key={index}
                      className="border-b p-2 text-left text-blue-500"
                    >
                      {data}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
            <h3 className="text-center text-xl my-[20px]">Total Income :392</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Income;
