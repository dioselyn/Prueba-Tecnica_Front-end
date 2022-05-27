import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { UserCard } from "../../components/UserCard/UserCard";

function User() {
  const { username } = useParams();
  const [user, setUser] = useState([]);

  const getData = async () => {
    const res = await axios.get(`https://api.github.com/users/${username}`);
    setUser(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return <UserCard user={user} />;
}

export { User };
