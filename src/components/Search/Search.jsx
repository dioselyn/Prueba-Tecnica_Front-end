import React, { useState } from "react";
import { FaSearch, FaMeh, FaTimes } from "react-icons/fa";
import "./Search.scss";

function Search({ setSearchValue }) {
  const [input, setInput] = useState("");
  const [isAlertActive, setIsAlertActive] = useState(false);
  //const []

  const onClickSearch = () => {
    (input && input.length < 4) || input === "iseijasunow"
      ? setIsAlertActive(true)
      : setSearchValue(input);
  };

  return (
    <React.Fragment>
      <div className="search__container">
        <div className="search__group">
          <input
            id="search"
            type="text"
            name="search"
            className="search"
            placeholder="Username"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <button onClick={onClickSearch} className="search__button">
            <FaSearch />
          </button>
        </div>
      </div>
      <div className="search__warning">
        <p className={`search__text--warning ${!isAlertActive && "hidden"}`}>
          <FaMeh className="warning__icon" /> Invalid Search
          <FaTimes
            className="warning__close"
            onClick={() => setIsAlertActive(false)}
          />
        </p>
      </div>
    </React.Fragment>
  );
}

export { Search };
