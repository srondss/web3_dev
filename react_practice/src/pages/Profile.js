import React from "react";
import { ChangeProfile } from "./ChangeProfile";
import { useContext } from "react";
import App, { AppContext } from "../App";

export const Profile = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      <h1>Profile: {username} </h1>
      <ChangeProfile />
    </div>
  );
};
