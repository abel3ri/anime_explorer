import "../dist/styles/details.css";
import axios from "axios";

// Parse the anime id form the query string
const animeId = parseInt(location.href.split("=")[1]);
const animeDataUrl = `https://api.jikan.moe/v4/anime/${animeId}`;
const animeImageUrl = `https://api.jikan.moe/v4/anime/${animeId}/pictures`;

async function fetchAnimeData() {
  try {
    const res = await axios.get(animeDataUrl);
    return res.data.data;
  } catch (error) {
    console.log(error.message);
  }
}

async function fetchAnimeImage() {
  try {
    const res = await axios.get(animeImageUrl);
    return res.data.data[res.data.data.length - 1].webp.large_image_url;
  } catch (error) {
    console.log(error.message);
  }
}

async function embedHtml() {
  try {
    const animeData = await fetchAnimeData();
    const animeImageUrl = await fetchAnimeImage();
    let genres = [];
    animeData.genres.forEach((genre) => {
      genres.push(genre.name);
    });
    if (animeData.demographics) {
      animeData.demographics.forEach((d) => {
        genres.push(d.name);
      });
    }
    let animeStudios = [];
    animeData.studios.forEach((studio) => {
      animeStudios.push(studio.name);
    });
    // Chnage the page's title with the anime name
    document.title = animeData.title;

    const animeTitle =
      animeData.title.length > 42
        ? animeData.title.split("").splice(0, 42).join("") + "..."
        : animeData.title;

    // console.log(animeTitle);

    // const animeStudio = animeData.studios
    const html = `<header class="header"></header>
    <main class="main-content">
      <div class="content">
        <h1 class="anime-title">${animeTitle}</h1>
        <div class="anime-details-container">
          <h3 class="anime-rating">${animeData.rating.split(" ")[0]}</h3>
          <h3 class="anime-type">${animeData.type}</h3>
          <h3 class="anime-score">${animeData.score}</h3>
          <h3 class="anime-duration">${animeData.duration}</h3>
          <h3 class="airing-status">${
            animeData.airing == false ? "Finished" : "Airing"
          }</h3>
        </div>
      </div>
    </main>
    <hr class="first-hr" />
    <section class="synopsis-container">
      <p class="synopsis">
        ${animeData.synopsis}
      </p>
    </section>
    <section class="details-container">
      <div class="details-grid">
        <div>
          <h3>${animeData.title}</h3>
        </div>
        <hr />
        <div>
          <p>Type</p>
          <p>${animeData.type}</p>
        </div>
        <hr />
        <div class="genres-container">
          <p>Genres</p>
          <p class=${
            genres.reduce((acc, cur) => {
              return (acc += cur.length);
            }, 0) >= 30
              ? "genres"
              : ""
          }>${genres.join(", ")}</p>
        </div>
        <hr />
        <div>
          <p>Score</p>
          <p>${animeData.score}</p>
        </div>
        <hr />
        <div>
          <p>Rating</p>
          <p>${animeData.rating}</p>
        </div>
        <hr />
        <div>
          <p>Airing Status</p>
          <p>${animeData.airing == false ? "Finished" : "On going"}</p>
        </div>
        <hr />
        <div>
          <p>Studio</p>
          <p>${animeStudios.join(", ")}</p>
        </div>
      </div>
    </section>
    `;

    document.body.insertAdjacentHTML("beforeend", html);

    // Check if the anime has a trailer, and only then embed the YT video at the end of the body

    if (animeData.trailer.url) {
      document.body.insertAdjacentHTML(
        "beforeend",
        `<section class="trailer">
      <a href="${animeData.trailer.url}" class="trailer-btn" target="_blank"
        ><img src="../assets/yt-icon.svg" alt="YT-logo" class="logo" />
        <p>Official trailer</p>
      </a>
    </section>
    <section class="iframe-container">
    
    <iframe align="center" src="${animeData.trailer.embed_url}" frameborder="0"></iframe>
    </section>`
      );
    }
    document.querySelector(
      ".header"
    ).style.backgroundImage = `url(${animeImageUrl})`;
    // console.log(animeData);
  } catch (error) {
    console.log(error.message);
  }
}
embedHtml();
