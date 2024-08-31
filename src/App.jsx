import './App.css';
import movies from "./db/movies"
import Home from './components/Home';
import MovieList from './components/MovieList'
import MovieAdd from './components/MovieAdd';
import { useState } from 'react';

function App() {
  const [movieList,setMovieList] = useState(movies)

  const addMovie = ()=>{
    const movieTitle = document.getElementById("title").value;
    const movieImage = document.getElementById("image").value;
    if (movieTitle==="") return;

    const movie = {
        title: movieTitle,
        image:movieImage,
        rating: "7.0/10",
        time:"idk",
        liked : false,
    }
    setMovieList((prevList) => [...prevList, movie])
  }

  const likeHandler = (title)=>{
    setMovieList((movieList) =>
      movieList.map((t) =>
        t.title === title ? { ...t, liked: !t.liked } : t 
      )
    )
  }

  return (
    <div className="App">
      <Home></Home>
      
      <MovieList movieList={movieList} likeHandler={likeHandler}></MovieList>

      <MovieAdd addMovie={addMovie}></MovieAdd>
    </div>
  );
}

export default App;
