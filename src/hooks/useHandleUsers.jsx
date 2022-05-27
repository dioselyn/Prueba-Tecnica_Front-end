import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function useHandleUsers() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [login, setLogin] = React.useState([]);
  const [followers, setFollowers] = React.useState([]);

  const getData = async () => {
    try {
      let newResult = [];
      let arrLogin = [];
      let arrFollowers = [];

      const response = await axios.get(
        `https://api.github.com/search/users?q=""`
      );

      //first 10

      for (let i = 0; i < 10; i++) {
        newResult.push(response.data.items[i]);
      }

      for (let user of newResult) {
        const respon = await axios.get(`${user.url}`);
        arrLogin.push(respon.data.login);
        arrFollowers.push(respon.data.followers);
        //console.log(respon.data.followers);
      }

      setUsers(newResult);
      setLogin(arrLogin);
      setFollowers(arrFollowers);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  //Filtered Results
  const filteredUsers = users.filter((user) =>
    user.login.toLowerCase().includes(searchValue.toLowerCase())
  );

  return {
    users,
    error,
    login,
    followers,
    searchValue,
    setSearchValue,
    filteredUsers,
  };
}

export { useHandleUsers };
