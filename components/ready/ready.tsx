import { useState } from "react";

import A from "../link/a";
import BtnClose from "../icons/btnClose";
import BtnOpen from "../icons/btnOpen";
import styles from "./ready.module.scss";

type TIsOpen = {
  first: boolean;
  second: boolean;
  third: boolean;
};

const Ready = () => {
  const [isOpen, setIsOpen] = useState<TIsOpen>({
    first: false,
    second: false,
    third: false,
  });
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.left}>
            <h2>Ready to Get started?</h2>
            <p>
              When pattern is mentioned in interior design, it is easy to asso-
              ciate it with a geometric patterned wallpaper or colourful prints
              on interior fabrics.
            </p>
            <A href="/contacts" classNameOne={styles.btn}>
              CONTUCT US
            </A>
          </div>
          <div className={styles.rigth}>
            <div className={styles.question}>
              <div className={styles.titleWrapper}>
                <h3>What can I do to protect our planet?</h3>
                <div
                  className={styles.closeOpen}
                  onClick={() =>
                    setIsOpen((prev) => {
                      return {
                        first: !prev.first,
                        second: false,
                        third: false,
                      };
                    })
                  }
                >
                  {isOpen.first ? <BtnClose /> : <BtnOpen />}
                </div>
              </div>
              {isOpen.first ? (
                <p>
                  Not to make an open fire in nature and to clean up litter; not
                  to pollute open water bodies; to switch to alternative energy
                  sources; to reduce the use of non-renewable resources
                </p>
              ) : null}
            </div>
            <div className={styles.question}>
              <div className={styles.titleWrapper}>
                <h3>How to save nature ecology?</h3>
                <div
                  className={styles.closeOpen}
                  onClick={() =>
                    setIsOpen((prev) => {
                      return {
                        first: false,
                        second: !prev.second,
                        third: false,
                      };
                    })
                  }
                >
                  {isOpen.first ? <BtnClose /> : <BtnOpen />}
                </div>
              </div>
              {isOpen.second ? (
                <p>
                  Not to make an open fire in nature and to clean up litter; not
                  to pollute open water bodies; to switch to alternative energy
                  sources; to reduce the use of non-renewable resources
                </p>
              ) : null}
            </div>
            <div className={styles.question}>
              <div className={styles.titleWrapper}>
                <h3>What is nature conservation?</h3>
                <div
                  className={styles.closeOpen}
                  onClick={() =>
                    setIsOpen((prev) => {
                      return {
                        first: false,
                        second: false,
                        third: !prev.third,
                      };
                    })
                  }
                >
                  {isOpen.first ? <BtnClose /> : <BtnOpen />}
                </div>
              </div>
              {isOpen.third ? (
                <p>
                  Not to make an open fire in nature and to clean up litter; not
                  to pollute open water bodies; to switch to alternative energy
                  sources; to reduce the use of non-renewable resources
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Ready;
