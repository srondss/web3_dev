import React from "react";
import { useContext } from "react";
import App, { AppContext } from "../App";

export const Home = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      <h1>This is the homepage.</h1>
      <h2>Username = {username}</h2>
    </div>
  );
};
