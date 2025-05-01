import wallet from "../img/projects/wallet-webservice.jpg";
import greenHarvest from "../img/projects/green-harvest-online-store.jpg";
import englishExcellence from "../img/projects/english-excellence-webservice.jpg";
import powerPulse from "../img/projects/power-pulse-webservice.jpg";
import mimino from "../img/projects/mimino-website.jpg";
import vyshyvankaVibes from "../img/projects/vyshyvanka-vibes-landing-page.jpg";
import chegoJewelry from "../img/projects/chego-jewelry-website.jpg";
import energyFlow from "../img/projects/energy-flow-webservice.jpg";
import fruitbox from "../img/projects/fruitbox-online-store.jpg";
import starlightStudio from "../img/projects/starlight-studio-landing-page.jpg";
import arrowBtn from "../img/projects/arrow-icon.svg#arrow-icon";

const projectsData = [
  {
    imgSrc: wallet,
    alt: "Wallet Webservice",
    technologies: "React, JavaScript, Node JS, Git",
    title: "WALLET WEBSERVICE",
    link: "https://www.youtube.com"
  },
  {
    imgSrc: greenHarvest,
    alt: "Green Harvest Webservice",
    technologies: "React, JavaScript, Node JS, Git",
    title: "GREEN HARVEST WEBSERVICE",
    link: "https://www.youtube.com"
  },
  {
    imgSrc: englishExcellence,
    alt: "English Excellence Website",
    technologies: "React, JavaScript, Node JS, Git",
    title: "ENGLISH EXCELLENCE WEBSITE",
    link: "https://www.youtube.com"
  },
  {
    imgSrc: powerPulse,
    alt: "Power Pulse Webservice",
    technologies: "React, JavaScript, Express, MongoDB",
    title: "POWER PULSE WEBSERVICE",
    link: "https://www.youtube.com"
  },
  {
    imgSrc: mimino,
    alt: "Mimino Website",
    technologies: "Vue, JavaScript, Firebase",
    title: "MIMINO WEBSITE",
    link: "https://www.youtube.com"
  },
  {
    imgSrc: vyshyvankaVibes,
    alt: "Vyshyvanka Vibes Landing Page",
    technologies: "Angular, TypeScript, Node JS",
    title: "VYSHYVANKA VIBES LANDING PAGE",
    link: "https://www.youtube.com"
  },
  {
    imgSrc: chegoJewelry,
    alt: "Chego Jewelry Website",
    technologies: "Angular, TypeScript, Node JS",
    title: "CHEGO JEWELRY WEBSITE",
    link: "https://www.youtube.com"
  },
  {
    imgSrc: energyFlow,
    alt: "Energy Flow Webservice",
    technologies: "Angular, TypeScript, Node JS",
    title: "ENERGY FLOW WEBSERVICE",
    link: "https://www.youtube.com"
  },
  {
    imgSrc: fruitbox,
    alt: "Fruitbox Online Store",
    technologies: "Angular, TypeScript, Node JS",
    title: "FRUITBOX ONLINE STORE",
    link: "https://www.youtube.com"
  },
  {
    imgSrc: starlightStudio,
    alt: "Starlight Studio Landing Page",
    technologies: "Angular, TypeScript, Node JS",
    title: "STARLIGHT STUDIO LANDING PAGE",
    link: "https://www.youtube.com"
  }
];

  const projectsList = document.querySelector(".projects-list");
  const loadMoreBtn = document.querySelector(".project-load-more-btn");
  const INITIAL_COUNT = 3;
  let currentIndex = INITIAL_COUNT;
  let isExpanded = false;

  function createProjectCard(project) {
    const li = document.createElement("li");
    li.className = "project-card";

    li.innerHTML = `
      <img class="project-img" src="${project.imgSrc}" alt="${project.alt}" />
      <div class="project-technologies">
        ${project.technologies}
        <div class="project-title">
          ${project.title}
          <button class="visit-button">
            <p class="project-button-text">VISIT</p>
            <svg class="projects-arrow-icon" width="18" height="18">
              <use href="${arrowBtn}#arrow-icon"></use>
            </svg>
          </button>
        </div>
      </div>
    `;
    const visitButton = li.querySelector(".visit-button");
    visitButton.addEventListener("click", () => {
        window.open(project.link, "_blank", "noopener,noreferrer");
    });
      
    return li;
}
  


  function loadInitialProjects() {
    const initialProjects = projectsData.slice(0, INITIAL_COUNT);
    initialProjects.forEach((project) => {
      const card = createProjectCard(project);
      projectsList.appendChild(card);
    });
  }

  function loadMoreProjects() {
  const nextProjects = projectsData.slice(currentIndex, currentIndex + 3);
  nextProjects.forEach((project) => {
    const card = createProjectCard(project);
    projectsList.appendChild(card);
  });

  currentIndex += 3;

  if (currentIndex >= projectsData.length) {
    loadMoreBtn.style.display = "none";
  }
}

  document.addEventListener("DOMContentLoaded", loadInitialProjects);
  loadMoreBtn.addEventListener("click", loadMoreProjects);
