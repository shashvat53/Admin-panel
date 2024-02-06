import React, { useState } from "react";
import { Link } from "react-router-dom";
import PagePath from "../components/PagePath";
import Box from "@mui/material/Box";

import {
  TextareaAutosize,
  FormControl,
  FormHelperText,
  Input,
} from "@mui/material";
import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Toolbar,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";

const NewsEvent = () => {
  const [value, setValue] = useState("");
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleChange1 = (event) => {
    setValue(event.target.value);
  };
  const { handleSubmit: handleSubmit1, control: control1 } = useForm();
  const { handleSubmit: handleSubmit2, control: control2 } = useForm();

  const onSubmit1 = (data) => {
    setValue(data);
    console.log(data);
    // Handle form submission logic here
  };
  const onSubmit2 = (data) => {
    setValue(data);
    console.log(data);
    // Handle form submission logic here
  };
  const tableData = [
    // Sample data, replace with your actual data

    ["Data 1", "Data 2", "Data 3", "Data 4", "Data 5", "Data 6"],
    ["Data 1", "Data 2", "Data 3", "Data 4", "Data 5", "Data 6"],
  ];
  const tableHeadingData = [
    // Sample data, replace with your actual data
    "#",
    "Title",
    "Description	",
    "Image",
    "Status",
    "Action",
  ];

  return (
    <>
      <h2 className="text-2xl font-semibold mb-[10px]">Advance</h2>
      <PagePath
        pathOne={"/"}
        pathTwo={"#"}
        pathOneName={"Home"}
        pathTwoName={" Advance"}
        pathThreeName={"  Alert"}
      />

      <div className="w-full flex flex-col  sm:flex-row rounded-md  my-8">
        {/*  Input Fields */}
        <form
          onSubmit={handleSubmit1(onSubmit1)}
          className="flex flex-col w-full sm:w-[45%] sm:px-8 mb-4 flex-wrap gap-4"
        >
          <Controller
            name="select alert type"
            control={control1}
            defaultValue=""
            render={({ field }) => (
              <div className="mb-4">
                <FormControl fullWidth>
                  <InputLabel id="select-alert-type">
                    select alert type
                  </InputLabel>
                  <Select
                    {...field}
                    labelId="elect-alert-type"
                    label="Select alert type"
                    className="text-black w-full"
                  >
                    <MenuItem value="Image and Text">Image and Text</MenuItem>
                    <MenuItem value="One Line">One Line</MenuItem>
                  </Select>
                </FormControl>
              </div>
            )}
          />

          <Controller
            name="Enter Title"
            control={control1}
            defaultValue=""
            render={({ field }) => <TextField {...field} label="Enter Title" />}
          />

          <Controller
            name="description"
            control={control1}
            defaultValue=""
            render={({ field, fieldState }) => (
              <FormControl>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <TextareaAutosize
                  {...field}
                  id="description"
                  placeholder="Enter your description"
                  rowsMin={3}
                  className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                />
                <FormHelperText>{fieldState?.error?.message}</FormHelperText>
              </FormControl>
            )}
          />

          <Controller
            name="file"
            control={control1}
            defaultValue=""
            render={({ field, fieldState }) => (
              <div className="mb-4">
                <InputLabel
                  htmlFor="file"
                  className="block text-sm font-medium text-gray-700"
                >
                  File
                </InputLabel>
                <Input
                  {...field}
                  id="file"
                  type="file"
                  className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                />
                <FormHelperText>{fieldState?.error?.message}</FormHelperText>
              </div>
            )}
          />

          <Button type="submit" variant="contained">
            Add alert
          </Button>
        </form>

        <div className="mt-9 sm:mt-0 w-full sm:w-[45%]">
          <form
            onSubmit={handleSubmit2(onSubmit2)}
            className="flex flex-row   mb-4 flex-wrap gap-4"
          >
            <Controller
              name="Enter Your Name"
              control={control2}
              defaultValue=""
              render={({ field }) => (
                <TextField {...field} label="Enter Your Name" />
              )}
            />

            <Button type="submit" variant="contained">
              Serch
            </Button>
          </form>
          <div className=" max-w-[375px] sm:max-w-full">
            <div className="overflow-x-scroll">
              <table className="min-w-full table-auto border">
                <thead className=" text-left border-b-2">
                  <tr className=" border-gray-700 border--2 ">
                    {tableHeadingData.map((heading, index) => (
                      <th key={index} className="border-b p-3 ">
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((rows, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className=" border-gray-400 border-b-2  hover:bg-white"
                    >
                      {rows.map((data) => (
                        <td className=" p-3">{data}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsEvent;
