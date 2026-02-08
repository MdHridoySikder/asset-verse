import React from "react";
import UseAuth from "../Hooks/UseAuth";
import useRole from "../Hooks/useRole";
import Forbidden from "../Pages/Shared/Forbidden";

const AdminRoutes = ({ children }) => {
  const { loading } = UseAuth();
  const { role, roleLoading } = useRole();

  if (loading || roleLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-bars loading-2xl h-30 w-30 text-blue-500"></span>
      </div>
    );
  }
  if (role !== "admin") {
    return <Forbidden></Forbidden>;
  }

  return children;
};

export default AdminRoutes;
