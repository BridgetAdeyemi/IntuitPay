/*================== HAMBUGAR MENU ==============*/
const navBugar = document.getElementById("navbugar");
const navMenu = document.getElementById("menu");
const faSolid = document.querySelector("#navbugar i");

navBugar.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  faSolid.classList.toggle("fa-bars");
  faSolid.classList.toggle("fa-times");
});

/*================ SMOOTH SCROLL FOR NAV LINKS ====================== */
document.querySelectorAll(".nav-links a, #menu a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const tergetId = link.getAttribute("href").substring(1);
    const tergerSection = document.getElementById(tergetId);
    tergerSection.scrollIntoView({ behavior: "smooth" });
  });
});

/* =============== STICKY NAVIGATION ============== */
const header = document.querySelector("header");
const heroHeight = document.querySelector(".hero").offsetHeight;

window.addEventListener("scroll", () => {
  if (window.scrollY > heroHeight - header.offsetHeight) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

/* =============== FEATURE CARD HOVER EFFECT ============== */
const featureGrids = document.querySelectorAll(".features-grid .grid");
featureGrids.forEach((grid) => {
  grid.addEventListener("click", () => {
    featureGrids.forEach((g) => g.classList.remove("expanded"));
    grid.classList.toggle("expanded");
  });
});

/* =============== REVIEW SLIDER ============== */
let swiperSlide = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 30,
  grabCursor: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },

  // pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* =============== ACCORDION ============== */
const accordionBoxs = document.querySelectorAll(
  ".faqs-accordion .accordion-box"
);

//even lister
accordionBoxs.forEach((box) => {
  const label = box.querySelector(".label");
  label.addEventListener("click", () => {
    box.classList.toggle("active");

    // close other accordions
    accordionBoxs.forEach((otherBox) => {
      if (otherBox != box) {
        otherBox.classList.remove("active");
      }
    });
  });
});

/*================ FORM VALIDATION ====================== */
let form = document.getElementById("subscribeForm");
let emailInput = form.querySelector("input");
const inputInfo = document.querySelector(".input-info");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();
  // console.log("Email:", email);
  if (/^\S+@\S+\.\S+$/.test(email)) {
    inputInfo.innerHTML = "Subscribed Successfully";
    inputInfo.classList.add("display");
    // setTimeout(() => inputInfo.classList.remove("display"), 2000);
    inputInfo.classList.remove("show");
    emailInput.value = "";
    emailInput.classList.remove("error");
  } else {
    emailInput.classList.add("error");
    inputInfo.innerHTML = "Please enter a valid email address.";

    inputInfo.classList.add("show");
    inputInfo.classList.remove("display");
  }
});

/*================ AOS ANIMATION ====================== */
AOS.init({
  duration: 1000,
  easing: "ease",
  once: false,
});

/*================ SCROLL TO TOP BUTTON ====================== */
const scrollToTop = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 2000) {
    scrollToTop.classList.add("show");
  } else {
    scrollToTop.classList.remove("show");
  }
});

scrollToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
