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

const GenerationTeam = () => {
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
    "Column 1",
    "Column 2",
    "Column 3",
    "Column 4",
    "Column 5",
    "Column 6",
    "Column 7",
    "Column 8",
    "Column 9",
  ];
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-[10px]">Generation Team</h2>
      <PagePath
        pathOne={"/"}
        pathTwo={"#"}
        pathOneName={"Home"}
        pathTwoName={"Network"}
        pathThreeName={"Generation Team"}
      />

      <h2 className="text-sm font-semibold mt-[25px]">GENERATION TEAM</h2>
      <div class="border-t border-gray-400 my-4 "></div>
      <span className=" text-lg text-gray-400">demo ( demo )</span>

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

          <Controller
            name="Level"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className="w-full sm:w-[160px]">
                <FormControl fullWidth>
                  <InputLabel id="Level">Level</InputLabel>
                  <Select {...field} labelId="Level" label="Level">
                    <MenuItem value="Level 1">Level 1</MenuItem>
                    <MenuItem value="Level 2">Level 2</MenuItem>
                    <MenuItem value="Level 3">Level 3</MenuItem>
                    <MenuItem value="Level 4">Level 4</MenuItem>
                    <MenuItem value="Level 5">Level 5</MenuItem>
                  </Select>
                </FormControl>
              </div>
            )}
          />

          <Button type="submit" variant="outlined">
            Fillter
          </Button>

          <Button variant="contained">Reset</Button>
        </form>
      </div>

      <div className="max-w-[375px] sm:max-w-full  mx-auto mt-8">
        <div className=" bg-white shadow-md rounded-md p-4 overflow-x-auto">
          <div className="overflow-x-scroll">
            <table className="w-full table-auto border">
              <thead>
                <tr>
                  <th className="border-b border-gray-300  p-2 text-left">
                    S NO.
                  </th>
                  <th className="border-b border-gray-300 p-2 text-left">
                    ACTION
                  </th>
                  <th className="border-b border-gray-300 p-2 text-left">
                    NAME
                  </th>
                  <th className="border-b border-gray-300 p-2 text-left">
                    USERNAME
                  </th>
                  <th className="border-b border-gray-300 p-2 text-left">
                    EMAIL
                  </th>
                  <th className="border-b border-gray-300 p-2 text-left">
                    MOBILE
                  </th>
                  <th className="border-b border-gray-300 p-2 text-left">
                    JOIN DATE
                  </th>
                  <th className="border-b border-gray-300 p-2 text-left">
                    ACTIVE STATUS
                  </th>
                  <th className="border-b border-gray-300 p-2 text-left">
                    SPONSOR ID(NAME)
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

export default GenerationTeam;
