import classNames from "../../node_modules/classnames/index";

import Image from "../../node_modules/next/image";

import Team_photo_one from "../../public/assets/team_photo_one.png";
import Team_photo_two from "../../public/assets/team_photo_two.png";
import Team_photo_three from "../../public/assets/team_photo_three.png";

import styles from "./ourTopTeam.module.scss";

const OurTopTeam = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <h2>Our top team</h2>
        <p>Learn more about how you can save our planet's nature.</p>
        <div className={styles.photoes}>
          <div className={classNames(styles.photo_wrapper, styles.photo_one)}>
            <Image src={Team_photo_one} />
          </div>
          <div className={styles.line_first}>
            <img src="./assets/our_team_line_one.png" />
          </div>
          <div className={classNames(styles.photo_wrapper, styles.photo_two)}>
            <Image src={Team_photo_two} />
          </div>
          <div className={classNames(styles.photo_wrapper, styles.photo_three)}>
            <Image src={Team_photo_three} />
          </div>
          <div className={styles.line_second}>
            <img src="./assets/our_team_line_two.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTopTeam;
