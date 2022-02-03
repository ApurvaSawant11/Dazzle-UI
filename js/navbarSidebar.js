const nav = document.querySelector("nav");
const logoDiv = document.createElement("div");
logoDiv.className="logo-div"

const logo = document.createElement("img");
logo.src = "/images/logo.svg";
logo.className="logo";

const dazzle = document.createElement("div");
dazzle.className="dazzle"
dazzle.innerHTML="DAZZLE"

const ui = document.createElement("div");
ui.className="ui"
ui.innerHTML="UI"

logoDiv.appendChild(logo);
logoDiv.appendChild(dazzle);
logoDiv.appendChild(ui);

const navDiv1 = document.createElement("div")
navDiv1.className="nav-section"
navDiv1.appendChild(logoDiv);


const navDiv2 = document.createElement("div")
navDiv2.className="nav-section"

nav.appendChild(navDiv1);
nav.appendChild(navDiv2);

const anchors = [["Home","/index.html"], ["Documentation","/pages/alert.html"]]

anchors.forEach(item => createAnchorElements(item))

function createAnchorElements(item) {
    const anchor = document.createElement("a");
    anchor.className = "anchor";
    anchor.href = item[1]

    anchor.innerHTML=item[0];
    
    navDiv1.appendChild(anchor)
}



const socials = ["fab fa-github", "fab fa-twitter", "fas fa-globe", "fas fa-bars"]

socials.forEach(item => createIconElements(item))

function createIconElements(item) {
    const listItem = document.createElement("i");

    item === "fas fa-bars" ? listItem.className = item + " my-hamburger"  :listItem.className = item;
    
    navDiv2.appendChild(listItem)
}

// ---------------------------------- Sidebar js ---------------------------------------
const sidebar = document.querySelector("sidebar");
const selectedChild = location.pathname.split("/").pop().split(".")[0];

const introduction = ["Colors", "Typography"]
const elements = ["Button","Image","Input","List"]
const views = ["Alert","Avatar","Badge","Card","Drawer"]


const group1=createSbGroup()
createNavElement(group1,"Introduction", false, true);
introduction.forEach((item) => {
  const sbGroup=createNavElement(group1,item, false, false);
  sidebar.appendChild(sbGroup);
});

const group2=createSbGroup()
createNavElement(group2,"Elements", false, true);
elements.forEach((item) => {
  const sbGroup=createNavElement(group2,item, false, false);
  sidebar.appendChild(sbGroup);
});

const group3=createSbGroup()
createNavElement(group3,"Views", false, true);
views.forEach((item) => {
  const sbGroup=createNavElement(group3,item, false, false);
  sidebar.appendChild(sbGroup);
});


function createSbGroup(){
  const group = document.createElement('div');
  group.className="sb-group"
  return group
}


function createNavElement(sbGroup,item, component, title) {
  const child = document.createElement("div");
  title
    ? (child.className = "sb-header")
    : (child.className = "sb-item");
  item.toLowerCase() === selectedChild
    ? child.classList.add("active")
    : addListener(item, child, component);
  child.innerHTML = item;

  sbGroup.appendChild(child);
  return sbGroup
}

function addListener(item, child, component) {
  child.addEventListener("click", () => {
    const lowerCasedItem = item.toLowerCase();
    const path = component
      ? `/pages/${lowerCasedItem}.html`
      : `/pages/${lowerCasedItem}.html`;
    location = path;
    console.log(path)
  });
}