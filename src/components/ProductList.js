import React, { useEffect, useState } from "react";
// import CustomeTAbleButton from "./CustomeTAbleButton";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

import { Button } from "@mui/material";
import ProductTableBtn from "./ProductTableBtn";

const ProductList = () => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  // const [productIdToDelete, setProductIdToDelete] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // const handleDeleteConfirmation = (productId) => {
  //   setProductIdToDelete(productId);
  //   setShowConfirmModal(true);
  // };

  // const handleDeleteProduct = () => {
  //   // Perform the deletion logic here
  //   console.log(`Deleting product with ID: ${productIdToDelete}`);

  //   // After deletion, close the modal
  //   setShowConfirmModal(false);
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://server-mlm01.blockchainboostup.com/product/"
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

  console.log(data.product);
  const tableData = data.product;

  // const tableData = [
  //   {
  //     productId: 33,
  //     itemImagUrl:
  //       "https://demo.mlmreadymade.com/binary_repurchase_franchise/images/products/w2_(1)2.png",
  //     name: "Test",
  //     Categories: "Health Care",
  //     Qty: 100,
  //     Action: <ProductTableBtn edit={"/editProduct"} />,
  //   },
  //   {
  //     productId: 33,
  //     itemImagUrl:
  //       "https://demo.mlmreadymade.com/binary_repurchase_franchise/images/products/w41.png",
  //     name: "Test",
  //     Categories: "Health Care",
  //     Qty: 100,
  //     Action: <ProductTableBtn edit={"/editProduct"} />,
  //   },
  //   {
  //     productId: 33,
  //     itemImagUrl:
  //       "https://demo.mlmreadymade.com/binary_repurchase_franchise/images/products/w2_(1)2.png",
  //     name: "Test",
  //     Categories: "Health Care",
  //     Qty: 100,
  //     Action: <ProductTableBtn edit={"/editProduct"} />,
  //   },
  //   {
  //     productId: 33,
  //     itemImagUrl:
  //       "https://demo.mlmreadymade.com/binary_repurchase_franchise/images/products/w41.png",
  //     name: "Test",
  //     Categories: "Health Care",
  //     Qty: 100,
  //     Action: <ProductTableBtn edit={"/editProduct"} />,
  //   },
  // ];

  return (
    <div className="max-w-[375px] sm:max-w-full container mx-auto mt-8">
      <div className=" p-4 overflow-x-scroll">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="text-left p-3">Product Id</th>
              <th className="text-left p-3">#</th>
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Categories</th>
              <th className="text-left p-3">Qty</th>
              <th className="text-left p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td className="text-left border-b  py-3 ">{row.itemId}</td>
                <td className="text-left border-b  py-3">
                  <img className="w-[48px]" src={row.itemImagUrl} />
                </td>
                <td className="text-left border-b  py-3">{row.itemName}</td>
                <td className="text-left border-b  py-3">{row.Categories}</td>
                <td className="text-left border-b  py-3">
                  {row.quantityInStock}
                </td>
                <td className="text-left border-b  py-3">
                  {
                    <ProductTableBtn
                      edit={"/editProduct"}
                      onClick={() => handleDelete(item.id)}
                    />
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
