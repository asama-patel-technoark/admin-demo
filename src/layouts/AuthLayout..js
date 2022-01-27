import React from "react";

import { Outlet } from "react-router-dom";

const AuthLayout = (props) => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundColor: "#f4f6fa",
      }}
    >
      <Outlet />
    </div>
  );
};

export default AuthLayout;
