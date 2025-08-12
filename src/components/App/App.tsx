import toast, { Toaster } from "react-hot-toast";
import fetchMovies from "../../services/movieService";
import SearchBar from "../SearchBar/SearchBar";
import css from "./App.module.css";
import { useState } from "react";
import type { Movie } from "../../types/movie";

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const onSubmit = async (topic: string) => {
    setMovies([]);
    const moviesData = await fetchMovies(topic);
    if (moviesData.length === 0) {
      toast.error("No movies found for your request.");
    }
    setMovies(moviesData);
  };
  return (
    <div className={css.app}>
      <SearchBar onSubmit={onSubmit} />
      <Toaster />
    </div>
  );
};

export default App;
