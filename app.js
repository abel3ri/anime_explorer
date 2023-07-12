async function getAnimeData(name) {
  const url = `https://api.jikan.moe/v4/anime?q=${name}&sfw`;
  const res = await fetch(url);

  const { data: animeData } = await res.json();
  animeData.forEach((anime) => {
    renderAnime(anime);
  });
}

function formatDate(date) {
  return Intl.DateTimeFormat(navigator.language, {
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

function renderAnime(animeData) {
  const animeContainer = document.querySelector(".container");
  const html = `
  <div class="anime">
    <img src="${
      animeData.images.webp.image_url
    }" alt="Anime image" class="anime-img" />
    <div class="title-container"><p>Title</p><p>${animeData.title}</p></div>
    <div class="released-container"><p>Rleased</p><p>${formatDate(
      animeData.aired.from
    )}</p></div>
    <div class="rating-container"><p>Rating</p><p>${animeData.score}</p></div>
  </div>`;

  animeContainer.insertAdjacentHTML("beforeend", html);
}

getAnimeData("Naruto");
