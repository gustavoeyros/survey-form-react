import BtnStyle from "./styled";

const Button = (props) => {
  return <BtnStyle type="submit">{props.title}</BtnStyle>;
};

export default Button;
