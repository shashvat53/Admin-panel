import React, { useEffect, useState } from "react";
import PagePath from "../components/PagePath";
import { useForm, Controller } from "react-hook-form";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  TextField,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Tabs,
  Tab,
  Box,
  InputLabel,
  Radio,
} from "@mui/material";
import { TabPanel } from "@mui/lab";
import { fetchData } from "../helper/category";
import { toast } from "react-toastify";

const AddProduct = () => {
  const { handleSubmit, control, register } = useForm();
  const [categories, setCategories] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(0);

  // const checkedCheckboxes = watch();

  const [selectedId, setSelectedId] = useState(null);

  const handleCheckboxChange = (id) => {
    setSelectedId(id === selectedId ? null : id);
  };
  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const onSubmit = (data) => {
    // const { women, footwear, clothes } = data;
    // console.log("Women:", women);
    // console.log("Footwear:", footwear);
    // console.log("Clothes:", clothes);
    console.log(data);
  };

  useEffect(() => {
    // setData(fetchData());
    fetchData().then((payload) => {
      if (payload.error) {
        toast.error(payload.error);
        return <div>Loading...</div>;
      } else {
        // console.log(payload.category);
        setCategories(payload.category);
      }
    });
  }, []);

  if (categories === null) {
    return <h1>Loading...</h1>;
  }
  console.log(categories);

  function TabPanel(props) {
    const { children, value, index } = props;

    return (
      <div hidden={value !== index}>
        {value === index && <Box p={3}>{children}</Box>}
      </div>
    );
  }
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-[10px]">Products</h2>
      <PagePath
        pathOne={"/"}
        pathTwo={"#"}
        pathOneName={"Home"}
        pathTwoName={" Products"}
        pathThreeName={"   Product details"}
      />
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardHeader title="Select Categories" />
              <CardContent>
                <FormGroup>
                  {categories
                    ?.filter(
                      (parentCategory) => parentCategory.parentCategory === null
                    )
                    ?.map((parentCategory) => (
                      <div key={parentCategory._id}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              {...register("parentId")}
                              checked={selectedId === parentCategory._id}
                              onChange={() =>
                                handleCheckboxChange(parentCategory._id)
                              }
                              value={parentCategory._id}
                            />
                          }
                          label={parentCategory.categoryName}
                        />
                        <FormGroup style={{ paddingLeft: "20px" }}>
                          {categories
                            ?.filter(
                              (childCategory) =>
                                childCategory.parentCategory?._id ===
                                parentCategory._id
                            )
                            ?.map((childCategory) => (
                              <FormControlLabel
                                key={childCategory._id}
                                control={
                                  <Checkbox
                                    {...register("childId")}
                                    checked={selectedId === childCategory._id}
                                    onChange={() =>
                                      handleCheckboxChange(childCategory._id)
                                    }
                                    value={childCategory._id}
                                  />
                                }
                                label={childCategory.categoryName}
                              />
                            ))}
                        </FormGroup>
                      </div>
                    ))}
                </FormGroup>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Card>
              <CardHeader title="Add Product" />
              <CardContent>
                <Tabs
                  variant="fullWidth"
                  value={activeTab}
                  onChange={handleChange}
                >
                  <Tab label="Product Detail" />
                  <Tab label="IMAGE" />
                  <Tab label="QTY" />
                </Tabs>
                <TabPanel value={activeTab} index={0}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Controller
                        name="PRODUCT_NAME"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <TextField
                            {...field}
                            label="PRODUCT NAME"
                            fullWidth
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Controller
                        name="MRP_PRICE"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <TextField {...field} label="MRP PRICE*" fullWidth />
                        )}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Controller
                        name="SALE_PRICE"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <TextField {...field} label="SALE PRICE*" fullWidth />
                        )}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Controller
                        name="PV"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <TextField {...field} label="PV" fullWidth />
                        )}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Controller
                        name="PRODUCT_DESCRIPTION"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <TextField
                            {...field}
                            label="PRODUCT DESCRIPTION"
                            fullWidth
                          />
                        )}
                      />
                    </Grid>
                    {/* Add other input fields similarly */}
                  </Grid>
                </TabPanel>
                <TabPanel value={activeTab} index={1}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <InputLabel className="mb-1 sm:mb-2 ">
                        CHOOSE IMAGE
                      </InputLabel>
                      <TextField
                        fullWidth
                        control={control}
                        name="main_image"
                        type="file"
                      />
                    </Grid>
                  </Grid>
                </TabPanel>
                <TabPanel value={activeTab} index={2}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Qty"
                        fullWidth
                        control={control}
                        name="qty"
                      />
                    </Grid>
                  </Grid>
                </TabPanel>
                <Button
                  sx={{ ml: 3 }}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Add Product
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        {/* <Button type="submit" variant="contained" color="primary">
          Add Product
        </Button> */}
      </form>
    </div>
  );
};

export default AddProduct;
