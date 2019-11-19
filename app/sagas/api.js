const urlGetMovies = 'http://164.132.226.137:9999/youtuber/feeds/searchByCommunityName?name=football4';

function* getMoviesFromApi() {
    const response = yield fetch(urlGetMovies, {
        method : 'GET',
        body: '',
    }).then(response => response.json());


    return yield (response);
}

export const Api = { getMoviesFromApi};