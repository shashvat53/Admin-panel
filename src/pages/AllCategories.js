import React, { useEffect, useState } from "react";
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
import ProductTableBtn from "../components/ProductTableBtn";

const AllCategories = () => {
  const [value, setValue] = useState("");
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

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://server-mlm01.blockchainboostup.com/category/",
          { method: "get" }
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(data);
  const categories = data?.category;

  const tableHeadingData = [
    // Sample data, replace with your actual data
    "Sr NO.",
    "Category Name",
    "Parent Category",
    "Action",
  ];
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-[10px]">Category</h2>
      <PagePath
        pathOne={"/"}
        pathTwo={"#"}
        pathOneName={"Home"}
        pathTwoName={" Category"}
        pathThreeName={"  Categories"}
      />

      <div className="w-full flex flex-col  sm:flex-row rounded-md  my-8">
        <form
          onSubmit={handleSubmit1(onSubmit1)}
          className="flex flex-col w-full sm:w-[45%] sm:px-8 mb-4 flex-wrap gap-4"
        >
          <h1 className="text-lg font-semibold">Add More Category</h1>
          <Controller
            name="Enter Your Name"
            control={control1}
            defaultValue=""
            render={({ field }) => (
              <TextField {...field} label="Enter Your Name" />
            )}
          />

          <Controller
            name="categories"
            control={control1}
            defaultValue=""
            render={({ field }) => (
              <div className="w-full sm:w-full">
                <FormControl fullWidth>
                  <InputLabel id="number">Select a categories</InputLabel>
                  <Select {...field} labelId="categories" label="categories">
                    {categories.map((category, index) => (
                      <MenuItem key={index} value={category.parentCategory}>
                        {category.parentCategory}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            )}
          />

          <Button type="submit" variant="contained">
            Add Category
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
                  {categories.map((category, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className=" border-gray-400 border-b-2  hover:bg-white"
                    >
                      <td className=" p-3">{rowIndex + 1}</td>
                      <td className=" p-3">{category.categoryName}</td>
                      <td className=" p-3">{category.parentCategory}</td>
                      <td className=" p-3">
                        {<ProductTableBtn edit={"/editCategory"} />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCategories;
