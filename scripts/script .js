// Menu burger pour mobile
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
burger.addEventListener("click", () => { nav.classList.toggle("nav-active"); });

// Mode sombre/clair avec switch
const themeToggle = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeToggle.checked = true;
}

themeToggle.addEventListener("change", () => {
  if (themeToggle.checked) {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
});

// Animation des barres de compétences
const skills = document.querySelectorAll(".progress-bar span");
function showSkills() {
  skills.forEach(skill => {
    const value = skill.getAttribute("data-width");
    skill.style.width = value;
  });
}
const skillsSection = document.getElementById("skills");
let skillsShown = false;
window.addEventListener("scroll", () => {
  const sectionPos = skillsSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.2;
  if (sectionPos < screenPos && !skillsShown) {
    showSkills();
    skillsShown = true;
  }
});
