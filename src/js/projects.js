const projectsData = [
    {
      imgSrc: "/img/projects/wallet-webservice.jpg",
      alt: "Wallet Webservice",
      technologies: "React, JavaScript, Node JS, Git",
      title: "WALLET WEBSERVICE"
    },
    {
      imgSrc: "/img/projects/green-harvest-online-store.jpg",
      alt: "Green Harvest Webservice",
      technologies: "React, JavaScript, Node JS, Git",
      title: "GREEN HARVEST WEBSERVICE"
    },
    {
      imgSrc: "/img/projects/english-excellence-webservice.jpg",
      alt: "English Excellence Website",
      technologies: "React, JavaScript, Node JS, Git",
      title: "ENGLISH EXCELLENCE WEBSITE"
    },
    {
      imgSrc: "/img/projects/power-pulse-webservice.jpg",
      alt: "power pulse webservice",
      technologies: "React, JavaScript, Express, MongoDB",
      title: "power pulse webservice"
    },
    {
      imgSrc: "/img/projects/mimino-website.jpg",
      alt: "mimino website",
      technologies: "Vue, JavaScript, Firebase",
      title: "mimino website"
    },
    {
      imgSrc: "/img/projects/vyshyvanka-vibes-landing-page.jpg",
      alt: "vyshyvanka vibes Landing Page",
      technologies: "Angular, TypeScript, Node JS",
      title: "vyshyvanka vibes Landing Page"
    },
    {
      imgSrc: "/img/projects/chego-jewelry-website.jpg",
      alt: "chego jewelry website",
      technologies: "Angular, TypeScript, Node JS",
      title: "chego jewelry website"
    },
    {
      imgSrc: "/img/projects/energy-flow-webservice.jpg",
      alt: "energy flow webservice",
      technologies: "Angular, TypeScript, Node JS",
      title: "energy flow webservice"
    },
    {
      imgSrc: "/img/projects/fruitbox-online-store.jpg",
      alt: "fruitbox online store",
      technologies: "Angular, TypeScript, Node JS",
      title: "fruitbox online store"
    },
    {
      imgSrc: "/img/projects/starlight-studio-landing-page.jpg",
      alt: "starlight studio landing page",
      technologies: "Angular, TypeScript, Node JS",
      title: "starlight studio landing page"
    }
  ];

  const projectsList = document.querySelector(".projects-list");
  const loadMoreBtn = document.querySelector(".project-load-more-btn");
  const INITIAL_COUNT = 3;
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
    return li;
  }

  function loadInitialProjects() {
    const initialProjects = projectsData.slice(0, INITIAL_COUNT);
    initialProjects.forEach((project) => {
      const card = createProjectCard(project);
      projectsList.appendChild(card);
    });
  }

  function loadRemainingProjects() {
    if (isExpanded) return;

    const remainingProjects = projectsData.slice(INITIAL_COUNT);
    remainingProjects.forEach((project) => {
      const card = createProjectCard(project);
      projectsList.appendChild(card);
    });

    loadMoreBtn.style.display = "none";
    isExpanded = true;
  }

  document.addEventListener("DOMContentLoaded", loadInitialProjects);
  loadMoreBtn.addEventListener("click", loadRemainingProjects);