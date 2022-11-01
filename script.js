"use strict";
const projectFolders = document.querySelectorAll(".project-folders");
const projectFoldersContainer = document.querySelector(".project-allfolders");
const projectDetails = document.querySelectorAll(".project__details");
const closebtn = document.querySelectorAll(".close-btn");

projectFoldersContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".project-folders");
  console.log(clicked);
  if (!clicked) return;
  projectDetails.forEach((pd) => pd.classList.add("hidden"));
  document
    .querySelector(`.project-details--${clicked.dataset.name}`)
    .classList.remove("hidden");
});

closebtn.forEach((btn) =>
  btn.addEventListener("click", function () {
    projectDetails.forEach((pd) => pd.classList.add("hidden"));
  })
);
const nav = document.querySelector(".nav");
const sectionAbout = document.getElementById("about");
const initialCoords = sectionAbout.getBoundingClientRect();
console.log(initialCoords);
window.addEventListener("scroll", function () {
  console.log(this.window.scrollY);
  if (this.window.scrollY > initialCoords.top) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
});
