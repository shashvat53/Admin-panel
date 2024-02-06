import React, { useState } from "react";
import PagePath from "../components/PagePath";
import { Button, MenuItem, Select, TextField, Toolbar } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

const AddFund = () => {
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
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-[10px]">Fund Transfer</h2>
      <PagePath
        pathOne={"/"}
        pathTwo={"#"}
        pathOneName={"Home"}
        pathTwoName={" Fund"}
        pathThreeName={"  Fund Transfer"}
      />

      <h2 className="text-sm font-semibold mt-[25px]">FUND TRANSFER</h2>
      <div class="border-t border-gray-400 my-4 "></div>

      <div className="bg-white max-w-[400px] shadow-md rounded-md p-6 my-8">
        {/*  Input Fields */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col  mb-4 flex-wrap gap-4"
        >
          <Controller
            name="Enter Username"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField {...field} label="Enter Username" />
            )}
          />
          <Controller
            name="Enter Amount"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField {...field} label="Enter Amount" />
            )}
          />

          <Button type="submit" variant="contained">
            TRANSFER
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddFund;
