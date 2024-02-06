import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Form, Link } from "react-router-dom";
import { Button, FormControl, InputLabel, MenuItem } from "@mui/material";
import Select from "@mui/material/Select";
import { Controller, useForm } from "react-hook-form";
import { Box } from "@mui/system";

const FilterForm = () => {
  const [value1, setValue1] = useState("");
  const handleChange1 = (event) => {
    setValue1(event.target.value);
  };
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    setValue1(data);
    console.log(data);
    // Handle form submission logic here
  };
  return (
    <div>
      <div className="bg-white shadow-md rounded-md p-6 my-8">
        {/*  Input Fields */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex mb-4 flex-wrap gap-4 w-full"
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

          <Controller
            name="Email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Enter Email"
                className="w-full sm:w-auto"
              />
            )}
          />

          <Controller
            name="Sponser"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Enter Sponser"
                className="w-full sm:w-auto"
              />
            )}
          />

          <Controller
            name="Mobile"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Enter Mobile"
                className="w-full sm:w-auto"
              />
            )}
          />

          {/*  Dropdwon Fields */}

          <Controller
            name="status"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className="w-full sm:w-[160px]">
                <FormControl fullWidth>
                  <InputLabel id="Select-a-status ">Select a status</InputLabel>
                  <Select {...field} labelId="Select-a-status" label=" status">
                    <MenuItem value="Active">Active</MenuItem>
                    <MenuItem value="Inactive">Inactive</MenuItem>
                  </Select>
                </FormControl>
              </div>
            )}
          />

          <Controller
            name="userStatus"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className="w-full sm:w-[160px]">
                <FormControl fullWidth>
                  <InputLabel id="userStatus">User Status</InputLabel>
                  <Select {...field} labelId="userStatus" label="userStatus">
                    <MenuItem value="Block">Block</MenuItem>
                    <MenuItem value="Unblock">Unblock</MenuItem>
                  </Select>
                </FormControl>
              </div>
            )}
          />

          <Controller
            name="number"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className="w-full sm:w-[160px]">
                <FormControl fullWidth>
                  <InputLabel id="number">number</InputLabel>
                  <Select {...field} labelId="number" label="number">
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                    <MenuItem value={40}>40</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
                  </Select>
                </FormControl>
              </div>
            )}
          />

          <Button type="submit" variant="outlined">
            Fill
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
    </div>
  );
};

export default FilterForm;
