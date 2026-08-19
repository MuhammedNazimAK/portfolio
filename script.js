const themeToggle = document.querySelector(".theme-toggle");

function initializeTheme() {
  const currentTheme =
    document.documentElement.getAttribute("data-theme") || "light";
  updateThemeToggleIcon(currentTheme);
}

function updateThemeToggleIcon(theme) {
  const icon = themeToggle.querySelector("i");
  const text = themeToggle.querySelector("span");

  if (theme === "dark") {
    icon.className = "fas fa-sun";
    text.textContent = "Light Mode";
  } else {
    icon.className = "fas fa-moon";
    text.textContent = "Dark Mode";
  }
}

themeToggle.addEventListener("click", () => {
  const currentTheme =
    document.documentElement.getAttribute("data-theme") === "dark"
      ? "light"
      : "dark";

  document.documentElement.setAttribute("data-theme", currentTheme);
  localStorage.setItem("theme", currentTheme);
  updateThemeToggleIcon(currentTheme);
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Navbar Scroll Effect
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    navbar.style.boxShadow = "none";
  } else {
    navbar.style.boxShadow = "var(--shadow-md)";
  }
});

const mobileMenuBtn = document.querySelector(".mobile-menu");
const mobileNav = document.querySelector(".mobile-nav");
mobileMenuBtn.addEventListener("click", () => {
  mobileMenuBtn.classList.toggle("active");
  mobileNav.classList.toggle("active");
});
document.querySelectorAll(".mobile-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("active");
  });
});

document.addEventListener("DOMContentLoaded", initializeTheme);

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);
document.querySelectorAll(".project-card, .contact-section").forEach((el) => {
  observer.observe(el);
});
