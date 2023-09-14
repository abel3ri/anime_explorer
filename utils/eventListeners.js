import { displayAnime } from "./utils";
import { btnEventListener } from "../app";

const container = document.querySelector(".container");
const searchBtn = document.querySelector(".search-btn");
const errorContainer = document.querySelector(".error");
const errorCLoseBtn = document.querySelector(".close-btn");

const filterBtn = document.querySelector(".filter-btn");
const selectContainer = document.querySelector(".select-container");

// ! Event listeners
export function toggleEventListeners() {
  container.addEventListener("mouseover", (e) => {
    const animeContainer = e.target.closest(".anime");
    if (animeContainer) {
      animeContainer.firstElementChild.classList.remove("hidden");
    }
  });
  container.addEventListener("mouseout", (e) => {
    const animeContainer = e.target.closest(".anime");
    if (animeContainer) {
      animeContainer.firstElementChild.classList.add("hidden");
    }
  });

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

  filterBtn.addEventListener("click", () => {
    selectContainer.classList.toggle("hidden");
  });

  selectContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("option")) {
      displayAnime(e.target.getAttribute("data-value"));
      selectContainer.classList.toggle("hidden");
    }
  });
}
