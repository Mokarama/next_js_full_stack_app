"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./page.module.css";
import DarkMoodToggle from "./../DarkMoodToggle/DarkMoodToggle";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Portfolio", url: "/portfolio" },
  { id: 3, title: "Blog", url: "/blog" },
  { id: 4, title: "About", url: "/about" },
  { id: 5, title: "Contact", url: "/contact" },
  { id: 6, title: "Dashboard", url: "/dashboard" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Link href={"/"} className={styles.logo}>
        Blog Page
      </Link>

      <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div
        className={`${styles.links} ${menuOpen ? styles.showMenu : ""}`}
        onClick={() => setMenuOpen(false)}
      >
        <DarkMoodToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <button
          className={styles.logout}
          onClick={() => {
            console.log("logged out");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
