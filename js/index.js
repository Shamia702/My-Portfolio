const hamburger = document.getElementById("hamburger");
const navlinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () =>{
    navlinks.classList.toggle("active");
});


const projects = [
{
    title: "RainyDays",
    description: "A responsive e-commerce site for jackets, built with HTML, CSS, and JavaScript.",
    img: "images/rainydays.jpg",
    github: "https://github.com/Shamia702/Javascript-CA",
    liveDemo: "https://shamia702.github.io/Javascript-CA/"
},

{
    title: "Community Science Museum",
    description: "Educational website for a children's science museum. Fully responsive layout.",
    img: "images/community-museum.jpg",
    github: "https://github.com/Shamia702/semester-project-1",
    liveDemo: "https://shamia702.github.io/semester-project-1/"
},

{
    title: "Green Gourmet",
    description: "Healthy food blog with CRUD functionality. Built with vanilla JS.",
    img: "images/green-gourmet.jpg",
    github: "https://github.com/Shamia702/FED1-PE1-Shamia702",
    liveDemo: "https://green-gourmet.netlify.app/"
}
];

const container = document.getElementById("projects-container");

projects.forEach(project => {
const card = document.createElement("div");
card.classList.add("project-card");

card.innerHTML = `
<img src="${project.img}" alt= "${project.title} screenshot">
 <h3>${project.title}</h3>
  <p>${project.description}</p>
    <div class="project-links">
      <a href="${project.github}" target="_blank">GitHub</a>
      <a href="${project.liveDemo}" target="_blank">Live Demo</a>
    </div>
`;
container.appendChild(card);

})