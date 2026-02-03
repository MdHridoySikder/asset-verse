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
        Component: AssetList,
      },
      {
        path: "add-asset",
        Component: AddAsset,
      },
      {
        path: "all-requests",
        Component: AllRequests,
      },
      {
        path: "my-employee-list",
        Component: MyEmployeeList,
      },
      {
        path: "upgrade-package",
        Component: UpgradePackage,
      },
      {
        path: "my-profile",
        Component: Profile,
      },
    ],
  },
]);
