import { IMGPATH } from "./constante.js";

let tabMovies = [];


export function handleScroll(url,containerCard, currentPage) {
    const scrollThreshold = 300; // Seuil de déclenchement du chargement supplémentaire
    if (containerCard.scrollHeight - containerCard.scrollTop - containerCard.clientHeight < scrollThreshold) {
        currentPage++;
        getFilmByUrl(url,currentPage)
            .then(movies => displayMovies(movies, containerCard));
    }
}

export async function getFilmByUrl(url, page) {
    try {
        const urlObject = new URL(url);
        urlObject.searchParams.set('page', page);

        const response = await fetch(urlObject.toString(), {
            method: "GET",
        });
        const data = await response.json();
        return data['results'];
    } catch (err) {
        console.log(err);
    }
}

export function displayMovies(movies , containerCard) {  
    tabMovies = tabMovies.concat(movies)
    createCatalogueFilm(tabMovies, containerCard)
}

 

function createCatalogueFilm(tabFilm, containerCard) {
    containerCard.innerHTML = "";
    for (const element of tabFilm) {
        createCardFilm(containerCard, element);
    };
    
}

function createCardFilm(containerCard, film) {
    containerCard.innerHTML += ` <div class="card-container"  >
     <div class="card">
            <div class="front-content" id="film_${film['id']}">
                <marquee behavior="" direction="">
                    <h3>${film['original_title']}</h3>

                </marquee>
                <p class="image-clignote" >Sortie : ${film['release_date']}</p>
            </div>
            <div class="content">
                <h5 class="description" >Title : ${film['original_title']}</h5>
                <p class="heading"> <strong class="description">Description :</strong> ${film['overview']}</p>
            </div>
        </div>
   </div>`;
   setBackgroundImage(film['id'], film['backdrop_path']);
  }



  function setBackgroundImage(id, backdrop_path) {
    const filmDiv = document.querySelector('#film_'+id);
    filmDiv.style.backgroundImage = `url('${IMGPATH+backdrop_path}')`;
    
  }


  /**
   * 
adult : false
backdrop_path : "/sRLC052ieEzkQs9dEtPMfFxYkej.jpg"
id : 848326
original_language :  "en"
original_title : "Rebel Moon - Part One: A Child of Fire"
overview : "When a peaceful colony on the edge of the galaxy finds itself threatened by the armies of the tyrannical Regent Balisarius, they dispatch Kora, a young woman with a mysterious past, to seek out warriors from neighboring planets to help them take a stand."
popularity : 2535.152
poster_path : "/ui4DrH1cKk2vkHshcUcGt2lKxCm.jpg"
release_date : "2023-12-15"
title : "Rebel Moon - Part One: A Child of Fire"
video : false
vote_average : 6.4
vote_count : 639
   */