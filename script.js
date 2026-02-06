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



const modal = document.getElementById("passwordModal");
const passwordInput = document.getElementById("passwordInput");
const errorText = document.getElementById("passwordError");
const successText = document.getElementById("passwordSuccess");

const confirmBtn = document.getElementById("confirmBtn");
const cancelBtn = document.getElementById("cancelBtn");

let targetPage = "";

// 🔑 MOT DE PASSE
const PASSWORD = "bts2024";

document.querySelectorAll(".protected-link").forEach(link => {
  link.addEventListener("click", () => {
    targetPage = link.dataset.page;
    modal.classList.add("active");
    passwordInput.value = "";
    errorText.textContent = "";
    successText.textContent = "";
    passwordInput.focus();
  });
});

confirmBtn.addEventListener("click", checkPassword);
cancelBtn.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (!modal.classList.contains("active")) return;

  if (e.key === "Enter") checkPassword();
  if (e.key === "Escape") closeModal();
});

function checkPassword() {
  if (passwordInput.value === PASSWORD) {
    errorText.textContent = "";
    successText.textContent = "Accès autorisé ✔";

    setTimeout(() => {
      window.location.href = targetPage;
    }, 700);
  } else {
    successText.textContent = "";
    errorText.textContent = "Mot de passe incorrect ❌";
  }
}

function closeModal() {
  modal.classList.remove("active");
}

