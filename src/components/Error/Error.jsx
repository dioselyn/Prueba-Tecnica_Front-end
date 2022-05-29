import React from "react";
import { MdSentimentVeryDissatisfied } from "react-icons/md";
import "./Error.scss";

function Error({ error }) {
  return (
    <>
      <p className="color-danger center">Ups!. There is error {error}...</p>
      <div className="center">
        <MdSentimentVeryDissatisfied className="color-danger" />
      </div>
    </>
  );
}

export { Error };
