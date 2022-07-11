import Analyzer_icon from "../icons/analyzer_icon";
import Composer_icon from "../icons/composer_icon";
import Revenu_icon from "../icons/revenu_icon";

import styles from "./scale.module.scss";

const Scale = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className="container">
          <h1 className={styles.title}>
            The scale of the challenges facing our planet can seem daunting, but
            we can all do something.
          </h1>
        </div>
      </div>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.icon_wrapper}>
            <Composer_icon />
            <h3>Assets value COMPOSER</h3>
          </div>
          <div className={styles.icon_wrapper}>
            <Analyzer_icon />
            <h3>GRAPH BUDGET ANALYZER</h3>
          </div>
          <div className={styles.icon_wrapper}>
            <Revenu_icon />
            <h3>MONTHLY AVG. REVENUE</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scale;
