// =========================
// Dark/Light Theme Toggle
// =========================
const themeToggleBtn = document.getElementById("themeToggle");

// Load saved theme from localStorage (if exists)
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
  if (themeToggleBtn) themeToggleBtn.textContent = "Light Mode";
} else {
  if (themeToggleBtn) themeToggleBtn.textContent = "Dark Mode";
}

// Toggle theme and save preference
if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");

    themeToggleBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
  });
}

// =========================
// Contact Form Interaction
// =========================
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault(); // no backend required

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Basic validation
    if (!name || !email || !message) {
      formStatus.textContent = "Please fill out all fields before submitting.";
      formStatus.style.color = "red";
      return;
    }

    // "Success" message (demo only)
    formStatus.textContent = "Message sent (demo). Thank you!";
    formStatus.style.color = "green";

    // Clear fields
    contactForm.reset();
  });
}

// =========================
// Footer year (nice extra)
// =========================
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
