// Navigation Elements
const navContainer = document.querySelector("#nav-links ul");
const eventTab = document.createElement("li");
const eventTabLink = document.createElement("a");
const matchReport = document.createElement("li");
const matchReportLink = document.createElement("a");
const partners = document.createElement("li");
const partnersLink = document.createElement("a");
const about = document.createElement("li");
const aboutLink = document.createElement("a");

// Append Elements

navContainer.appendChild(eventTab);
navContainer.appendChild(matchReport);
navContainer.appendChild(partners);
navContainer.appendChild(about);

eventTab.appendChild(eventTabLink);
matchReport.appendChild(matchReportLink);
partners.appendChild(partnersLink);
about.appendChild(aboutLink);

// Assignment Content
eventTabLink.textContent = "Event";
matchReportLink.textContent = "Match Report";
partnersLink.textContent = "Partners";
aboutLink.textContent = "About";

// Assign Attributes
eventTabLink.setAttribute("href", "#");
eventTabLink.setAttribute("data-link", "event-tab");
eventTabLink.setAttribute("class", "nav-item");
matchReportLink.setAttribute("href", "#");
matchReportLink.setAttribute("data-link", "match-report");
matchReportLink.setAttribute("class", "nav-item");
partnersLink.setAttribute("href", "#");
partnersLink.setAttribute("data-link", "partners");
partnersLink.setAttribute("class", "nav-item");
aboutLink.setAttribute("href", "#");
aboutLink.setAttribute("data-link", "about");
aboutLink.setAttribute("class", "nav-item");

// Scroll into view section

// Event and news section
const clubNews = [
  {
    title: "Arsenal wins the Champions league in Rome",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui alias atque veritatis in voluptatum et!",
    img: "Assets/champions.webp",
  },
  {
    title: "Arsenal goes to Kano",
    description:
      "Lorem r adipisicing elit. Qui alias atque veritatis in voluptatum et!. Lorem r adipisicing elit. Qui alias atque veritatis in volupt",
    img: "Assets/fans.png",
  },
  {
    title: "Arsenal goes to Calabar",
    description:
      "Lorem Qui alias atque veritatis in voluptatum et! Lorem r adipisicing elit. Qui alias atque veritatis in volupt Lorem r adipisicing elit. Qui alias atque veritatis in volupt",
    img: "Assets/fans.jpg",
  },
];

//    Get Elements

let currentItem = 0;

const eventTitle = document.querySelector(".event-title");
const eventDescription = document.querySelector(".description");
const eventImage = document.querySelector(".event-img");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

//Show previous news

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = clubNews.length - 1;
  }

  changeContent(currentItem);
});

//Show next news

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > clubNews.length - 1) {
    currentItem = 0;
  }

  changeContent(currentItem);
});

//Automatic news display
randomNewsItem = Math.floor(Math.random() * clubNews.length);

setInterval(changeContent(randomNewsItem), 1000);

function changeContent(currentItem) {
  let item = clubNews[currentItem];
  eventTitle.textContent = item.title;
  eventDescription.innerHTML = item.description;
  eventImage.src = item.img;
}
