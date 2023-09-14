// prettier-ignore
export class Anime {
  constructor(
    id,
    imgSrc,
    title,
    releaseDate,
    rating,
    episodes,
    genres,
    episodeDuration,
    synopsis
  ) {
    this.id = id,
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
    const animeContainer = document.querySelector(".container");
    const html = `
      <div class="anime">
        <div class="view-more-container hidden">
        <a href="/dist/pages/details.html?id=${this.id}">View More</a>
        </div>
        <img src="${this.imgSrc}" alt="Anime image" class="anime-img" />
        <div class="title-container"><p>Title</p><p>${this.title}</p></div>
        <div class="released-container"><p>Rleased</p><p>${this.formatDate()}</p></div>
        <div class="rating-container"><p>Rating</p><p>${this.rating}</p></div>
      </div>`;

    animeContainer.insertAdjacentHTML("beforeend", html);
  }
}
