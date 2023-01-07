import { FormControl, Label, InputStyled, Error } from "./styled";

const Input = (props) => {
  let isValid = true;
  return (
    <FormControl>
      <Label htmlFor={props.for}>{props.title}:</Label>
      <InputStyled
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
      />
      {!isValid && (
        <Error>Please enter a valid {props.title.toLowerCase()}</Error>
      )}
    </FormControl>
  );
};

export default Input;
