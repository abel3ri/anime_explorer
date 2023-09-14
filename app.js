// Query Selectors
const searchInput = document.querySelector(".search-input");
// import
// *********************

import { displayError, clearAnimeContainer, getAnimeData } from "./utils/utils";

import { toggleEventListeners } from "./utils/eventListeners";

const getAnimeName = function () {
  if (searchInput.value == null || searchInput.value == "") {
    return false;
  }
  //   console.log(searchInput.value);
  clearAnimeContainer();
  return searchInput.value;
};

export function btnEventListener() {
  // Generic function that handle calling of anime Data for click event and keyboard event
  const animeName = getAnimeName();
  if (!animeName) {
    displayError("Please enter a valid name");
    return;
  }
  getAnimeData(animeName);
}

// ! Event listeners
toggleEventListeners();

// Default

getAnimeData("Naruto");
