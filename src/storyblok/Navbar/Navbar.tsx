import { storyblokEditable } from "@storyblok/react";
import { Link, NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";

export default function Navbar({blok}: any) {
  const navLinkClass = (({isActive}: {isActive: boolean, isPending: boolean}) => {
    if (isActive) {
      return `${styles.active} ${styles.navLink}`;
    }
      
    return styles.navLink;
  });

  return (
    <nav {...storyblokEditable(blok)} className={styles.navbar}>
      <div className="container d-flex align-items-center justify-content-between">
        <Link to="/" className={styles.brand}>
          <img src={blok.brand_logo.filename} alt="Image Page" className={styles.brandLogo}/>
          <strong className={styles.brandName}>{blok.brand_name}</strong>
        </Link>
        <ul className={styles.nav}>
          <li>
            <NavLink to="/blogs" className={navLinkClass}>{blok.blog}</NavLink>
          </li>
          <li>
            <NavLink to="/about-us" className={navLinkClass}>{blok.about}</NavLink>
          </li>
          <li>
            <NavLink to="/contact-us" className={navLinkClass}>{blok.contact}</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}