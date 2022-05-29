import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { UserCard } from "../../components/UserCard/UserCard";
import { Error } from "../../components/Error/Error";
import { useHandleUsers } from "../../hooks/useHandleUsers";

function User() {
  const { username } = useParams();
  const [user, setUser] = useState([]);

  const { error, setError } = useHandleUsers();

  const getData = async () => {
    try {
      const res = await axios.get(`https://api.github.com/users/${username}`);
      setUser(res.data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return <UserCard user={user} error={error} onError={() => <Error />} />;
}

export { User };
