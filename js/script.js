// Dark Mode
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
});

// Scroll effect
const scroll_ef = ScrollReveal({
  origin: "left",
  distance: "100px",
  duration: 1000,
  reset: true,
});

scroll_ef.reveal(
  `.home-data, .home-img,
            .about-data, .about-img,
            .service-content, .price-content,
            .contact-data, .contact-button,
            .footer-content`,
  {
    interval: 100,
  }
);
