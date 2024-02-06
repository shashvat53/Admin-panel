import React from "react";
import PagePath from "../components/PagePath";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
// import { makeStyles } from "@mui/styles";

const PlanSetting = () => {
  //   root: {
  //     marginTop: theme.spacing(8),
  //     display: "flex",
  //     flexWrap: "wrap",
  //     gap: theme.spacing(2),
  //   },
  //   paper: {
  //     padding: theme.spacing(2),
  //     width: "45%",
  //     backgroundColor: "white",
  //   },
  //   heading: {
  //     fontSize: "1.5rem",
  //     fontWeight: "bold",
  //     textAlign: "center",
  //     color: "#172B4D",
  //   },
  //   formContainer: {
  //     backgroundColor: "#172B4D",
  //     textAlign: "right",
  //     fontSize: "12px",
  //     padding: "10px 18px",
  //     display: "flex",
  //     flexDirection: "column",
  //     gap: theme.spacing(4),
  //     marginTop: "12px",
  //   },
  //   input: {
  //     textAlign: "right",
  //     padding: "4px 8px",
  //     borderRadius: "4px",
  //   },
  //   button: {
  //     backgroundColor: "#07B3D2",
  //     color: "white",
  //     padding: "6px 14px",
  //     borderRadius: "4px",
  //   },
  // }));

  // const YourComponent = () => {
  //   const classes = PlanSetting();
  //   const { control, handleSubmit } = useForm();

  //   const onSubmit = (data) => {
  //     // Handle form submission logic here
  //     console.log(data);
  //   };

  return (
    <>
      <PagePath
        pathOne={"/"}
        pathTwo={"#"}
        pathOneName={"Home"}
        pathTwoName={"Plan settings"}
        // pathThreeName={"  Change Password"}
      />

      <div className="mt-8 flex flex-wrap w-full gap-2">
        <div className="bg-white p-[6px_14px] w-full sm:w-[45%]">
          <h1 className="text-3xl font-bold text-center text-[#172B4D]">
            Direct Sponsor Plan Setting
          </h1>
          <div className="bg-[#172B4D] text-right text-[12px] p-[10px_18px] flex flex-col gap-4 my-[12px]">
            <p className="text-white">DIRECT SPONSOR INCOME(%)</p>
            <div class="border-t border-gray-400"></div>
            <input
              type="text"
              value={5}
              className="text-right p-[4px_8px] rounded-md"
            />
          </div>
          <button className="bg-[#07B3D2] text-white p-[6px_14px] rounded-md">
            CHANGE
          </button>
        </div>

        <div className="bg-white p-[6px_14px] w-full sm:w-[45%]">
          <h1 className="text-3xl font-bold text-center text-[#172B4D]">
            RoI Plan Setting
          </h1>
          <div className="bg-[#172B4D] text-right text-[12px] p-[10px_18px] flex flex-col gap-4 my-[12px]">
            <p className="text-white">ROI INCOME(%)</p>
            <div class="border-t border-gray-400"></div>
            <input
              type="text"
              value={1}
              className="text-right p-[4px_8px] rounded-md"
            />
          </div>
          <button className="bg-[#07B3D2] text-white p-[6px_14px] rounded-md">
            CHANGE
          </button>
        </div>
      </div>

      {/* <Container component="div" className={classes.root}>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h4" className={classes.heading}>
            Direct Sponsor Plan Setting
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={classes.formContainer}>
              <Typography variant="body1" style={{ color: "white" }}>
                DIRECT SPONSOR INCOME(%)
              </Typography>
              <div style={{ borderTop: "1px solid gray" }}></div>
              <Controller
                name="directSponsorIncome"
                control={control}
                defaultValue={5}
                render={({ field }) => (
                  <TextField type="text" {...field} className={classes.input} />
                )}
              />
            </div>
            <Button type="submit" className={classes.button}>
              CHANGE
            </Button>
          </form>
        </Paper>

        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h4" className={classes.heading}>
            RoI Plan Setting
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={classes.formContainer}>
              <Typography variant="body1" style={{ color: "white" }}>
                ROI INCOME(%)
              </Typography>
              <div style={{ borderTop: "1px solid gray" }}></div>
              <Controller
                name="roiIncome"
                control={control}
                defaultValue={1}
                render={({ field }) => (
                  <TextField type="text" {...field} className={classes.input} />
                )}
              />
            </div>
            <Button type="submit" className={classes.button}>
              CHANGE
            </Button>
          </form>
        </Paper>
      </Container> */}

      {/* Table input */}
      <div className="max-w-[375px] sm:max-w-full  my-8 shadow-md bg-white p-[12px_24px]">
        <h1 className="text-center text-3xl font-bold text-[#172B4D] mb-[12px]">
          Reward Plan Setting
        </h1>
        <table className="w-full overflow-x-scroll mx-auto border-collapse border border-white bg-[#172B4D]">
          <thead>
            <tr className="text-white">
              <th className="border-b border-gray-300 p-2">S. NO</th>
              <th className="border-b border-gray-300 p-2">Column 2</th>
              <th className="border-b border-gray-300 p-2">Column 3</th>
              <th className="border-b border-gray-300 p-2">Column 4</th>
              <th className="border-b border-gray-300 p-2">Column 5</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }).map((_, rowIndex) => (
              <tr key={rowIndex} className="w-full">
                <td className="text-white border-b border-gray-300 p-2 text-center ">
                  {rowIndex}
                </td>
                <td className="border-b   p-2">
                  <input
                    type="text"
                    className="w-full p-1 border border-gray-300"
                  />
                </td>
                <td className="border-b   p-2">
                  <input
                    type="text"
                    className="w-full p-1 border border-gray-300"
                  />
                </td>
                <td className="border-b   p-2">
                  <input
                    type="text"
                    className="w-full p-1 border border-gray-300"
                  />
                </td>
                <td className="border-b   p-2">
                  <input
                    type="text"
                    className="w-full p-1 border border-gray-300"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="bg-[#07B3D2] mt-[12px] text-white p-[6px_14px] rounded-md">
          CHANGE
        </button>
      </div>
    </>
  );
};

export default PlanSetting;
