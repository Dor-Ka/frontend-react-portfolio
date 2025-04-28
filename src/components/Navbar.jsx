import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>DK Portfolio</h1>
      <ul style={styles.navLinks}>
        <li><NavLink to="/" style={({ isActive }) => isActive ? styles.activeLink : styles.link}>Home</NavLink></li>
        <li><NavLink to="/about" style={({ isActive }) => isActive ? styles.activeLink : styles.link}>About</NavLink></li>
        <li><NavLink to="/projects" style={({ isActive }) => isActive ? styles.activeLink : styles.link}>Projects</NavLink></li>
        <li><NavLink to="/contact" style={({ isActive }) => isActive ? styles.activeLink : styles.link}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}

const styles = {
    nav: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 2rem",
      background: "#333",
    },
    logo: {
      color: "#e38327",
      margin: 0,
    },
    navLinks: {
      listStyle: "none",
      display: "flex",
      gap: "1rem",
      margin: 0,
      padding: 0,
    },
    link: {
      color: "#e38327",
      textDecoration: "none",
    },
    activeLink: {
      color: "#fff",
      textDecoration: "none",
    },
  };

export default Navbar;
