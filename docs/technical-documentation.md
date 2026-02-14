# Technical Documentation

**Student:** Ibrahim Abbas Almuhanna  
**Assignment:** Assignment 1 – Foundation & AI Integration  

---

## 1. Project Overview

This project is a responsive personal portfolio website built using HTML, CSS, and JavaScript. The goal is to demonstrate foundational front-end development skills including semantic structure, responsive design, and interactive functionality.

The website includes:

- About Me section
- Projects section
- Contact form
- Dark/Light theme toggle
- Form validation interaction

---

## 2. File and Folder Structure

```
id-name-assignment1/
├── index.html
├── README.md
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
└── .gitignore
```

### File Explanation

- **index.html** – Main HTML structure of the website.
- **css/styles.css** – All styling including layout and responsive design.
- **js/script.js** – JavaScript functionality (theme toggle, form validation, dynamic year).
- **assets/images/** – Stores profile and project images.
- **docs/** – Contains AI usage report and technical documentation.
- **README.md** – Project overview and instructions.

---

## 3. Design Decisions

### Why Semantic HTML?

Semantic elements such as `<header>`, `<main>`, `<section>`, and `<footer>` were used to improve structure, readability, and accessibility.

---

### Why Flexbox?

Flexbox was used for:

- Header layout (aligning name and navigation).
- Form layout and spacing.
- General alignment of elements.

Flexbox is efficient for one-dimensional layout control.

---

### Why CSS Grid?

CSS Grid was used for:

- Organizing project cards into columns.

Grid allows easy transition from two-column layout (desktop) to one-column layout (mobile).

---

### Why Breakpoints?

Media queries were implemented for:

- Mobile: up to 600px
- Tablet: 601px–900px
- Desktop: 901px and above

Responsive adjustments include:

- Navigation stacking on smaller screens.
- Project cards switching to one column on mobile.
- Image resizing for better usability.

This ensures compatibility across devices.

---

## 4. JavaScript Features

### Dark / Light Theme Toggle

**What it does:**

- Allows users to switch between light and dark themes.
- Saves user preference using `localStorage`.

**How it works:**

- A button toggles a `.dark` class on the `<body>`.
- CSS applies different styles when `.dark` is active.
- `localStorage` stores the selected theme.
- On page load, JavaScript checks saved preference and applies it.

---

### Contact Form Interaction

**What it does:**

- Prevents default form submission.
- Validates that all fields are filled.
- Displays an error message if fields are empty.
- Displays a success message if valid.
- Clears the form after submission.

**How it works:**

- Uses `addEventListener("submit")`.
- Uses `event.preventDefault()` to stop page refresh.
- Checks input values using conditional logic.
- Updates text content dynamically.
- Uses `form.reset()` to cle
