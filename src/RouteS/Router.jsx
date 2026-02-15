import { createBrowserRouter } from "react-router";
import RootLayout from "../LayOuts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import NotFound from "../Pages/Shared/NotFund/NotFound";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../LayOuts/DashboardLayout";
import AssetList from "../Pages/Dashboard/Hr/AssetList";
import AddAsset from "../Pages/Dashboard/Hr/AddAsset";
import AllRequests from "../Pages/Dashboard/Hr/AllRequests";
import MyEmployeeList from "../Pages/Dashboard/Hr/MyEmployeeList";
import UpgradePackage from "../Pages/Dashboard/Hr/UpgradePackage";
import Profile from "../Pages/Dashboard/Hr/Profile";

import Setting from "../Pages/Dashboard/Setting/Setting";

import RequestAnAsset from "../Pages/Dashboard/Employee/RequestAnAsset";
import AdminRoutes from "./AdminRoutes";
import MyAssets from "../Pages/Dashboard/Employee/MyAssets";
import MyTeam from "../Pages/Dashboard/Employee/MyTeam";
import HRRegister from "../Pages/Auth/HRRegister";
import PaymentSuccess from "../Pages/Dashboard/Hr/PaymentSuccess";
import Paymentcancelled from "../Pages/Dashboard/Hr/Paymentcancelled";
import HRList from "../Pages/Dashboard/Hr/HRList";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },

      {
        path: "/",
        element: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/hrregister",
        Component: HRRegister,
      },

      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "asset-list",

        element: (
          <AdminRoutes>
            <AssetList></AssetList>
          </AdminRoutes>
        ),
      },
      {
        path: "add-asset",
        element: (
          <AdminRoutes>
            <AddAsset></AddAsset>
          </AdminRoutes>
        ),
      },
      {
        path: "all-requests",
        element: (
          <AdminRoutes>
            <AllRequests></AllRequests>
          </AdminRoutes>
        ),
      },
      {
        path: "hrlist",
        element: (
          <AdminRoutes>
            <HRList></HRList>
          </AdminRoutes>
        ),
      },
      {
        path: "my-employee-list",
        element: (
          <AdminRoutes>
            <MyEmployeeList></MyEmployeeList>
          </AdminRoutes>
        ),
      },
      {
        path: "upgrade-package",
        element: (
          <AdminRoutes>
            <UpgradePackage></UpgradePackage>
          </AdminRoutes>
        ),
      },
      {
        path: "payment-success",
        element: (
          <AdminRoutes>
            <PaymentSuccess></PaymentSuccess>
          </AdminRoutes>
        ),
      },
      {
        path: "payment-cancelled",
        element: (
          <AdminRoutes>
            <Paymentcancelled></Paymentcancelled>
          </AdminRoutes>
        ),
      },
      {
        path: "my-team",
        element: (
          <AdminRoutes>
            <MyTeam></MyTeam>
          </AdminRoutes>
        ),
      },
      {
        path: "my-assets",
        Component: MyAssets,
      },

      {
        path: "my-profile",
        Component: Profile,
      },
      {
        path: "settings",
        Component: Setting,
      },
      {
        path: "request-an-asset",
        Component: RequestAnAsset,
      },
    ],
  },
]);
