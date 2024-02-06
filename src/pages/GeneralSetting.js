import React from "react";
import PagePath from "../components/PagePath";
import { Button } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

const GeneralSetting = () => {
  const tableData = [
    // Sample data, replace with your actual data
    {
      column1: "1",
      column2: "Test",
      column3: (
        <Button size="small" color="secondary" variant="contained">
          <ModeEditIcon size="small" />
        </Button>
      ),
    },
    {
      column1: "2",
      column2: "user1",
      column3: (
        <Button size="small" color="secondary" variant="contained">
          <ModeEditIcon size="small" />
        </Button>
      ),
    },
    {
      column1: "2",
      column2: "user1",
      column3: (
        <Button size="small" color="secondary" variant="contained">
          <ModeEditIcon size="small" />
        </Button>
      ),
    },
    {
      column1: "2",
      column2: "user1",
      column3: (
        <Button size="small" color="secondary" variant="contained">
          <ModeEditIcon size="small" />
        </Button>
      ),
    },
    {
      column1: "2",
      column2: "user1",
      column3: (
        <Button size="small" color="secondary" variant="contained">
          <ModeEditIcon size="small" />
        </Button>
      ),
    },
    {
      column1: "2",
      column2: "user1",
      column3: (
        <Button size="small" color="secondary" variant="contained">
          <ModeEditIcon size="small" />
        </Button>
      ),
    },
    {
      column1: "2",
      column2: "user1",
      column3: (
        <Button size="small" color="secondary" variant="contained">
          <ModeEditIcon size="small" />
        </Button>
      ),
    },
    {
      column1: "2",
      column2: "user1",
      column3: (
        <Button size="small" color="secondary" variant="contained">
          <ModeEditIcon size="small" />
        </Button>
      ),
    },
    {
      column1: "2",
      column2: "user1",
      column3: (
        <Button size="small" color="secondary" variant="contained">
          <ModeEditIcon size="small" />
        </Button>
      ),
    },
    {
      column1: "2",
      column2: "user1",
      column3: (
        <Button size="small" color="secondary" variant="contained">
          <ModeEditIcon size="small" />
        </Button>
      ),
    },
    {
      column1: "2",
      column2: "user1",
      column3: (
        <Button size="small" color="secondary" variant="contained">
          <ModeEditIcon size="small" />
        </Button>
      ),
    },
  ];
  return (
    <div>
      <PagePath
        pathOne={"/"}
        pathTwo={"#"}
        pathOneName={"Home"}
        pathTwoName={" Settings"}
        pathThreeName={" "}
      />

      <div className="container mx-auto mt-8">
        <div className="bg-white shadow-md rounded-md p-4 overflow-x-auto">
          <div className="overflow-x-scroll">
            <table className="w-full table-auto border">
              <thead>
                <tr>
                  <th className="border-b border-gray-300  p-2 text-left">
                    S NO.
                  </th>

                  <th className="border-b border-gray-300 p-2 text-left">
                    TICKET ID
                  </th>
                  <th className="border-b border-gray-300 p-2 text-left">
                    USER ID
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index}>
                    <td className="border-b px-4 py-2 ">{row.column1}</td>
                    <td className="border-b px-4 py-2">{row.column2}</td>
                    <td className="border-b px-4 py-2">{row.column3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralSetting;
