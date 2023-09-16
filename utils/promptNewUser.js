const promptContainer = document.querySelector(".prompt-container");
const allContent = document.querySelectorAll(".hide");
const promptCloseBtn = document.querySelector(".prompt-close-btn");

const isPrompted = localStorage.getItem("prompted");

if (isPrompted) {
  promptContainer.style.display = "none";
} else {
  document.body.style.overflowY = "hidden";
  allContent.forEach((content) => {
    content.style.filter = "blur(5px)";
  });
  promptCloseBtn.addEventListener("click", () => {
    promptContainer.style.display = "none";
    localStorage.setItem("prompted", true);
    allContent.forEach((content) => {
      content.style.filter = "none";
    });
    document.body.style.overflowY = "scroll";
  });
}
