import { Anime } from "../controllers/Anime.js";
let animes = [];

/**
 * @param {Array} animes
 */

function sortAnime(animes, type = "default") {
  if (type == "default") {
    return animes;
  }
  if (type == "title") {
    return animes.sort((a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0));
  }
  if (type == "rating") {
    return animes.sort((a, b) => b.rating - a.rating);
  }
  if (type == "release") {
    return animes.sort(
      (a, b) => Date.parse(a.releaseDate) - Date.parse(b.releaseDate)
    );
  }
}
function displayAnime(type) {
  clearAnimeContainer();
  sortAnime(animes, type).forEach((anime) => {
    anime.renderAnime();
  });
}

function displayError(errorMessage) {
  const errorContainer = document.querySelector(".error");
  errorContainer.firstChild.textContent = errorMessage;
  errorContainer.classList.add("visible");
}

function clearAnimeContainer() {
  const animeContainer = document.querySelector(".container");
  animeContainer.innerHTML = "";
  // clear animes array
}

async function getAnimeData(name) {
  const spinner = document.querySelector(".spinner");
  const searchInput = document.querySelector(".search-input");
  // Clear the old animes array before fetching data
  animes = [];
  spinner.style.display = "block";
  const url = `https://api.jikan.moe/v4/anime?q=${name}&sfw`;
  try {
    const res = await fetch(url);

    const { data: animeData } = await res.json();
    searchInput.value = "";
    //   console.log(animeData[0]);
    animeData.forEach((a) => {
      const anime = new Anime(
        a.images.webp.image_url,
        a.title,
        a.aired.from,
        a.score,
        a.episodes,
        a.genres,
        a.duration,
        a.synopsis
      );
      animes.push(anime);
    });
    displayAnime("default");
    // clearAnimeContainer();

    spinner.style.display = "none";
  } catch (err) {
    displayError(err.message);
  }
}

export {
  sortAnime,
  displayError,
  clearAnimeContainer,
  displayAnime,
  getAnimeData,
};
