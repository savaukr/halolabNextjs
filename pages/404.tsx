import A from "../components/link/a";
import classNames from "classnames";
import styles from "../styles/404.module.scss";

export default function Custom404() {
  return (
    <div className={styles.content}>
      <div className={styles.error404}>
        <div className={styles.info404}>
          <h1>404 -Page not found</h1>
        </div>
        <div className={classNames(styles.photoplace, styles.tilt)}>
          <div className={styles.photoframe}>
            <div className={styles.labelWarp}>
              <div className={styles.label}>
                <A
                  href="/"
                  classNameOne={styles.logoSmall}
                  classNameTwo={styles.transition}
                >
                  Nature needs
                </A>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
