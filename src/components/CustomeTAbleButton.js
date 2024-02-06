import React from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const CustomeTAbleButton = () => {
  return (
    <div className="flex gap-1">
      <Link to={"/sign_in"}>
        <Button size="small" color="secondary" variant="contained">
          <ModeEditIcon size="small" />
        </Button>
      </Link>

      <Link to={"/user_panel"}>
        <Button size="small" variant="contained">
          LOGIN
        </Button>
      </Link>

      <Link to={"#"}>
        <Button size="small" variant="contained">
          EDIT&nbsp;&nbsp;ACOUNT
        </Button>
      </Link>
    </div>
  );
};

export default CustomeTAbleButton;
