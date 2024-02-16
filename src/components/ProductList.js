import React, { useEffect, useState } from "react";

import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import EditProduct from "../pages/EditProduct";

const ProductList = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editedProductId, setEditedProductId] = useState(null);
  const navigate = useNavigate();

  const handleEdit = (row) => {
    // Logic to handle edit functionality
    // <EditProduct productId={productId} />;
    // setEditedProductId(row);
    navigate("/editProduct", { state: { data: row } });
    console.log("Edit product details:", row, "00");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://server-mlm01.blockchainboostup.com/product/"
        );
        const result = await response.json();
        setAllProduct(result);
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

  let tableData = allProduct?.product;
  // setAllProduct(data?.product);

  const deleteProduct = async (productId) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          const response = await fetch(
            `https://server-mlm01.blockchainboostup.com/product/${productId}`,
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
          return setAllProduct((prevProducts) => {
            return {
              ...prevProducts,
              product: prevProducts.product.filter(
                (product) => product._id !== productId
              ),
            };
          });
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
    <div className="max-w-[375px] sm:max-w-full overflow-x-auto ">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Id</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Qty</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allProduct?.product?.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.itemId}</TableCell>
                <TableCell>
                  <img
                    className="w-40 sm:w-24 md:w-32 lg:w-40 xl:w-32"
                    src={`https://boostupmlm-project01.s3.ap-south-1.amazonaws.com/${row.photos[0]}`}
                  />
                </TableCell>
                <TableCell>{row?.itemName}</TableCell>
                <TableCell>{row?.categoryId?.categoryName}</TableCell>
                <TableCell>{row.quantityInStock}</TableCell>
                <TableCell>
                  <div className="space-x-2  flex  sm:flex-row ">
                    <Button
                      // component={Link}
                      // to="/editProduct"
                      // to={{
                      //   pathname: "/editProduct",
                      //   state: row.itemId, // Pass necessary data instead of the component
                      // }}
                      onClick={() => handleEdit(row)}
                      startIcon={<EditIcon />}
                      variant="contained"
                      color="primary"
                      // component={<EditProduct />}
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => deleteProduct(row._id)}
                      startIcon={<DeleteIcon />}
                      variant="contained"
                      color="error"
                    >
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProductList;
