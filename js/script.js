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


let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}
start();

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actor : {},
    genres : [],
    privat : false
};



function rememberMyFilms() {
    for(let i = 0; i < 2; i++) {

        const lastWatchFilm = prompt("Один из последних просмотренних фильмов?", "");
        const ballFilm = +prompt("Насколько оцените его?", "");

        if (lastWatchFilm.length != null && ballFilm != null
            && lastWatchFilm != "" && ballFilm != ""
            && lastWatchFilm.length < 50) {
            console.log("done");
        } else {
            console.log("error");
            i--;
        }
        personalMovieDB.movies[lastWatchFilm] = ballFilm;
    }
}

rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотренно довольно мало фильмов.");
    } else if (10 <= personalMovieDB.count && personalMovieDB.count <= 30) {
        console.log("Вы классический зритель.");
    } else  if (personalMovieDB.count > 30) {
        console.log("Вы киноман.");
    }
}
detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB)
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();


