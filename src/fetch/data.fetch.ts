import axios from 'axios';

export const fetchDiscoverMovies = async () => {
  const tmdbApiKey = process.env.TMDB_API_KEY;
  const queryParams = new URLSearchParams({
    include_adult: 'false',
    include_video: 'false',
    language: 'en-US',
    page: '1',
    sort_by: 'primary_release_date.asc',
    vote_average: '8.4',
    vote_count: '1500',
    watch_region: 'TR',
    with_watch_providers: '8',
  });

  const response = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${tmdbApiKey}&${queryParams}`,
  );

  return response.data.results;
};

export const fetchMovieDetails = async (movieId: string) => {
  const tmdbApiKey = process.env.TMDB_API_KEY;

  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${tmdbApiKey}`,
  );

  return response.data;
};
