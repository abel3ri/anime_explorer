const animeContainer = document.querySelector(".container");
const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");
const errorContainer = document.querySelector(".error");
const errorCLoseBtn = document.querySelector(".close-btn");

// prettier-ignore
class Anime {
  constructor(
    imgSrc,
    title,
    releaseDate,
    rating,
    episodes,
    genres,
    episodeDuration,
    synopsis
  ) {
    this.imgSrc = imgSrc;
    // Replace the extra characters with ... if the anime title exceeds 26 characters
    this.title =
      title.length > 26
        ? title.slice(0, title.length / 2).padEnd(title.length / 2 + 3, "...")
        : title;
    this.releaseDate = releaseDate;
    this.rating = rating;
    this.episodes = episodes;
    this.genres = genres;
    this.episodeDuration = episodeDuration;
    this.synopsis = synopsis;
  }
  // Format the date to a standardized formatting
  formatDate() {
    return Intl.DateTimeFormat(navigator.language, {
      month: "short",
      year: "numeric",
    }).format(new Date(this.releaseDate));
  }

  renderAnime() {
    
    const html = `
    <div class="anime">
      <img src="${this.imgSrc}" alt="Anime image" class="anime-img" />
      <div class="title-container"><p>Title</p><p>${this.title}</p></div>
      <div class="released-container"><p>Rleased</p><p>${this.formatDate()}</p></div>
      <div class="rating-container"><p>Rating</p><p>${this.rating}</p></div>
    </div>`;

    animeContainer.insertAdjacentHTML("beforeend", html);
  }
}

async function getAnimeData(name) {
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
      anime.renderAnime();
    });
  } catch (err) {
    displayError(err.message);
  }
}
//! Clear anime container before loading another anime
const clearAnimeContainer = function () {
  animeContainer.innerHTML = "";
};

//! Call back function for getting anime name from input

function displayError(errorMessage) {
  errorContainer.firstChild.textContent = errorMessage;
  errorContainer.classList.add("visible");
}

const getAnimeName = function () {
  if (searchInput.value == null || searchInput.value == "") {
    return false;
  }
  //   console.log(searchInput.value);
  clearAnimeContainer();
  return searchInput.value;
};

function btnEventListener() {
  // Generic function that handle calling of anime Data for click event and keyboard event
  const animeName = getAnimeName();
  if (!animeName) {
    displayError("Please enter a valid name");
    return;
  }
  getAnimeData(animeName);
}

// ! Event listeners
searchBtn.addEventListener("click", () => {
  btnEventListener();
});

window.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    btnEventListener();
  }
});

errorCLoseBtn.addEventListener("click", () => {
  errorContainer.classList.remove("visible");
});

// Default

getAnimeData("Naruto");
