import { movieData } from './movieDataProvider.js'
import { movieObjectHtml } from './movieHtml.js'

let movieList = movieData();
// console.log(movieList)

export function movieListGenerator () {
    let movieListHtml = "";
    let movieListHtmlId = document.querySelector("#movie-list-container");

    for (const movie of movieList) {
        movieListHtml += movieObjectHtml(movie);
    }
    console.log(movieListHtml)

    return movieListHtmlId.innerHTML = `<h2>List of Movies</h2>
    <section class="movie-list-cards">${movieListHtml}</section>`
}