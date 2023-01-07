import Button from "../Button";
import { ButtonContainer, FormContainer } from "./styled";
import Input from "../Input";
const Form = () => {
  return (
    <FormContainer>
      <Input
        for="name"
        title="Full Name"
        type="text"
        id="name"
        placeholder="Nasser Toghiri"
      />
      <Input
        for="email"
        title="E-mail"
        type="email"
        id="email"
        placeholder="N.Toghiri@Gmail.com"
      />
      <Input for="age" title="Age" type="number" id="age" placeholder="-- --" />
      <ButtonContainer>
        <Button title="Back" />
        <Button title="Submit" />
      </ButtonContainer>
    </FormContainer>
  );
};

export default Form;
