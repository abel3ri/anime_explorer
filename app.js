// Query Selectors

const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");
const errorContainer = document.querySelector(".error");
const errorCLoseBtn = document.querySelector(".close-btn");

const filterBtn = document.querySelector(".filter-btn");
const selectContainer = document.querySelector(".select-container");
// *********************

import {
  displayError,
  clearAnimeContainer,
  displayAnime,
  getAnimeData,
} from "./utils/utils.js";

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

filterBtn.addEventListener("click", () => {
  selectContainer.classList.toggle("hidden");
});

selectContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("option")) {
    displayAnime(e.target.getAttribute("data-value"));
    selectContainer.classList.toggle("hidden");
  }
});

// Default

getAnimeData("Naruto");
