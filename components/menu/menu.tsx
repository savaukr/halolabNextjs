import { useState } from "react";
import { useRouter, NextRouter } from "next/router";

import A from "../link/a";

import styles from "./menu.module.scss";

enum LIST_MENU_ITEM {
  HOME = "",
  OUR_MISSION = "our_mission",
  PLACES = "places",
  TEAM = "team",
}

const isActive = (section: string, router: NextRouter) => {
  if (router.asPath === "/" && !section) return true;
  const arr = router.asPath.split("/");
  return arr.includes(section) && section;
};

const Menu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.menuWrapper}>
          <div>
            <A
              href="/"
              classNameOne={styles.link}
              classNameTwo={
                isActive(LIST_MENU_ITEM.HOME, router) ? styles.active : ""
              }
            >
              <img
                src="/assets/Logo.png"
                srcSet={"/assets/Logo.png 1x, /assets/Logo2x.png 2x"}
                alt="nature needs logo"
              />{" "}
            </A>
          </div>
          <nav className={styles.navigate}>
            <ul className={styles.flex}>
              <li className={styles.menuItem}>
                <A
                  href="/"
                  classNameOne={styles.link}
                  classNameTwo={
                    isActive(LIST_MENU_ITEM.HOME, router) ? styles.active : ""
                  }
                >
                  Home
                </A>
              </li>
              <li className={styles.menuItem}>
                <A
                  href="/our_mission"
                  classNameOne={styles.link}
                  classNameTwo={
                    isActive(LIST_MENU_ITEM.OUR_MISSION, router)
                      ? styles.active
                      : ""
                  }
                >
                  Our mission
                </A>
              </li>
              <li className={styles.menuItem}>
                <A
                  href="/places"
                  classNameOne={styles.link}
                  classNameTwo={
                    isActive(LIST_MENU_ITEM.PLACES, router) ? styles.active : ""
                  }
                >
                  Places
                </A>
              </li>
              <li className={styles.menuItem}>
                <A
                  href="/team"
                  classNameOne={styles.link}
                  classNameTwo={
                    isActive(LIST_MENU_ITEM.TEAM, router) ? styles.active : ""
                  }
                >
                  Team
                </A>
              </li>
            </ul>
          </nav>
          <div>
            <button type="button" className={styles.apply}>
              Apply
            </button>
          </div>
          <button
            type="button"
            className={styles.menuBtn}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? (
              <img src="./svg/icon_close.svg" />
            ) : (
              <img src="./svg/icon_humburger.svg" />
            )}
          </button>
        </div>
      </div>
      {isMobileMenuOpen ? (
        <div className={styles.mobileMenuWrapper}>
          <nav className={styles.mobileNavigate}>
            <ul className={styles.flex}>
              <li className={styles.menuItem}>
                <A
                  href="/"
                  classNameOne={styles.link}
                  classNameTwo={
                    isActive(LIST_MENU_ITEM.HOME, router) ? styles.active : ""
                  }
                >
                  Home
                </A>
              </li>
              <li className={styles.menuItem}>
                <A
                  href="/our_mission"
                  classNameOne={styles.link}
                  classNameTwo={
                    isActive(LIST_MENU_ITEM.OUR_MISSION, router)
                      ? styles.active
                      : ""
                  }
                >
                  Our mission
                </A>
              </li>
              <li className={styles.menuItem}>
                <A
                  href="/places"
                  classNameOne={styles.link}
                  classNameTwo={
                    isActive(LIST_MENU_ITEM.PLACES, router) ? styles.active : ""
                  }
                >
                  Places
                </A>
              </li>
              <li className={styles.menuItem}>
                <A
                  href="/team"
                  classNameOne={styles.link}
                  classNameTwo={
                    isActive(LIST_MENU_ITEM.TEAM, router) ? styles.active : ""
                  }
                >
                  Team
                </A>
              </li>
            </ul>
          </nav>
          <button type="button" className={styles.apply}>
            Apply
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Menu;
