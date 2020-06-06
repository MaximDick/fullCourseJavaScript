"use strict";
/*
* Задание на урок:
*
* 1) создать переменную numberOfFilms и в нее поместить ответ от пользователя на вопрос:
* "сколько фильмов вы уже посмотрели?"
*
* 2) Создать объект personalMovieDB и в него постить такие свойства:
* - count - сюда передается ответ на первый вопрос
* - movies - в это свойство поместить пустой объект
* - actors - тоже поместить пустой объект
* - genres - сюда поместить пустой массив
* - privat - в это свойство поместить boolean(логическое) значение false. **/


const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
console.log(numberOfFilms);

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actor : {},
    genres : [],
    privat : false
};

const lastWatchFilm1 = prompt("Один из последних просмотренних фильмов?", "");
const ballFilm1 = +prompt("Насколько оцените его?", "");
const lastWatchFilm2 = prompt("Один из последних просмотренних фильмов?", "");
const ballFilm2 = +prompt("Насколько оцените его?", "");

personalMovieDB.movies[lastWatchFilm1] = ballFilm1;
personalMovieDB.movies[lastWatchFilm2] = ballFilm2;


console.log(personalMovieDB)