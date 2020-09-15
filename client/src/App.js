import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Link, Switch } from 'react-router-dom'

import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie'
import MovieList from './Movies/MovieList'


export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(response.data)
          // console.log(response.data)
        })
        .catch(error => {
          console.error('Error: ', error);
        });
      }
      getMovies();
    }, [])
    console.log(movieList)


  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />

      <Switch>

        <Route path = '/'>
          <MovieList movies={movieList} />
        </Route>

        <Route path = '/movies/:id'>
          <Movie movieList={movieList} />
        </Route>

      </Switch>


    </div>
  );
}
