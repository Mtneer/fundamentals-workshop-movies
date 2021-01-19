/* 
 * Purpose: To build HTML for a single movie object 
 * from the movieDataProvider.js database.
 */

export function movieObjectHtml(movieObject) {
    let htmlString = `<div class="movie-card">
    <h3 class="movie-title">${movieObject.title}</h3>
    <p class="movie-director">${movieObject.director}</p>
    <div class="movie-image" style="background-image:url(${movieObject.image})">
    <div class="movie-rank">
    <h5>Rank:</h5>
    <p>${movieObject.rank}</p>
    </div>
    </div>
    
    </div>`
    return htmlString;
}



/* <div class="movie-image">
    <img class="image" src="${movieObject.image}">
    </div> */