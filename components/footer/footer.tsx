import classNames from "classnames";
import A from "../link/a";

import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={classNames(styles.footerWrapper)}>
      <div className={classNames(styles.footer, "container")}>
        <div className={styles.contacts}>
          <h2>CONTACTS</h2>
          <p>2019 Rootz Foundation.  All rights reserved</p>
        </div>

        <div>
          <h3>Headquarters</h3>
          <p>1234 Taliban Los Angeles, La 1234567 (123) 456-7890</p>
        </div>
        <div>
          <h3>Social media</h3>
          <p>
            <a href="#" className={styles.socialIcon}>
              <img src={"./svg/Twitter.svg"} alt="twitter" />
            </a>
            <a href="#" className={styles.socialIcon}>
              <img src={"./svg/Facebook.svg"} alt="facebook" />
            </a>
            <a href="#" className={styles.socialIcon}>
              <img src={"./svg/LinkedIn.svg"} alt="linkedin" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
