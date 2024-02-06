// import * as React from "react";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import { styled } from "@mui/material/styles";
// import GroupIcon from "@mui/icons-material/Group";
// import DonutSmallIcon from "@mui/icons-material/DonutSmall";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

// const DemoPaper = styled(Paper)(({ theme }) => ({
//   // width: 120,
//   height: 100,
//   // padding: theme.spacing(2),
//   // ...theme.typography.body2,
//   // textAlign: "center",
//   // display: "flex",
//   // justifyContent: "space-between",
//   alignItems: "center",
//   backgroundColor: "red",
// }));

// export default function Card({ title, num, icon }) {
//   return (
//     <Box
//       className="flex justify-between bg-blue-600"
//       sx={{
//         flexWrap: "wrap",
//         "& > :not(style)": {
//           m: 1,
//           px: 2,
//           width: 250,
//           height: 100,
//           backgroundColor: "green",
//         },
//       }}
//     >
//       <DemoPaper variant="elevation">
//         <div className="flex justify-between items-center">
//           <div>
//             <p>{title}</p>
//             <h2>{num}</h2>
//           </div>
//           {icon === "GroupIcon" && <GroupIcon />}
//           {icon === "Active" && <DonutSmallIcon />}
//           {icon === "TotalInvestment" && <ShoppingCartIcon />}
//           {icon === "TotalIncome" && <CurrencyRupeeIcon />}
//         </div>
//       </DemoPaper>
//     </Box>
//   );
// }

import React from "react";

const Card = ({ title, num, icon, theme1, theme2, theme3, theme4 }) => {
  return (
    <div>
      <div
        className={`w-full sm:w-[290px] p-6 bg-gradient-to-r ${theme1} ${theme2} ${theme3} ${theme4} flex items-center text-white justify-between rounded-md`}
      >
        <div>
          <span className="text-lg ">{title}</span>
          <h3 className="text-2xl font-bold">{num}</h3>
        </div>
        <i className={`fa-solid fa-${icon} text-2xl`}></i>
      </div>
    </div>
  );
};

export default Card;
