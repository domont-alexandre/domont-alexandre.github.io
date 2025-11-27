document.addEventListener("click", (event) => {
  const navToggle = document.querySelector("#nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (!navToggle || !navLinks) return;

  const clickedInsideNav =
    navLinks.contains(event.target) || event.target === navToggle;
  const clickedLabel =
    event.target.closest(".nav-toggle-label") !== null ||
    event.target.id === "nav-toggle";

  if (!clickedInsideNav && !clickedLabel) {
    navToggle.checked = false;
  }

  if (event.target.matches(".nav-links a")) {
    navToggle.checked = false;
  }
});

const links = document.querySelectorAll('a[href^="#"]');
links.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);
    if (!target) return;
    event.preventDefault();
    window.scrollTo({
      top: target.offsetTop - 80,
      behavior: "smooth",
    });
  });
});







