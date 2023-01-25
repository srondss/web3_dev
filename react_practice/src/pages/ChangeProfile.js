import React, { useState } from "react";
import { useContext } from "react";
import App, { AppContext } from "../App";

export const ChangeProfile = () => {
  const [newUsername, setNewUsername] = useState("");
  const { setUsername } = useContext(AppContext);
  return (
    <div>
      <input
        placeholder="New Username"
        onChange={(event) => {
          setNewUsername(event.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          setUsername(newUsername);
        }}
      >
        Change Username
      </button>
    </div>
  );
};
