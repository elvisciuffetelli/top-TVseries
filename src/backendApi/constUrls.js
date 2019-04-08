class urls {
  static getTvShows(page = 1) {
    return {
      POPULAR: `https://api.themoviedb.org/3/tv/popular?api_key=2acf2189a0f548b1b5ed08bbef8dfeb3&language=en-US&page=${page}`,
      TOP_RATED: `https://api.themoviedb.org/3/tv/top_rated?api_key=2acf2189a0f548b1b5ed08bbef8dfeb3&language=en-US&page=${page}`
    }
  }

  static getDetails(tvShowId, num) {
    return {
      IMAGE: 'https://image.tmdb.org/t/p/w500/',
      LATEST: 'https://api.themoviedb.org/3/tv/latest?api_key=2acf2189a0f548b1b5ed08bbef8dfeb3&language=en-US',
      SEASON: `https://api.themoviedb.org/3/tv/${tvShowId}?api_key=2acf2189a0f548b1b5ed08bbef8dfeb3&language=en-US`,
      SEASON_DETAIL: `https://api.themoviedb.org/3/tv/${tvShowId}/season/${num}?api_key=2acf2189a0f548b1b5ed08bbef8dfeb3&language=en-US`
    }
  }

};

export default urls;