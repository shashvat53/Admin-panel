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

const UserReward = () => {
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
  const rowData = [1, "", "	Level1", ""];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-[10px]">Reward</h2>
      <PagePath
        pathOne={"/"}
        pathTwo={"#"}
        pathOneName={"home"}
        pathTwoName={"Reward"}
        pathThreeName={"All"}
      />
      <section>
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
          </form>

          <div className="container mx-auto mt-8">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="border-b border-gray-300 p-2 text-left">
                    S NO.
                  </th>
                  <th className="border-b border-gray-300 p-2 text-left">
                    {" "}
                    USERID(NAME)
                  </th>
                  <th className="border-b border-gray-300 p-2 text-left">
                    RANK
                  </th>
                  <th className="border-b border-gray-300 p-2 text-left">
                    COMPLETE DATE
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {rowData.map((data, index) => (
                    <td key={index} className="border-b border-gray-300 p-2">
                      {data}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section></section>
    </div>
  );
};

export default UserReward;
