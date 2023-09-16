// import "./dist/styles/style.css";
import "./dist/styles/footer.css";

import * as promptNewUser from "./utils/promptNewUser";

import { displayError, clearAnimeContainer, getAnimeData } from "./utils/utils";

import { toggleEventListeners } from "./utils/eventListeners";

function spinSpinner() {
  const spinner = document.querySelector(".spinner");
  const hideClasses = document.querySelectorAll(".hide");

  spinner.style.display = "block";

  window.addEventListener("load", () => {
    spinner.style.display = "block";
    setTimeout(() => {
      hideClasses.forEach((c) => {
        c.style.visibility = "visible";
      });
      spinner.style.display = "none";
    }, 200);
  });
}

spinSpinner();

// Query Selectors
const searchInput = document.querySelector(".search-input");
// import
// *********************

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

getAnimeData("Bleach");
