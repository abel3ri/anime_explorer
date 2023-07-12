const animeContainer = document.querySelector(".container");
const searchInput = document.querySelector(".search-input");
const serachBtn = document.querySelector(".search-btn");
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
  const res = await fetch(url);

  const { data: animeData } = await res.json();
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
}
// Clear anime container before loading another anime
const clearAnimeContainer = function () {
  animeContainer.innerHTML = "";
};
// call back for removing error container
const removeErrorContainer = function () {
  if (!errorContainer.classList.contains("visible")) return;
  errorContainer.classList.remove("visible");
};

// Call back function for getting anime name from input
const getAnimeName = function () {
  if (searchInput.value == null || searchInput.value == "") {
    errorContainer.classList.add("visible");
    setTimeout(removeErrorContainer, 3000);
    return;
  }
  console.log(searchInput.value);
  clearAnimeContainer();
  return searchInput.value;
};

// Event listeners
serachBtn.addEventListener("click", () => {
  getAnimeData(getAnimeName());
});

window.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    getAnimeData(getAnimeName());
  }
});

errorCLoseBtn.addEventListener("click", removeErrorContainer);

getAnimeData("Naruto");
