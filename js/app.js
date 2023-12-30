import {  APIURL } from "./constante.js";
import { containerFilm } from "./dom.js";
import { displayMovies, getFilmByUrl, handleScroll } from "./function.js";

let currentPage = 1;
document.addEventListener('DOMContentLoaded', () => {
    getFilmByUrl(APIURL, currentPage)
        .then(movies => displayMovies(movies, containerFilm));
        document.addEventListener('scroll', ()=>{
            handleScroll(APIURL, containerFilm, currentPage);
            currentPage++;
        });
});
