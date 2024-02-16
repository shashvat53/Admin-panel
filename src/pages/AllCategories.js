import React, { useEffect, useState } from "react";
import PagePath from "../components/PagePath";
import {
  Button,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Toolbar,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import { Controller, useForm } from "react-hook-form";
// import ProductTableBtn from "../components/ProductTableBtn";
import { Link } from "react-router-dom";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { fetchData } from "../helper/category";
import { toast } from "react-toastify";
import swal from "sweetalert";

const AllCategories = () => {
  const [value, setValue] = useState("");
  const handleChange1 = (event) => {
    setValue(event.target.value);
  };
  const { handleSubmit: handleSubmit1, control: control1, reset } = useForm();
  const { handleSubmit: handleSubmit2, control: control2 } = useForm();

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [refetch, setRefetch] = useState(false);

  const onSubmit1 = async (data) => {
    let updatedData = {};
    if (data?.parentCategory == "") {
      updatedData = { categoryName: data?.categoryName };
    } else {
      updatedData = { ...data };
    }

    try {
      const response = await fetch(
        "https://server-mlm01.blockchainboostup.com/category/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Add any other headers if needed
          },
          body: JSON.stringify(updatedData),
        }
      );

      const result = await response.json();
      // console.log(result, "45");

      if (result.error) {
        await swal(result.error, {
          icon: "error",
        });
      }
      await swal(result.message, {
        icon: "success",
      });

      // Clear the form fields after successful submission
      reset();
      // data = "";
      // updatedData.categoryName = "";
      // console.log(updatedData, "111111");
      return setRefetch(true);
    } catch (error) {
      // Handle network errors or other exceptions
      console.error("Error adding category:", error);
    }
  };

  const onSubmit2 = (data) => {
    setValue(data);
    console.log(data);
    // Handle form submission logic here
  };

  useEffect(() => {
    setRefetch(false);

    fetchData().then((payload) => {
      if (payload.error) {
        toast.error(payload.error);
        console.log(payload.error);
        return <div>Loading...</div>;
      } else {
        // console.log(payload.category);
        setData(payload.category);
      }
    });
  }, [refetch]);

  if (data === null) {
    return <h1>Loading...</h1>;
  }

  console.log(data);

  const tableHeadingData = [
    // Sample data, replace with your actual data
    "Sr NO.",
    "Category Name",
    "Parent Category",
    "Action",
  ];

  const Deletecategory = (itemId) => {
    console.log(itemId);
    // const updatedData = categories.filter((item) => item.id !== itemId);
    // console.log(updatedData);
  };
  // const { control,  } = useForm();

  const deleteCategory = async (categoryId) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Category!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          const response = await fetch(
            `https://server-mlm01.blockchainboostup.com/category/${categoryId}`,
            {
              method: "DELETE",
            }
          );
          const result = await response.json();
          if (!response.ok) {
            return await swal(result?.message, {
              icon: "error",
            });
          }
          await swal(result.message, {
            icon: "success",
          });
          // Remove the deleted product from the state
          // return setData((prevCategory) => {
          //   return {
          //     ...prevCategory,
          //     category: prevCategory.category.filter(
          //       (category) => category._id !== categoryId
          //     ),
          //   };
          // });

          // let updatedData = data.filter((category) => {
          //   category._id !== categoryId;
          // });
          // return setData(updatedData);

          setData(data.filter((category) => category.id !== categoryId));
          return setRefetch(true);
        } catch (error) {
          await swal(error.message, {
            icon: "error",
          });
          console.error("Error deleting product:", error.message);
        }
      } else {
        return;
      }
    });
  };

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
            name="categoryName"
            control={control1}
            defaultValue=""
            render={({ field }) => (
              <TextField {...field} label="Enter Category Name" />
            )}
          />

          <Controller
            name="parentCategory"
            control={control1}
            defaultValue=""
            render={({ field }) => (
              <div className="w-full ">
                <FormControl fullWidth>
                  <InputLabel id="parentCategory">parentCategory</InputLabel>
                  <Select
                    {...field}
                    labelId="parentCategory"
                    label="parentCategory"
                  >
                    {data
                      ?.filter(
                        (parentCategory) =>
                          parentCategory.parentCategory === null
                      )
                      ?.map((parentCategory) => (
                        <MenuItem
                          key={parentCategory.categoryName}
                          value={parentCategory._id}
                        >
                          {parentCategory.categoryName}
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
                  {data.map((category, rowIndex) => (
                    // console.log(category._id),
                    <tr
                      key={rowIndex}
                      className=" border-gray-400 border-b-2  hover:bg-white"
                    >
                      <td className=" p-3">{rowIndex + 1}</td>
                      <td className=" p-3">{category.categoryName}</td>
                      <td className=" p-3">
                        {category?.parentCategory?.categoryName}
                      </td>
                      <td className=" p-3">
                        {/* {<ProductTableBtn edit={"/editCategory"} />} */}
                        <div className="space-x-2  flex  sm:flex-row ">
                          <Button
                            component={Link}
                            to="/editCategory"
                            startIcon={<EditIcon />}
                            variant="contained"
                            color="primary"
                          >
                            Edit
                          </Button>
                          <Button
                            onClick={() => deleteCategory(category._id, "000")}
                            startIcon={<DeleteIcon />}
                            variant="contained"
                            color="error"
                          >
                            Delete
                          </Button>
                        </div>
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
