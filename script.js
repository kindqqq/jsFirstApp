"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};




let lastFilm = prompt("Один из последних просмотренных фильмов", ""),
  rating = prompt("На сколько оцениваете его?", ""),
  lastFilm1 = prompt("Один из последних просмотренных фильмов", ""),
  rating1 = prompt("На сколько оцениваете его?", "");
personalMovieDB.movies[lastFilm] = rating;
personalMovieDB.movies[lastFilm1] = rating1;
console.log(personalMovieDB);