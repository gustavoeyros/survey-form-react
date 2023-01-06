import Button from "../Button";
import { ButtonContainer, FormContainer, FormControl, Input } from "./styled";
const Form = () => {
  return (
    <FormContainer>
      <FormControl>
        <label htmlFor="name">Full Name:</label>
        <Input type="text" id="name" placeholder="Nasser Toghiri" />
      </FormControl>

      <FormControl>
        <label htmlFor="email">Email:</label>
        <Input type="email" id="email" placeholder="N.Toghiri@Gmail.com" />
      </FormControl>

      <FormControl>
        <label htmlFor="age">Age:</label>
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
