import { useState } from "react";

// import A from "../link/a";
import styles from "./header.module.scss";

import Menu from "../menu/menu";

const Header = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  return (
    <div>
      <Menu />
    </div>
  );
};

export default Header;
