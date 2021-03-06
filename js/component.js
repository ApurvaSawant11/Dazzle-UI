// ||----------------------Modal JS------------------------

const basicModalBtn = document.querySelector(".basic-modal-demo");
const formModalBtn = document.querySelector(".form-modal-demo");
const basicModal = document.querySelector(".basic-modal");
const formModal = document.querySelector(".form-modal");
const basicModalCancel = document.querySelector(".basic-modal-cancel");
const formModalClose = document.querySelector(".form-modal-close");

const toggleShowClass = (element) => {
  element.classList.toggle("show");
};

if (basicModalBtn) {
  basicModalBtn.addEventListener("click", () => {
    toggleShowClass(basicModal);
  });
}

if (basicModalCancel) {
  basicModalCancel.addEventListener("click", () => {
    toggleShowClass(basicModal);
  });
}

if (formModalBtn) {
  formModalBtn.addEventListener("click", () => {
    toggleShowClass(formModal);
  });
}

if (formModalClose) {
  formModalClose.addEventListener("click", () => {
    toggleShowClass(formModal);
  });
}

// ||----------- Toast JS --------------

const simpleToastDemo = document.querySelector(".simple-toast-demo");
const simpleToast = document.querySelector(".simple-toast-container");
const simpleToastClose = document.querySelector(".simple-toast-close");

const iconToastDemo = document.querySelector(".icon-toast-demo");
const iconToast = document.querySelector(".icon-toast-container");
const iconToastClose = document.querySelector(".icon-toast-close");

if (simpleToastDemo && simpleToastClose && iconToastDemo && iconToastClose) {
  simpleToastDemo.addEventListener("click", () => {
    simpleToast.classList.add("show");
    setTimeout(() => simpleToast.classList.remove("show"), 3000);
  });

  simpleToastClose.addEventListener("click", () =>
    simpleToast.classList.remove("show")
  );

  iconToastDemo.addEventListener("click", () => {
    iconToast.classList.add("show");
    setTimeout(() => iconToast.classList.remove("show"), 3000);
  });

  iconToastClose.addEventListener("click", () =>
    iconToast.classList.remove("show")
  );
}

// ||-----------------------Navigation bar-----------------------------------

const navbarSearchIcon = document.querySelector(".navbar-search-icon");
const searchbarClose = document.querySelector(".searchbar-close-icon");
const navbarSearchbar = document.querySelector(".navbar-searchbar");

if (navbarSearchIcon && searchbarClose) {
  navbarSearchIcon.addEventListener("click", () => {
    navbarSearchbar.classList.toggle("show");
  });

  searchbarClose.addEventListener("click", () => {
    navbarSearchbar.classList.remove("show");
  });
}

const myHamburger = document.querySelector(".myhamburger");
const subNav = document.querySelector(".sub-navigation");

if (myHamburger && subNav) {
  myHamburger.addEventListener("click", () => {
    subNav.classList.toggle("nav-drawer");
  });
}

// ||-------------------------------Drawer--------------------------------------

const listItem = document.querySelectorAll(".list-item");

if (listItem) {
  listItem.forEach((item) => {
    item.addEventListener("click", () => {
      listItem.forEach((item2) => {
        item2.classList.remove("active");
      });
      item.classList.add("active");
    });
  });
}

// ||--------------------------------Price Range Slider------------------------------
const rangeInput = document.querySelectorAll(".range"),
  rangeInputField = document.querySelectorAll(".range-input-field"),
  range = document.querySelector(".slider .progress");
let priceGap = 1000;

if (rangeInput && rangeInputField) {
  rangeInputField.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minPrice = parseInt(rangeInputField[0].value);
      let maxPrice = parseInt(rangeInputField[1].value);

      if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
        if (e.target.className === "min-field") {
          rangeInput[0].value = minPrice;
          range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
        } else {
          rangeInput[1].value = maxPrice;
          range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
        }
      }
    });
  });
  rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);
      if (maxVal - minVal < priceGap) {
        if (e.target.className === "min-range") {
          rangeInput[0].value = maxVal - priceGap;
        } else {
          rangeInput[1].value = minVal + priceGap;
        }
      } else {
        rangeInputField[0].value = minVal;
        rangeInputField[1].value = maxVal;
        range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
        range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
      }
    });
  });
}

// ||--------------------------------Carousel---------------------------------------

let slidePosition = 1;
CarouselSlideShow(slidePosition);

function moveSlide(n) {
  CarouselSlideShow((slidePosition += n));
}

function currentSlide(n) {
  CarouselSlideShow((slidePosition = n));
}

function CarouselSlideShow(n) {
  const slides = document.querySelectorAll(".container");
  const circles = document.querySelectorAll(".dots");
  if (slides && circles) {
    if (n > slides.length) {
      slidePosition = 1;
    }
    if (n < 1) {
      slidePosition = slides.length;
    }

    slides.forEach((slide) => {
      slide.style.display = "none";
    });

    circles.forEach((circle) => {
      circle.className = circle.className.replace(" enable", "");
    });

    slides[slidePosition - 1].style.display = "block";
    circles[slidePosition - 1].className += " enable";
  }
}
