import "../styles/globals.css";
export const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDliY2I3OTg1MGIyMTdmZTBiNzkxMmVlN2Y4ODMxYSIsInN1YiI6IjYyMGI5YzQ5OGVlNDljMDA2NzJjZGIxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B1dl5ZcTUMdgMtukMjNudef5XFiVTdLzrxKYfpbMKuw";
export const api_key = "5d9bcb79850b217fe0b7912ee7f8831a";
export const image_url = "https://image.tmdb.org/t/p/original/";
export const base_url = `https://api.themoviedb.org/3`;
export const query_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=`;

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
