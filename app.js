// // prettier-ignore
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
    this.title = title;
    this.releaseDate = releaseDate;
    this.rating = rating;
    this.episodes = episodes;
    this.genres = genres;
    this.episodeDuration = episodeDuration;
    this.synopsis = synopsis;
  }
  formatDate() {
    return Intl.DateTimeFormat(navigator.language, {
      month: "short",
      year: "numeric",
    }).format(new Date(this.releaseDate));
  }

  renderAnime() {
    const animeContainer = document.querySelector(".container");
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

getAnimeData("Naruto");
