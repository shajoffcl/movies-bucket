export default async function getDetail(id) {
  const api = "https://www.omdbapi.com/?apikey=cc2c6295";
  let response = await fetch(`${api}&i=${id}`);
  let data = await response.json();
  return data;
}
