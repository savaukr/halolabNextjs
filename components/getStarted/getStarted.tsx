import { useState } from "react";
import styles from "./getStarted.module.scss";

const GetStarted = () => {
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.left}>
            <h1>Get started today!</h1>
            <p>
              Learn more about how you can save our planet's nature. From smart
              consumption to switching to renewable energy, each of us can do
              our part to save the planet.
            </p>
          </div>
          <div className={styles.right}>
            <div className={styles.petals}>
              <img src="./assets/petal_big.png" className={styles.petal_big} />
              <img
                src="./assets/petal_small.png"
                className={styles.petal_small}
              />
            </div>

            <form name="log_in" className={styles.login_form}>
              <h2>Log in</h2>
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className={styles.inputWrapper}>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className={styles.btnWrapper}>
                <button type="submit">Book a demo</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
