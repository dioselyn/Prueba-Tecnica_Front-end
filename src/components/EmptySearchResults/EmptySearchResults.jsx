import React from "react";

function EmptySearchResults({ searchText }) {
  return <h4 className="center">No results found for {searchText}</h4>;
}

export { EmptySearchResults };
