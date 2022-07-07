import React from "react";
import "./Table.scss";

function Table({
  children,
  searchedUsers,
  searchText,
  onEmptySearchResults,
  error,
  onError,
  loading,
  onLoading,
}) {
  const titles = ["#", "Id", "Username", "Link"];
  return (
    <div className="table__container">
      <div className="table__title">
        {titles.map((title, index) => (
          <h4 key={index}>{title}</h4>
        ))}
      </div>

      <div>
        {!loading && !searchedUsers.length && onEmptySearchResults(searchText)}
        {error && onError()}
        {loading && onLoading()}
        {children}
      </div>
    </div>
  );
}

export { Table };

