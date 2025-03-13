const API_KRY = "3e58a1c91494d8bc37cf5f458bb15636";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}& query =${encodeURIComponent(
      query
    )} `
  );
  const data = await response.json();
  return data.results;
};
