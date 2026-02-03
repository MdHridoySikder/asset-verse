import React, { use } from "react";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";

const UseAuth = () => {
  const authContext = use(AuthContext);
  return authContext;
};

export default UseAuth;
