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

// Assignment of Content
eventTabLink.textContent = "Event";
matchReportLink.textContent = "Match Report";
partnersLink.textContent = "Partners";
aboutLink.textContent = "About";

// Assigning Attributes
eventTabLink.setAttribute("data-link", "events-tab");
eventTabLink.setAttribute("class", "nav-item");
matchReportLink.setAttribute("data-link", "match-report");
matchReportLink.setAttribute("class", "nav-item");
partnersLink.setAttribute("data-link", "partners");
partnersLink.setAttribute("class", "nav-item");
aboutLink.setAttribute("data-link", "footer");
aboutLink.setAttribute("class", "nav-item");

// Scroll into view section
const links = document.querySelectorAll(".nav-item");
const navLinkBlock = document.querySelector("#nav-links");

links.forEach((item) => {
  item.addEventListener("click", () => {
    // Remove visted state from each item of link
    for (let i = 0; i < links.length; i++) {
      if (links[i].classList.contains("visited")) {
        links[i].classList.remove("visited");
      }
    }
    const el = document.getElementById(item.getAttribute("data-link"));
    console.log(el);

    el.scrollIntoView({ behavior: "smooth", block: "center" });
    item.classList.add("visited");
    navLinkBlock.classList.toggle("show-menu");
  });
});

// Event and news section
const clubNews = [
  {
    title: "Arsenal wins the Champions league in Rome",
    description:
      "Arsenal win the Champions League for the very first time in their history. They conquered the defending champions milan.This ahas been a trophy that is lacking the the club's cabinet",
    img: "Assets/champions.webp",
  },
  {
    title: "Arsenal Fans in Kano met Club Officials",
    description:
      "Arsenal engaged their fans in Kano.The ceremony was graced by eminent personalities in the country.",
    img: "Assets/fans.png",
  },
  {
    title: "New Arsenal jerseys",
    description:
      "In partnership with adidas, Arsenal have unveiled their home kit for the 2021/22 season which challenges the orthodox surrounding the club's traditional shirt style.",
    img: "Assets/merch1.jpg",
  },
  {
    title: "Wenger back at Arsenal",
    description:
      "Since his departure at the end of the 2017/18 season, the legendary Frenchman has not once returned to the Emirates Stadium - not even to watch a game of football - instead taking up a role as FIFA's chief of global football development in November 2019.",
    img: "Assets/wenger.jfif",
  },
  {
    title: "Arsenal's Robert Pires in Lagos",
    description:
      "On September 22 Robert attended the final day's play, and closing ceremony, of Airtel’s Africa Championship - the final tournament of Airtel’s annual grassroots talent search, Rising Stars.",
    img: "Assets/pires.jpg",
  },
  {
    title: "Star captures Arsenal heart in record breaking partnership",
    description:
      "Star has announced a new partnership with Arsenal Football Club at an event at the Eko Hotel & Suites, Lagos.The partnership agreement, first of its kind in a beer category in Nigeria  ",
    img: "Assets/star.jpg",
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

// Hamburger Menu

const toggleBtn = document.querySelector(".hamburger");

toggleBtn.addEventListener("click", () => {
  navLinkBlock.classList.toggle("show-menu");
});
