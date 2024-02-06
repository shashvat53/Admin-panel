// Dashboard.js

import { Paper } from "@mui/material";
import React from "react";
import Card from "../components/card";
import WithdrawalCard from "../components/WithdrawalCard";
import TwoColTable from "../components/TwoColTable";
// import LongMenu from "../components/TableMenu";
import LongMenu from "../components/TableMenu";
import FiveColTable from "../components/FiveColTable";

const Dashboard = () => {
  const LeftTitle = "Investment";
  const LeftTableData = [
    { column1: "Total", column2: 0 },
    { column1: "Today", column2: 0 },
    { column1: "Yesterday", column2: 0 },
  ];

  const RightTitle = "Income Report";
  const RightTableData = [
    { column1: "Total Income", column2: 0 },
    { column1: "Direct Sponsor", column2: 0 },
    { column1: "Matching Income", column2: 0 },
    { column1: "Reward Income", column2: 0 },
    { column1: "ROI Income", column2: 0 },
  ];

  const FiveTableData = [
    {
      column1: "1",
      column2: "Test",
      column3: "admin@12345",
      column4: "test@gmail.com",
      column5: "2023-02-23 11:28:03",
    },

    {
      column1: "2",
      column2: "user1",
      column3: "demo",
      column4: "companyname@gmail.com	",
      column5: "2018-12-26 14:49:08",
    },
    // {
    //   column1: "Row 1 Data 1",
    //   column2: "Row 1 Data 2",
    //   column3: "Row 1 Data 3",
    //   column4: "Row 1 Data 4",
    //   column5: "Row 1 Data 5",
    // },
    // {
    //   column1: "Row 1 Data 1",
    //   column2: "Row 1 Data 2",
    //   column3: "Row 1 Data 3",
    //   column4: "Row 1 Data 4",
    //   column5: "Row 1 Data 5",
    // },
  ];

  return (
    <div>
      <section className=" w-full flex flex-col  md:justify-between  sm:flex-row gap-4 flex-wrap">
        <Card
          theme4={"from-[#FA808D] to-[#FED946]"}
          title={"Total Users"}
          num={2}
          icon={"users"}
        />
        <Card
          theme1={"from-[#4BB0FE] to-[#03F0FE]"}
          title={"Active"}
          num={1}
          icon={"chart-simple"}
        />
        <Card
          theme2={"from-[#0DB293] to-[#91C841]"}
          title={"Total Investment"}
          num={0}
          icon={"cart-shopping"}
        />

        <Card
          theme3={" from-[#F650A0] to-[#FF7578]"}
          title={"Total Income"}
          num={400.0}
          icon={"indian-rupee-sign"}
        />
      </section>

      <section className="my-[50px] w-full flex flex-col  md:justify-between sm:flex-row gap-4  flex-wrap">
        <WithdrawalCard
          theme1={"bg-[#2DCE89]"}
          title={"withdrawal"}
          subTitle={"Approved"}
          num={0}
        />
        <WithdrawalCard
          theme2={"bg-[#11CDEF]"}
          title={"withdrawal"}
          subTitle={"Pending"}
          num={0}
        />
        <WithdrawalCard
          theme3={"bg-[#F5365C]"}
          title={"withdrawal"}
          subTitle={"Rejected"}
          num={18.0}
        />
      </section>

      <section className="w-full flex flex-col sm:flex-row sm:justify-between  gap-4 sm:gap-0">
        <TwoColTable
          path={"/order"}
          tableData={LeftTableData}
          tableTitle={LeftTitle}
        />
        <TwoColTable
          menu={<LongMenu />}
          path={"#"}
          tableData={RightTableData}
          tableTitle={RightTitle}
        />
      </section>

      <section className="my-[50px] max-w-[370px] sm:max-w-full">
        <FiveColTable
          tableData={FiveTableData}
          tableTitle="New Customer List"
        />
      </section>
    </div>
  );
};

export default Dashboard;
