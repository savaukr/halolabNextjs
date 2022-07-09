import { useState } from "react";
import classNames from "../../node_modules/classnames/index";
import Image from "../../node_modules/next/image";

import Parrot from "../../public/assets/Parrot.png";
import Headline from "../../public/svg/Headline.svg";
import Card from "../../public/assets/Сard.png";

import styles from "./header.module.scss";

import Menu from "../menu/menu";

const Header = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  return (
    <div className={styles.headerWrapper}>
      <div className={classNames(styles.header, "container")}>
        <Menu />
        <div className={styles.headerContent}>
          <div className={styles.leftBlock}>
            <div className={styles.headline}>
              <Image src={Headline} alt="head line" />
            </div>
            <div className={styles.text}>
              The scale of the challenges facing our planet can seem daunting,
              but we can all do something.
            </div>
            <div className={styles.inputWrapper}>
              <div>
                <span className={styles.inputIcon}></span>
                <input
                  placeholder="Find the place to help"
                  className={styles.input}
                />
              </div>

              <button type="button" className={styles.searchBtn}>
                SEARCH
              </button>
            </div>
          </div>
          <div className={styles.rightBlock}>
            <div className={styles.parrot}>
              <Image src={Parrot} alt="parrot" />
            </div>
            <div className={styles.card}>
              <Image src={Card} alt="card" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
