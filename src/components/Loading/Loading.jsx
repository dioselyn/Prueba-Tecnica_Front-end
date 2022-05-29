import React from "react";
import loader from "../../assets/img/loader.svg";
import "./Loading.scss";

function Loading() {
  return (
    <>
      <div className="loading center">
        <img src={loader} />
      </div>
    </>
  );
}

export { Loading };
