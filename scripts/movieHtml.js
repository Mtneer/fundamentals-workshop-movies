/* 
 * Purpose: To build HTML for a single movie object 
 * from the movieDataProvider.js database.
 */

function movieObjectHtml(movieObject) {
    let htmlString = `<div class="movie-card">
    <h3 class="movie-title">${movieObject.title}</h3>
    <p class="movie-director">${movieObject.director}</p>
    <div class="movie-image" background>

    </div>`
}
