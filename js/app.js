import {  APIURL } from "./constante.js";
import { containerFilm, searchInput } from "./dom.js";
import { displayMovies, getFilmByUrl, handleScroll, loader, searchFilm } from "./function.js";

let currentPage = 1;
// loader(true);

document.addEventListener('DOMContentLoaded', () => {
    containerFilm.innerHTML = "";
    getFilmByUrl(APIURL, currentPage)
        .then(movies => {
              
            displayMovies(movies, containerFilm)
        });
        document.addEventListener('scroll', ()=>{
            // loader(true);
            handleScroll(APIURL, containerFilm, currentPage);
            
            currentPage++;
        });
        searchInput.addEventListener('input', (e)=>{
            containerFilm.innerHTML = "";
            searchFilm(e.target.value)

        })
});
