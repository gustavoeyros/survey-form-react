import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 37px;
  width: 278px;
`;

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 700;
`;

export const Input = styled.input`
  padding: 6px 11px;
  font-size: 16px;
  width: 100%;
  height: 33px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  outline: none;

  &::placeholder {
    font-weight: 400;
  }
`;
