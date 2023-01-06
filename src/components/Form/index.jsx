import Button from "../Button";
import {
  ButtonContainer,
  FormContainer,
  FormControl,
  Input,
  Label,
} from "./styled";
const Form = () => {
  return (
    <FormContainer>
      <FormControl>
        <Label htmlFor="name">Full Name:</Label>
        <Input type="text" id="name" placeholder="Nasser Toghiri" />
      </FormControl>

      <FormControl>
        <Label htmlFor="email">Email:</Label>
        <Input type="email" id="email" placeholder="N.Toghiri@Gmail.com" />
      </FormControl>

      <FormControl>
        <Label htmlFor="age">Age:</Label>
        <Input type="number" id="age" placeholder="-- --" />
      </FormControl>

      <ButtonContainer>
        <Button title="Back" />
        <Button title="Submit" />
      </ButtonContainer>
    </FormContainer>
  );
};

export default Form;
