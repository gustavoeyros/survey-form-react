import styled from "styled-components";

export const FormControl = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  font-weight: 700;
  gap: 7px;
`;

export const InputStyled = styled.input`
  padding: 6px 11px;
  font-size: 16px;
  ${(props) => (props.type === "number" ? "width: 30%;" : "width: 100%;")}
  height: 20px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  outline: none;

  &::placeholder {
    font-weight: 400;
  }
`;

export const Label = styled.label`
  padding-left: 11px;
`;

export const Error = styled.p`
  color: red;
`;
