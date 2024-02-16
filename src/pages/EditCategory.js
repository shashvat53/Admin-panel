import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
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

const EditCategory = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { handleSubmit, control } = useForm();

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

  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-[10px]">Edit Category</h2>
      <PagePath
        pathOne={"/"}
        pathTwo={"#"}
        pathOneName={"Home"}
        pathTwoName={" Categories"}
        pathThreeName={"  Categories Name"}
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full sm:w-[45%]  my-8 flex-wrap gap-4"
      >
        <h1 className="text-lg font-semibold">Edit Category</h1>

        <Controller
          name="categories"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <div className="w-full sm:w-full">
              <FormControl fullWidth>
                <InputLabel id="categories">Select a category</InputLabel>
                <Select
                  native
                  {...field}
                  labelId="categories"
                  label="categories"
                >
                  {categories
                    ?.filter(
                      (parentCategory) => parentCategory.parentCategory === null
                    )
                    ?.map((parentCategory) => (
                      <optgroup
                        label={parentCategory.categoryName}
                        key={parentCategory._id}
                      >
                        {/* <option value="" disabled>
                            -- Select {parentCategory.categoryName} --
                          </option> */}
                        {categories
                          ?.filter(
                            (childCategory) =>
                              childCategory.parentCategory?._id ===
                              parentCategory._id
                          )
                          ?.map((childCategory) => (
                            <option
                              value={childCategory._id}
                              key={childCategory._id}
                            >
                              {childCategory.categoryName}
                            </option>
                          ))}
                      </optgroup>
                    ))}
                </Select>
              </FormControl>
            </div>
          )}
        />
        <Controller
          name="EnterName"
          control={control}
          defaultValue=""
          render={({ field }) => <TextField {...field} label="Enter Name" />}
        />
        <Button type="submit" variant="contained">
          save
        </Button>
      </form>
    </div>
  );
};

export default EditCategory;
