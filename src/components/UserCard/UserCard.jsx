import React from "react";
import { Link } from "react-router-dom";
import "./UserCard.scss";

function UserCard({ user }) {
  return (
    <div className="user__card">
      <div>
        <img src={user.avatar_url} className="user__card--img" />
      </div>
      <div className="user__card--description">
        <p className="user__card--label">
          Username: <span>{user.login}</span>
        </p>
        <p className="user__card--label">
          Full Name: <span>{user.name}</span>
        </p>
        <p className="user__card--label">
          Public Repo: <span>{user.public_repos}</span>
        </p>
      </div>
    </div>
  );
}

export { UserCard };
