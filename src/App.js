import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Sidebar from "./pages/Sidebar";
// import Dashboard from "./pages/Dashboard";
// import AllUsers from "./pages/AllUsers";
// import { CssBaseline, Container, makeStyles } from "@mui/material";
import ResponsiveDrawer from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import AllUsers from "./pages/AllUsers";
import UserReward from "./pages/UserReward";
import GenerationTeam from "./pages/GenerationTeam";
import Tree from "./pages/Tree";
import WithPending from "./pages/WithPending";
import WithApproved from "./pages/WithApproved";
import WithCancelled from "./pages/WithCancelled";
import Order from "./pages/Order";
import Income from "./pages/Income";
import AddFund from "./pages/AddFund";
import TransferFund from "./pages/TransferFund";
import SupportPending from "./pages/SupportPending";
import SupportApproved from "./pages/SupportApproved";
import Contact from "./pages/Contact";
import GeneralSetting from "./pages/GeneralSetting";
import PlanSetting from "./pages/PlanSetting";
import NewsEvent from "./pages/NewsEvent";
import ChangePassword from "./pages/ChangePassword";
import SignInForm from "./pages/SignInForm";
import AllProducts from "./pages/AllProducts";
import AllCategories from "./pages/AllCategories";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";

function App() {
  const [signIn, setSignIn] = useState(true);

  return (
    <>
      {signIn ? (
        <Router>
          <Routes>
            <Route path="/" element={<ResponsiveDrawer />}>
              <Route index element={<Dashboard />} />
              <Route path="/all-user" element={<AllUsers />} />
              <Route path="/user-reward" element={<UserReward />} />
              <Route path="/generation-team" element={<GenerationTeam />} />
              <Route path="/tree" element={<Tree />} />
              <Route path="/withdrawals/pending" element={<WithPending />} />
              <Route path="/withdrawals/approved" element={<WithApproved />} />
              <Route
                path="/withdrawals/cancelled"
                element={<WithCancelled />}
              />
              <Route path="/product/all-product" element={<AllProducts />} />
              <Route
                path="/product/all-categories"
                element={<AllCategories />}
              />
              <Route path="/product/add-product" element={<AddProduct />} />
              <Route path="/order" element={<Order />} />
              <Route path="/income" element={<Income />} />
              <Route path="/fund/add_fund" element={<AddFund />} />
              <Route
                path="/fund/transfer_fund_history"
                element={<TransferFund />}
              />
              <Route path="/support/pending" element={<SupportPending />} />
              <Route path="/support/approved" element={<SupportApproved />} />
              <Route path="/contact_us" element={<Contact />} />
              <Route
                path="/settings/general_setting"
                element={<GeneralSetting />}
              />
              <Route path="/settings/plan_setting" element={<PlanSetting />} />
              <Route path="/settings/news_events" element={<NewsEvent />} />
              <Route path="/change_password" element={<ChangePassword />} />
              <Route path="/editProduct" element={<EditProduct />} />
              {/* Add more routes for other pages */}
            </Route>
            <Route path="/logout" element={<SignInForm />} />
          </Routes>
        </Router>
      ) : (
        <SignInForm />
      )}
    </>
  );
}

export default App;
