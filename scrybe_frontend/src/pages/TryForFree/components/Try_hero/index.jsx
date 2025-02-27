// eslint-disable-next-line no-warning-comments
// TODO disable eslint warning for this todo ;)
import React from "react";
import { Link } from "react-router-dom";
import Background from "../../assets/Try-background.png";
// import TryPic from "../../assets/Try-hero.svg";
import styles from "./try_hero.module.scss";

export default function tryHero() {
  return (
    <section className={styles.trySection}>
      <div>
        <div className={styles.HeroSection}>
          <div className={styles.Hero1}>
            <h3 className={styles.try}>Try for Free</h3>
            <p>
              Experience a touch of Heed without committing to our
              subscriptions. Try our other features when you sign up with us.
            </p>
            <Link to="/login" className={styles.HeroButton}>
              Start Free Trial
            </Link>
          </div>
          <div className={styles.Hero2}>
            <img
              src="https://res.cloudinary.com/djufngoed/image/upload/v1670423929/Try-hero_zjxwlj.webp"
              alt="Hero_image"
            />
          </div>

          <Link to="/login" className={styles.HeroButtonMobile}>
            Sign Up Now
          </Link>
          <img className={styles.backgroundImage} src={Background} alt="some" />
        </div>

        <div className={styles.downHero}>
          <hr />
          <p>
            Heed offers unauthenticated users trials to run sentimental analysis
            on .mp3 customer/agent records without the need to sign up. However,
            to access more enjoyable features to easily track the customer
            support performance of your company, you are required to Sign
            Up/Sign In with your correct company email.
          </p>
        </div>
      </div>
    </section>
  );
}
