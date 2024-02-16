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
} from "@mui/material";
import { fetchData } from "../helper/category";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const EditProduct = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const editedProductDetails = location?.state?.data;
  console.log(editedProductDetails);
  const { handleSubmit, control, register } = useForm();
  const [activeTab, setActiveTab] = useState(0);
  const [categories, setCategories] = useState(null);

  const [selectedId, setSelectedId] = useState(
    editedProductDetails?.categoryId?._id
  );

  const handleCheckboxChange = (id) => {
    setSelectedId(id);
  };

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const onSubmit = (data) => {
    console.log(data); // You can handle form submission here
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
  // console.log(categories);

  function TabPanel(props) {
    const { children, value, index } = props;

    return (
      <div hidden={value !== index}>
        {value === index && <Box p={3}>{children}</Box>}
      </div>
    );
  }

  const EditedProduct = (id) => {
    console.log(id);
  };
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-[10px]">Edit Product</h2>
      <PagePath
        pathOne={"/"}
        pathTwo={"#"}
        pathOneName={"Home"}
        pathTwoName={" Product"}
        pathThreeName={" Edit Product"}
      />
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <Card>
              <CardHeader title="Edit Product" />
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
                        defaultValue={editedProductDetails?.itemName}
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
                        defaultValue={editedProductDetails?.price}
                        render={({ field }) => (
                          <TextField {...field} label="MRP PRICE*" fullWidth />
                        )}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Controller
                        name="PRODUCT_DESCRIPTION"
                        control={control}
                        defaultValue={editedProductDetails?.description}
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
                        CHOOSE MAIN IMAGE
                      </InputLabel>
                      <TextField
                        fullWidth
                        control={control}
                        name="main_image"
                        type="file"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <InputLabel className="mb-1 sm:mb-2 ">
                        CHOOSE MORE IMAGE
                      </InputLabel>

                      <TextField
                        fullWidth
                        control={control}
                        name="more_images"
                        type="file"
                        multiple
                      />
                    </Grid>
                  </Grid>
                </TabPanel>
                <TabPanel value={activeTab} index={2}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Controller
                        name="Qty"
                        control={control}
                        defaultValue={editedProductDetails?.quantityInStock}
                        render={({ field }) => (
                          <TextField {...field} label="Qty" fullWidth />
                        )}
                      />
                    </Grid>
                  </Grid>
                </TabPanel>
                <Button
                  sx={{ ml: 3 }}
                  type="submit"
                  variant="contained"
                  color="primary"
                  // onClick={() => EditedProduct(parentCategory._id)}
                >
                  Edit Product
                </Button>
              </CardContent>
            </Card>
          </Grid>

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
                              checked={
                                parentCategory._id === selectedId ? true : false
                              }
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
            <img
              className="w-full"
              src={`https://boostupmlm-project01.s3.ap-south-1.amazonaws.com/${editedProductDetails?.photos[0]}`}
            />
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default EditProduct;
