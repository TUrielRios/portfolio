// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <header className={styles.header}>
        <h1>Tiziano Rios</h1>
        <nav className={styles.navbar}>
            <Link to="/"  className={styles.navItem}>About</Link>
            <Link to="/projects" className={styles.navItem}>Projects</Link>
            <Link to="/contact" className={styles.navItem}>Contact</Link>
        </nav>
        </header>
    );
}

export default NavBar;
