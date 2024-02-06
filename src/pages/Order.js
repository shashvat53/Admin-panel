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

const Order = () => {
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
  ];
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-[10px]">Orders</h2>
      <PagePath
        pathOne={"/"}
        pathTwo={"#"}
        pathOneName={"Home"}
        pathTwoName={" Orders"}
        pathThreeName={" All"}
      />

      <h2 className="text-sm font-semibold mt-[25px]">ORDERS(0)</h2>
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

          {/*  Date Fields */}

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            {/* Using DatePicker with React Hook Form */}
            <Controller
              name="Starting Date"
              control={control}
              defaultValue={null}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Starting Date"
                      className="w-full sm:w-auto"
                    />
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
                    <TextField
                      {...params}
                      label="End Date"
                      className="w-full sm:w-auto"
                    />
                  )}
                />
              )}
            />
          </LocalizationProvider>

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
            name="status"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className="w-full sm:w-[160px]">
                <FormControl fullWidth>
                  <InputLabel id="status">status</InputLabel>
                  <Select {...field} labelId="status" label="status">
                    <MenuItem value="pending">Pending</MenuItem>
                    <MenuItem value="success">Success</MenuItem>
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

      <div className=" container mx-auto mt-8">
        <div className="bg-white shadow-md rounded-md p-4 overflow-x-auto">
          <h3 className="text-right my-[10px]">Total Order Amount(0)</h3>
          <div className="max-w-[375px] sm:max-w-full overflow-x-scroll">
            <table className=" w-full table-auto border">
              <thead>
                <tr>
                  <th className="border-b border-gray-300  p-2 text-left">
                    S NO.
                  </th>

                  <th className="border-b border-gray-300 p-2 text-left">
                    ACTION
                  </th>
                  <th className="border-b border-gray-300 p-2 text-left">
                    USERID(NAME)
                  </th>
                  <th className="border-b border-gray-300 p-2 text-left">
                    ORDER ID
                  </th>
                  <th className="border-b border-gray-300 p-2 text-left">
                    ORDER AMOUNT ($)
                  </th>
                  <th className="border-b border-gray-300 p-2 text-left">
                    PAYMENT STATUS
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

export default Order;
