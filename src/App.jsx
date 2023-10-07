import axios from "axios";
import "./App.css";
import List from "@pages/List/List";
import { useEffect, useState, useReducer } from "react";

const reducer = (state, action) => {
  let newState;
  switch (action.type) {
    case "increase":
      newState = { page: state.page + 1 };
      break;
    case "decrease":
      newState = { page: state.page - 1 };
      break;
    default:
      throw new Error();
  }
  return newState;
};
const initialState = { page: 1 };
function App() {
  const [topAnime, setTopAnime] = useState({});
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get(`https://api.jikan.moe/v4/top/anime?page=${state.page}`)
      .then((response) => {
        setTopAnime(response.data);
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      });
  }, [state]);

  return topAnime?.data ? (
    <List
      animeList={topAnime}
      clickNextAction={dispatch}
      currentPage={state.page}
    />
  ) : (
    <span className="loading loading-spinner loading-xs"></span>
  );
}

export default App;
