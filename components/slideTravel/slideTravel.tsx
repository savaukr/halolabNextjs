import styles from "./slideTravel.module.scss";

type Props = {
  title: string;
  text: string;
  bg_color: string;
};
const SlideTravel = ({ title, text, bg_color }: Props) => {
  const divStyle = { backgroundColor: bg_color };
  return (
    <div className={styles.slideWrapper} style={divStyle}>
      <div className={styles.left}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div className={styles.rigth}>
        <div className={styles.box_one}></div>
        <div className={styles.box_two}></div>
      </div>
    </div>
  );
};

export default SlideTravel;
