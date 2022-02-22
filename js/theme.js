const themeToggleBtn = document.querySelector(".theme-toggle-btn");
const body = document.querySelector("body");

const rootElement = document.querySelector(":root");

const darkThemeColors = () => {
    rootElement.style.setProperty("--theme-bg", "#141414");
    rootElement.style.setProperty("--theme-text-color", "#bbbbbb");
    rootElement.style.setProperty("--navbar-bg", "#000000")
    rootElement.style.setProperty("--primary","#1c96ff");
    rootElement.style.setProperty("--primary-hover","#133e64");
    rootElement.style.setProperty("--info-hover","#cbe2ff");
    rootElement.style.setProperty("--border-color","#646464");
    rootElement.style.setProperty("--shadow","#3c3c3c");
    rootElement.style.setProperty("--card-button-bg","#080808");
    rootElement.style.setProperty("--code-snippet", "#0c0c0c");
    rootElement.style.setProperty("--overlay", "rgba(56, 56, 56,0.60)")
};

const lightThemeColors = () => {
    rootElement.style.setProperty("--theme-bg", "#ffffff");
    rootElement.style.setProperty("--theme-text-color", "#313131");
    rootElement.style.setProperty("--navbar-bg","#ffffff")
    rootElement.style.setProperty("--primary","#19456b");
    rootElement.style.setProperty("--primary-hover","#133e64");
    rootElement.style.setProperty("--secondary","#16c79a");
    rootElement.style.setProperty("--secondary-hover","#0eb98f");
    rootElement.style.setProperty("--light-black","#313131");
    rootElement.style.setProperty("--dark-black","#000000");
    rootElement.style.setProperty("--white-color","#FFFFEA");
    rootElement.style.setProperty("--light-gray","#F0F0FB");
    rootElement.style.setProperty("--dark-gray","#6e6e6e");
    rootElement.style.setProperty("--success","#52e252");
    rootElement.style.setProperty("--info","#1863c5");
    rootElement.style.setProperty("--info-hover","#dfedff");
    rootElement.style.setProperty("--warning","#f7cc42");
    rootElement.style.setProperty("--danger","#fc2424");
    rootElement.style.setProperty("--border-color","#dddddd");
    rootElement.style.setProperty("--shadow","#acacac");
    rootElement.style.setProperty("--card-button-bg","#f0fffb");
    rootElement.style.setProperty("--code-snippet", "#f8f8f8")
};

const darkThemeToggleBtn = () => {
  themeToggleBtn.classList.remove("fa-moon");
  themeToggleBtn.classList.add("fa-sun");
};

const lightThemeToggleBtn = () => {
  themeToggleBtn.classList.add("fa-moon");
  themeToggleBtn.classList.remove("fa-sun");
};

window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme")) {
    darkThemeColors();
    darkThemeToggleBtn();
  } else {
    lightThemeColors();
    lightThemeToggleBtn();
  }
});

themeToggleBtn.addEventListener("click", () => {
  if (themeToggleBtn.classList.contains("fa-moon")) {
    darkThemeToggleBtn();
    darkThemeColors();
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.removeItem("theme");
    lightThemeToggleBtn();
    lightThemeColors();
  }
});