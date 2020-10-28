import React from "react";
import AppBar from "./AppBar";
import Movies from "./Movies";
import getResult from "./../../data/searchMovies";
import { Switch, Route } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import getDetail from "./../../data/movieDetail";
import Welcome from "./Welcome";
import defaultMovies from "./../../data/defaultMovies";
import authService from "./../service/authService";
import Error from "./Error";

export default function Home(props) {
  if (!authService.isLoggedIn()) {
    props.history.push("/login");
  }
  const [searchResult, setSearchResult] = React.useState([]);
  const [detail, setdetail] = React.useState({});
  const [status, setStatus] = React.useState(true);

  const handleLogOut = () => {
    authService.handleLogout(props);
  };
  async function handleKeyDown(event) {
    if (event.keyCode === 13) {
      let searchList = await getResult(event.target.value);
      if (searchList.Response === "True") {
        setSearchResult(searchList.Search);
        setStatus(false);
        props.history.push("/home/movies");
      } else {
        setStatus(false);
        props.history.push("/home/error");
      }
    }
  }
  async function handleClick(id) {
    let selectMovie = await getDetail(id);
    if (selectMovie.Response === "True") {
      setdetail(selectMovie);
      setStatus(false);
      props.history.replace("/home/movieDetail");
    }
  }
  return (
    <>
      <AppBar handleKeyDown={handleKeyDown} handleLogOut={handleLogOut} />
      <Welcome
        defaultMovies={defaultMovies}
        handleClick={handleClick}
        display={status}
      />
      <Switch>
        <Route
          path="/home/movies"
          render={(props) => (
            <Movies
              movieList={searchResult}
              handleClick={handleClick}
              navigate={status}
              {...props}
            />
          )}
        />
        <Route
          path="/home/movieDetail"
          render={(props) => (
            <MovieDetails detail={detail} navigate={status} {...props} />
          )}
        />
        <Route path="/home/error" component={Error} />
      </Switch>
    </>
  );
}
