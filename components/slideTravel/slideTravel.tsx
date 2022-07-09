type Props = {
  title: string;
  text: string;
};
const SlideTravel = ({ title, text }: Props) => {
  return (
    <div>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default SlideTravel;
