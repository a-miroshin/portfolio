// Data array for projects
const projects = [
  {
    title: "Project 1",
    image: "assets/images/projects/project-01.jpg",
    link: "projects/project-01.html",
    date: "2023-03",
  },
  {
    title: "Project 2",
    image: "assets/images/projects/project-02.jpg",
    link: "projects/project-02.html",
    date: "2019-09",
  },
  {
    title: "Project 3",
    image: "assets/images/projects/project-03.jpg",
    link: "projects/project-03.html",
    date: "2018-05",
  },
  {
    title: "Project 4",
    image: "assets/images/projects/project-04.png",
    link: "projects/project-04.html",
    date: "2020-06",
  },
  {
    title: "Project 5",
    image: "assets/images/projects/project-05.jpg",
    link: "projects/project-05.html",
    date: "2021-02",
  },
  {
    title: "Project 6",
    image: "assets/images/projects/project-06.png",
    link: "projects/project-06.html",
    date: "2024-07",
  },
  {
    title: "Project 7",
    image: "assets/images/projects/project-07.jpg",
    link: "projects/project-07.html",
    date: "2018-10",
  },
  {
    title: "Project 8",
    image: "assets/images/projects/project-08.png",
    link: "projects/project-08.html",
    date: "2023-01",
  },
  {
    title: "Project 9",
    image: "assets/images/projects/project-09.png",
    link: "projects/project-09.html",
    date: "2024-10",
  },
  {
    title: "Project 10",
    image: "assets/images/projects/project-10.png",
    link: "projects/project-10.html",
    date: "2023-11",
  },
  {
    title: "Project 11",
    image: "assets/images/projects/project-11.png",
    link: "projects/project-11.html",
    date: "2023-11",
  },
  // Add more projects as needed
];

// Sort projects by date (newest first)
projects.sort((a, b) => new Date(b.date) - new Date(a.date));

// Generate gallery items dynamically
const gallery = document.getElementById("gallery");
projects.forEach((project) => {
  const item = document.createElement("a");
  item.className = "card";
  item.href = project.link;
  item.innerHTML = `
            <div class="image-container">
              <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="title">${project.title}</div>
            <div class="year">${new Date(project.date).getFullYear()}</div>
          `;
  gallery.appendChild(item);
});

// "${new Date(project.date).getFullYear()}" gets a year infrormation from project's date
