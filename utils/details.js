import axios from "axios";
const animeId = parseInt(location.href.split("=")[1]);
const animeUrl = `https://api.jikan.moe/v4/anime/${animeId}`;

async function FetchData() {
  try {
    const res = await axios.get(animeUrl);
  } catch (error) {
    console.log(error.message);
  }
}
FetchData();
