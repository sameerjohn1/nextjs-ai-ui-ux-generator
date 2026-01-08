"use client";

import React, { useEffect } from "react";
import axios from "axios";

function Provider({ children }: any) {
  useEffect(() => {
    CreateNewUser();
  }, []);

  const CreateNewUser = async () => {
    try {
      const result = await axios.post("/api/user", {});
      console.log("New User Created", result.data);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };
  return <div>{children}</div>;
}

export default Provider;
