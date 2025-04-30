const projectsData = [
    {
      imgSrc: "/img/projects/wallet-webservice.jpg",
      alt: "Wallet Webservice",
      technologies: "React, JavaScript, Node JS, Git",
      title: "WALLET WEBSERVICE",
      link: "https://www.youtube.com"
    },
    {
      imgSrc: "/img/projects/green-harvest-online-store.jpg",
      alt: "Green Harvest Webservice",
      technologies: "React, JavaScript, Node JS, Git",
      title: "GREEN HARVEST WEBSERVICE",
      link: "https://www.youtube.com"
    },
    {
      imgSrc: "/img/projects/english-excellence-webservice.jpg",
      alt: "English Excellence Website",
      technologies: "React, JavaScript, Node JS, Git",
      title: "ENGLISH EXCELLENCE WEBSITE",
      link: "https://www.youtube.com"
    },
    {
      imgSrc: "/img/projects/power-pulse-webservice.jpg",
      alt: "power pulse webservice",
      technologies: "React, JavaScript, Express, MongoDB",
      title: "power pulse webservice",
      link: "https://www.youtube.com"
    },
    {
      imgSrc: "/img/projects/mimino-website.jpg",
      alt: "mimino website",
      technologies: "Vue, JavaScript, Firebase",
      title: "mimino website",
      link: "https://www.youtube.com"
    },
    {
      imgSrc: "/img/projects/vyshyvanka-vibes-landing-page.jpg",
      alt: "vyshyvanka vibes Landing Page",
      technologies: "Angular, TypeScript, Node JS",
      title: "vyshyvanka vibes Landing Page",
      link: "https://www.youtube.com"
    },
    {
      imgSrc: "/img/projects/chego-jewelry-website.jpg",
      alt: "chego jewelry website",
      technologies: "Angular, TypeScript, Node JS",
      title: "chego jewelry website",
      link: "https://www.youtube.com"
    },
    {
      imgSrc: "/img/projects/energy-flow-webservice.jpg",
      alt: "energy flow webservice",
      technologies: "Angular, TypeScript, Node JS",
      title: "energy flow webservice",
      link: "https://www.youtube.com"
    },
    {
      imgSrc: "/img/projects/fruitbox-online-store.jpg",
      alt: "fruitbox online store",
      technologies: "Angular, TypeScript, Node JS",
      title: "fruitbox online store",
      link: "https://www.youtube.com"
    },
    {
      imgSrc: "/img/projects/starlight-studio-landing-page.jpg",
      alt: "starlight studio landing page",
      technologies: "Angular, TypeScript, Node JS",
      title: "starlight studio landing page",
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
            <svg class="projects-arrow-icon" width="24" height="24">
              <use href="/img/projects/arrow-icon.svg#arrow-icon"></use>
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
