import React, { useState } from "react";
import PagePath from "../components/PagePath";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Toolbar,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers";

const SupportPending = () => {
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
      column6: "2023-02-23 11:28:03",
      column7: "2023-02-23 11:28:03",
    },
    {
      column1: "2",
      column2: "user1",
      column3: "demo",
      column4: "companyname@gmail.com	",
      column5: "2018-12-26 14:49:08",
      column6: "2023-02-23 11:28:03",
      column7: "2023-02-23 11:28:03",
    },
  ];
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-[10px]">Support</h2>
      <PagePath
        pathOne={"/"}
        pathTwo={"#"}
        pathOneName={"Home"}
        pathTwoName={" Support"}
        pathThreeName={"  Pending"}
      />

      <h2 className="text-sm font-semibold mt-[25px]">SUPPORT PENDING</h2>
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

          {/*  Date Fields */}

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            {/* Using DatePicker with React Hook Form */}
            <Controller
              className="w-full sm:w-auto"
              name="Starting Date"
              control={control}
              defaultValue={null}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  renderInput={(params) => (
                    <TextField {...params} label="Starting Date" />
                  )}
                />
              )}
            />
            <Button variant="outlined">To</Button>
            <Controller
              name="End Date"
              control={control}
              defaultValue={null}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  renderInput={(params) => (
                    <TextField {...params} label="End Date" />
                  )}
                />
              )}
            />
          </LocalizationProvider>

          <Button type="submit" variant="outlined">
            Fillter
          </Button>
          <Button variant="contained">Reset</Button>
        </form>
      </div>

      <div className=" max-w-[375px] sm:max-w-full container mx-auto mt-8">
        <div className="bg-white shadow-md rounded-md p-4 overflow-x-auto">
          <div className="overflow-x-scroll">
            <table className="w-full table-auto border">
              <thead>
                <tr>
                  <th className="border-b border-gray-300  p-2 text-left">
                    S NO.
                  </th>

                  <th className="border-b border-gray-300 p-2 text-left">
                    TICKET ID
                  </th>
                  <th className="border-b border-gray-300 p-2 text-left">
                    USER ID
                  </th>
                  <th className="border-b border-gray-300 p-2 text-left">
                    DESCRIPTION
                  </th>
                  <th className="border-b border-gray-300 p-2 text-left">
                    CREATE DATE
                  </th>
                  <th className="border-b border-gray-300 p-2 text-left">
                    STATUS
                  </th>

                  <th className="border-b border-gray-300 p-2 text-left">
                    ACTION
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
                    <td className="border-b px-4 py-2">{row.column7}</td>
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

export default SupportPending;
