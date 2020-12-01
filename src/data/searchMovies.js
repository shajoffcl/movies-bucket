export default async function getResult(movieName) {
  const api = "https://www.omdbapi.com/?apikey=cc2c6295";
  let response = await fetch(`${api}&s=${movieName}`);
  let data = await response.json();
  return data;
}
