# React Portfolio

![GitHub repo size](https://img.shields.io/github/repo-size/dor-ka/frontend-react-portfolio)
![GitHub issues](https://img.shields.io/github/issues/dor-ka/frontend-react-portfolio)
![GitHub pull requests](https://img.shields.io/github/issues-pr/dor-ka/frontend-react-portfolio)
![GitHub deployments](https://img.shields.io/github/deployments/dor-ka/frontend-react-portfolio/github-pages)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![React](https://img.shields.io/badge/React-18-blue.svg)
![Made with Styled Components](https://img.shields.io/badge/Styled--Components-%23db7093.svg?logo=styled-components&logoColor=white)


This is my personal portfolio website built with **React**. 
It showcases my projects, skills, and contact information, using **React Router** for multi-page navigation and custom theme with dark and light mode support.

## 📛 Badges

- ![GitHub repo size](https://img.shields.io/github/repo-size/dor-ka/frontend-react-portfolio) **Repository size** – Shows the total size of the project.
- ![GitHub issues](https://img.shields.io/github/issues/dor-ka/frontend-react-portfolio) **Open issues** – Displays the number of currently open issues.
- ![GitHub pull requests](https://img.shields.io/github/issues-pr/dor-ka/frontend-react-portfolio) **Pull requests** – Shows the number of open pull requests.
- ![GitHub deployments](https://img.shields.io/github/deployments/dor-ka/frontend-react-portfolio/github-pages) **Deployment status** – Indicates deployment status to GitHub Pages.
- ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg) **License** – Licensed under MIT.
- ![React](https://img.shields.io/badge/React-18-blue.svg) **React** – Built with React 18.
- ![Made with Styled Components](https://img.shields.io/badge/Styled--Components-%23db7093.svg?logo=styled-components&logoColor=white) **Styled Components** – Styled using the Styled Components library.

## 🌐 Live Demo

[View Live](https://dor-ka.github.io/frontend-react-portfolio/)

## 📁 Features

- 🧼 Clean and simple design
- 🔀 Multi-page navigation using **React Router**
- 💡 **Dark mode** and **Light mode** support
- 📱 Fully responsive layout
- 💼 Project showcase section
- 📬 Contact page
- ⚙️ Theme-based color system
- 🎨 Easy color customization via theme
- 🖼️ SEO tags and social sharing (Open Graph, Twitter Cards)
- 📑 Favicon and manifest configured for PWA basics
- 🍔 Mobile menu with hamburger button 
- 🛑 Mobile menu closes on overlay click and Escape key press
- 📚 Fetch and display GitHub projects dynamically
- 🎯 Project filtering by technology (React, Vanilla JS, etc.)
- 🛜 Loading indicator when fetching projects
- 🖱️ Clickable project cards linking to GitHub repositories
- 🏷️ Technology and origin badges under project titles
- 🧹 Automatic project name cleanup (remove prefixes)
- 🔵 Improved ProjectCard hover and link styles

## 🛠️ Built With

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Styled Components](https://styled-components.com/) for styling
- Git & GitHub Pages for deployment

## 📦 Folder Structure

src/
├── assets/                     # images: profile & logo
│   ├── logo.png
│   └── profile.png
├── components/                 # Navbar, Footer, and other reusable components
│   ├── Navbar/
│   ├── Footer/
│   └── shared/
│       ├── Social/
│          ├── SocialIcons.jsx
│          └── SocialLinks.styles.js 
│       ├── Hero.styles.js
│       └── Title.styles.js 
├── hooks/                      # Custom React hooks
│   ├── useIsMobile.js
│   ├── usePageMeta.js
│   ├── useProjects.js
│   └── useThemeMode.js
├── pages/                      # Page components (Home, About, Projects, Contact)
│   ├── About/
│       ├── About.jsx
│       └── About.styles.js 
│   ├── Contact/
│       ├── Contact.jsx
│       └── Contact.styles.js 
│   ├── Home/
│       ├── Home.jsx
│       └── Home.styles.js 
│   ├── Projects/
│       ├── Projects.jsx
│       └── Projects.styles.js 
├── styles/                     # Global styles and theme setup
│   ├── AppStyles.js
│   ├── GlobalStyles.js
│   └──  theme.js                # Theme configuration (light and dark mode)
├── utils/  
│   └──  formatProjectNames.js
├── App.jsx                     # Main app with routing setup
├── index.js                    # Entry point for the app
└── README.md   

## 📸 Screenshots

## 🚀 Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To run this project locally:

```bash
git clone https://github.com/twoj-username/frontend-react-portfolio.git
cd frontend-react-portfolio
npm install
npm start
```

To deploy to GitHub Pages:

```bash
npm run deploy
```

## 📄 License

This project is open source and available under the MIT License.