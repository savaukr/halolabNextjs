// import { useState } from "react";
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
  const arr = router.asPath.split("/");
  return arr.includes(section);
};

const Menu = () => {
  // const [isMobileMenu, setIsMobileMenu] = useState(false);
  const router = useRouter();

  return (
    <div>
      <div>
        <img
          src="/assets/Logo.png"
          srcSet={"/assets/Logo.png 1x, /assets/Logo2x.png 2x"}
          alt="nature needs logo"
        />
      </div>
      <nav>
        <ul className="flex">
          <li className="group relative">
            <A
              href="/"
              classNameOne=""
              classNameTwo={
                isActive(LIST_MENU_ITEM.HOME, router) ? styles.active : ""
              }
            >
              Home
            </A>
          </li>
          <li className="group relative">
            <A
              href="/our_mission"
              classNameOne=""
              classNameTwo={
                isActive(LIST_MENU_ITEM.OUR_MISSION, router)
                  ? styles.active
                  : ""
              }
            >
              Our mission
            </A>
          </li>
          <li className="group relative">
            <A
              href="/places"
              classNameOne=""
              classNameTwo={
                isActive(LIST_MENU_ITEM.PLACES, router) ? styles.active : ""
              }
            >
              Places
            </A>
          </li>
          <li className="group relative">
            <A
              href="/team"
              classNameOne=""
              classNameTwo={
                isActive(LIST_MENU_ITEM.TEAM, router) ? styles.active : ""
              }
            >
              Team
            </A>
          </li>
        </ul>
      </nav>
      <div></div>
    </div>
  );
};

export default Menu;
