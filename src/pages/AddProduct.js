import React from "react";
import PagePath from "../components/PagePath";
import Button from "@mui/material/Button";

const AddProduct = () => {
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

      <div>
        <form action="" method="POST" encType="multipart/form-data">
          <div className="flex">
            <div className="w-1/3 bg-white rounded-md p-4">
              <div className="font-bold text-xl mb-2">Select Categories</div>
              <div className="border border-gray-200 p-4">
                {/* Your category checkboxes go here */}
              </div>
            </div>
            <div className="w-2/3">
              <div className="bg-light rounded-md p-4">
                <div className="text-xl font-bold mb-4">Add Product</div>
                <hr />
                <div id="add_product_area">
                  {/* Your tab content goes here */}
                </div>
              </div>
              <div className="form-group mt-4">
                <Button type="submit" variant="contained" color="primary">
                  Add Product
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
