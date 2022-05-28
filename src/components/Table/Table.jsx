import React from "react";
import "./Table.scss";

function Table({ children, searchedUsers, searchText, onEmptySearchResults }) {
  const titles = ["#", "Id", "Username", "Link"];
  return (
    <div className="table__container">
      <div className="table__title">
        {titles.map((title, index) => (
          <h4 key={index}>{title}</h4>
        ))}
      </div>

      <div>
        {!searchedUsers.length && onEmptySearchResults(searchText)}
        {children}
      </div>
    </div>
  );
}

export { Table };
