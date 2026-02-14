Technical Documentation

Student: Ibrahim Abbas Almuhanna
Assignment: Assignment 1 – Foundation & AI Integration

1. Project Overview

This project is a responsive personal portfolio web application built using HTML, CSS, and JavaScript. The purpose of this project is to demonstrate foundational front-end development skills, responsive design principles, and basic JavaScript interactivity.

The website includes three required sections:

About Me

Projects

Contact

It also includes additional interactive features such as a dark/light theme toggle and form validation.

2. File and Folder Structure Explanation
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

index.html

Contains the main structure of the website, including:

Header and navigation

About section

Projects section

Contact form

Footer

css/styles.css

Contains all styling rules:

Base styling

Layout using Flexbox and Grid

Responsive breakpoints

Dark mode styles

js/script.js

Contains JavaScript functionality:

Dark/Light theme toggle with localStorage

Contact form validation and interaction

Automatic footer year

assets/images/

Stores all image files including:

Profile image

Project screenshots

docs/

Contains documentation files:

AI usage report

Technical documentation

3. Design Decisions
Why Semantic HTML?

Semantic elements such as <header>, <main>, <section>, and <footer> were used to improve structure, readability, and accessibility.

Why Flexbox?

Flexbox was used for:

Header layout (aligning name and navigation)

Form layout

General alignment and spacing

Flexbox is ideal for one-dimensional layouts and alignment control.

Why CSS Grid?

CSS Grid was used for:

Project cards layout

Grid allows clean two-column layout on larger screens and easy transition to one column on smaller devices.

Why Breakpoints?

Media queries were implemented to ensure the website is responsive across devices:

Mobile: up to 600px

Tablet: 601px–900px

Desktop: 901px and above

Responsive adjustments include:

Navigation stacking on small screens

Project cards switching to one column on mobile

Image resizing for better usability

This ensures compatibility across desktop, tablet, and mobile devices.

4. JavaScript Features
1. Dark / Light Theme Toggle
What it does:

Allows users to switch between dark and light mode.

Saves user preference using localStorage.

How it works:

A button toggles a .dark class on the <body>.

CSS applies different styles when .dark is active.

localStorage stores the selected theme.

On page load, JavaScript checks stored preference and applies it.

This demonstrates:

DOM manipulation

Event handling

Persistent client-side storage

2. Contact Form Interaction
What it does:

Prevents the default form submission behavior.

Validates that all fields are filled.

Displays an error message if fields are empty.

Displays a success message if valid.

Clears the form after submission.

How it works:

Uses addEventListener("submit")

Uses event.preventDefault() to stop page refresh

Checks input values using JavaScript

Updates text content dynamically

Uses form.reset() to clear inputs

This demonstrates:

Event handling

Conditional logic

User feedback implementation

DOM updates

5. Performance Considerations

Images are stored locally to ensure fast loading.

CSS and JS are separated for maintainability.

Minimal external dependencies are used.

Layout is lightweight and optimized for responsiveness.

6. Known Limitations

The contact form is front-end only and does not send real emails.

No backend integration or database connection.

No advanced animations or transitions.

Accessibility improvements (ARIA roles, advanced keyboard navigation) could be further enhanced.

No production-level deployment optimizations.

7. Future Improvements

Connect contact form to a backend service.

Add animations and improved UI polish.

Add more real projects with live links.

Improve accessibility compliance.

Add form email validation pattern checking.

Conclusion

This project demonstrates foundational web development skills including semantic HTML structure, responsive design using Flexbox and Grid, and JavaScript interactivity. The implementation focuses on clarity, structure, maintainability, and responsiveness across devices.
