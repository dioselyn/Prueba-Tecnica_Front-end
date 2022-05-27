import React from "react";


function Row({ user, index }) {
  return (
    <div className="table__row">
      <div>{index + 1}</div>
      <div key={user.id}>{user.id}</div>
      <div key={user.login}>{user.login}</div>
      <div key={user.url}>
        <Link to={`user/${user.login}`}>
          <FaUser />
        </Link>
      </div>
    </div>
  );
}

export { Row };
