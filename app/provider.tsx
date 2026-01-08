"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { UserDetailContext } from "@/context/UserDetailContext";

function Provider({ children }: any) {
  const [useDetail, setUserDetail] = useState();

  useEffect(() => {
    CreateNewUser();
  }, []);

  const CreateNewUser = async () => {
    try {
      const result = await axios.post("/api/user", {});
      console.log("New User Created", result.data);
      setUserDetail(result.data);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };
  return (
    <UserDetailContext.Provider value={{ useDetail, setUserDetail }}>
      <div>{children}</div>
    </UserDetailContext.Provider>
  );
}

export default Provider;
