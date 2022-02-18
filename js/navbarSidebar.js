const nav = document.querySelector("nav");

const logoDiv = createDivElement("logo-div");

const logo = document.createElement("img");
logo.src = "/images/logo.svg";
logo.className = "logo";

const dazzle = createDivElement("dazzle");
dazzle.innerHTML = "DAZZLE"

const ui = createDivElement("ui");
ui.innerHTML = "UI"

logoDiv.appendChild(logo);
logoDiv.appendChild(dazzle);
logoDiv.appendChild(ui);

const navDiv1 = createDivElement("nav-section")
navDiv1.appendChild(logoDiv);


const navDiv2 = createDivElement("nav-section")

nav.appendChild(navDiv1);
nav.appendChild(navDiv2);

function createDivElement(classname) {
  const newElement = document.createElement("div")
  newElement.className = classname
  return newElement
}

const anchors = [
  ["Home", "/index.html"],
  ["Examples", "/pages/alert.html"]
]

anchors.forEach(item => createAnchorElements(item))

function createAnchorElements(item) {
  const anchor = document.createElement("a");
  anchor.className = "anchor";
  anchor.href = item[1]

  anchor.innerHTML = item[0];

  navDiv1.appendChild(anchor)
}



const socials = [
  ["fab fa-github", "https://github.com/ApurvaSawant11/Dazzle-UI-Components"],
  ["fab fa-twitter", "https://www.twitter.com/ApurvaSawant11"],
  ["fab fa-linkedin", "https://www.linkedin.com/in/apurvasawant11/"],
  ["fas fa-bars"]
]

socials.forEach(item => createIconElements(item))

function createIconElements(item) {
  const listItem = document.createElement("i");
  if (item[0] === "fas fa-bars") {
    listItem.className = item[0] + " my-hamburger"
    navDiv2.appendChild(listItem)
  } else {

    listItem.className = item[0];
    link = document.createElement("a");
    link.href = item[1];
    link.target = "_blank";
    link.appendChild(listItem);
    navDiv2.appendChild(link)
  }

}

// ---------------------------------- Sidebar js ---------------------------------------
const sidebar = document.querySelector("sidebar");
const selectedChild = location.pathname.split("/").pop().split(".")[0];

const introduction = ["Getting Started", "Colors", "Typography"]
const elements = ["Button", "Image", "Input", "List"]
const views = ["Alert", "Avatar", "Badge", "Card"]
const modules = ["Grid", "Modal", "Navigation", "Rating", "Slider", "Toast"]

const closebtn = document.createElement("i")
closebtn.className = "fas fa-times close-sidebar";
sidebar.append(closebtn);



const group1 = createSbGroup("Introduction")
introduction.forEach((item) => {
  const sbGroup = createNavElement(group1, item);
  sidebar.appendChild(sbGroup);
});

const group2 = createSbGroup("Elements")
elements.forEach((item) => {
  const sbGroup = createNavElement(group2, item);
  sidebar.appendChild(sbGroup);
});

const group3 = createSbGroup("Views")
views.forEach((item) => {
  const sbGroup = createNavElement(group3, item);
  sidebar.appendChild(sbGroup);
});

const group4 = createSbGroup("Modules")
modules.forEach((item) => {
  const sbGroup = createNavElement(group4, item);
  sidebar.appendChild(sbGroup);
});


function createSbGroup(headerName) {
  const group = createDivElement('sb-group');
  const header = createDivElement('sb-header');
  header.innerHTML = headerName;
  group.appendChild(header)
  return group
}


function createNavElement(sbGroup, item) {
  const child = createDivElement("sb-item");
  item.toLowerCase() === selectedChild ?
    child.classList.add("active") :
    addListener(item, child);
  child.innerHTML = item;

  sbGroup.appendChild(child);
  return sbGroup
}

function addListener(item, child) {
  child.addEventListener("click", () => {
    item = item.replace(/\s/g, '');
    const lowerCasedItem = item.toLowerCase();
    const path = `/pages/${lowerCasedItem}.html`;
    location = path;
  });
}