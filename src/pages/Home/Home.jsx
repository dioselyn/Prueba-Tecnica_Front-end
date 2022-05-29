import React from "react";
import { Search } from "../../components/Search/Search";
import { Table } from "../../components/Table/Table";
import { TableBody } from "../../components/TableBody/TableBody";
import { useHandleUsers } from "../../hooks/useHandleUsers";
import "../Home/Home.scss";
import "../../index.scss";
import { BarGraphic } from "../../components/BarGraphic/BarGraphic";
import { useRoutes } from "react-router-dom";
import { EmptySearchResults } from "../../components/EmptySearchResults/EmptySearchResults";
import { Error } from "../../components/Error/Error";
import { Loading } from "../../components/Loading/Loading";

function Home() {
  const {
    loading,
    error,
    login,
    followers,
    searchValue,
    setSearchValue,
    filteredUsers,
  } = useHandleUsers();

  return (
    <React.Fragment>
      <header className="home__header">
        <Search setSearchValue={setSearchValue} />
      </header>
      <main>
        <div className="home__table">
          <Table
            loading={loading}
            onLoading={() => <Loading />}
            error={error}
            onError={() => <Error />}
            searchText={searchValue}
            searchedUsers={filteredUsers}
            onEmptySearchResults={(searchText) => (
              <EmptySearchResults searchText={searchText} />
            )}
          >
            {filteredUsers.map((user, index) => (
              <TableBody key={index} user={user} index={index} />
            ))}
          </Table>
        </div>
        <div className="home__bar">
          <BarGraphic
            error={error}
            onError={() => <Error />}
            login={login}
            followers={followers}
          />
        </div>
      </main>
    </React.Fragment>
  );
}

export { Home };
