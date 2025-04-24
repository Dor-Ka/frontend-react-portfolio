import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>DK Portfolio</h1>
      <ul style={styles.navLinks}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/about" style={styles.link}>About</Link></li>
        <li><Link to="/projects" style={styles.link}>Projects</Link></li>
        <li><Link to="/contact" style={styles.link}>Contact</Link></li>
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
  };

export default Navbar;
