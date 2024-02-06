import React from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const ProductTableBtn = ({ edit }) => {
  const DeleteProduct = () => {
    alert("hello");
  };

  return (
    <div className="flex flex-row">
      <Link className="text-[12px]">
        <Button onClick={DeleteProduct} color="secondary" variant="contained">
          <DeleteIcon size="small" />
          Delete
        </Button>
      </Link>
      <Link to={edit} className="mx-2 text-[12px]">
        <Button variant="contained">
          <ModeEditIcon size="small" />
          edit
        </Button>
      </Link>
    </div>
  );
};

export default ProductTableBtn;
