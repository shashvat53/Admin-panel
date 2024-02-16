import React, { useState } from "react";
import PagePath from "../components/PagePath";
import ProductList from "../components/ProductList";
import { Button, MenuItem, Select, TextField, Toolbar } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const AllProducts = () => {
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
      <div className="flex justify-between ">
        <div>
          <h2 className="text-2xl font-semibold mb-[10px]">Products</h2>
          <PagePath
            pathOne={"/"}
            pathTwo={"#"}
            pathOneName={"Home"}
            pathTwoName={" Products"}
            pathThreeName={"   Product details"}
          />
        </div>
        <div>
          <Button
            variant="contained"
            component={Link}
            to="/product/add-product" // className="bg-blue-500 hover:bg-blue-700 text-white font-bold sm:py-2 sm:px-4 rounded"
            className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded sm:py-1 sm:px-2"
          >
            Add Product
          </Button>
        </div>
      </div>

      <div className=" rounded-md  my-8">
        {/*  Input Fields */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-row  mb-4 flex-wrap gap-4"
        >
          <Controller
            name="Search"
            control={control}
            defaultValue=""
            render={({ field }) => <TextField {...field} label="Search" />}
          />

          <Button type="submit" variant="contained">
            Search
          </Button>
        </form>
      </div>

      <ProductList />
    </div>
  );
};

export default AllProducts;
