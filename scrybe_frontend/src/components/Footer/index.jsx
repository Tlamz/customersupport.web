import React from "react";
import { NavLink } from "react-router-dom";
import email from "./assets/mail.png";
import call from "./assets/phone.png";
import fb from "./assets/fb.png";
import ig from "./assets/ig.png";
import locate from "./assets/location-marker.png";
import logo from "./assets/logo.png";
import twitter from "./assets/twit.png";
import styles from "./footer.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <div>
            <img src={logo} alt="" srcset="" className={styles.logo} />
            <div>
              <p className={styles.provide}>
                Providing businesses with intelligent, accurate, and precise
                intent analysis to improve customer experience.
              </p>
            </div>
          </div>

          <div className={styles.joinContainer}>
            <p style={{ marginTop: "0rem" }}>Join Our Community</p>
            <div className={styles.socials}>
              <a href="https://heed.hng.tech">
                <img src={ig} alt="" srcset="" />
              </a>
              <a href="https://heed.hng.tech">
                <img src={fb} alt="" srcset="" />
              </a>
              <a href="https://heed.hng.tech">
                <img src={twitter} alt="" srcset="" />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerRight}>
          <ul>
            <h4> Explore</h4>
            <li>
              <NavLink to="/" className={styles.links}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/press-article" className={styles.links}>
                Why Heed
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us" className={styles.links}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/privacy" className={styles.links}>
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink to="/terms" className={styles.links}>
                Terms & Conditions
              </NavLink>
            </li>
          </ul>

          <ul>
            <h4>Quick links</h4>
            <li>
              <NavLink to="/signin" className={styles.links}>
                Authentication
              </NavLink>
            </li>
            <li>
              <NavLink to="/pricing" className={styles.links}>
                Billing and pricing
              </NavLink>
            </li>
            <li>
              <NavLink to="/account" className={styles.links}>
                Accounts
              </NavLink>
            </li>
            <li>
              <NavLink to="/faq" className={styles.links}>
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink to="/help-support" className={styles.links}>
                Help and Support
              </NavLink>
            </li>
          </ul>
          <div className={styles.footer__right}>
            <h4>Contact</h4>
            <div className={styles.footer__right__contact}>
              <div className={styles.footer__right__logo}>
                <img src={call} alt="" />
              </div>
              <p>+2348790900976</p>
            </div>
            <div className={styles.footer__right__contact}>
              <div className={styles.footer__right__logo}>
                <img src={email} alt="" />
              </div>
              <p>info@heed.co.za</p>
            </div>
            <div className={styles.footer__right__contact}>
              <div className={styles.footer__right__logo}>
                <img src={locate} alt="" />
              </div>
              <p>54 jones close Abuja</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.footer__bottom}>
        <p> &copy; Copyright 2022 | Heed</p>
      </div>
    </div>
  );
}

export default Footer;
