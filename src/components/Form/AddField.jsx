import React from "react";
import styled from "styled-components";
import Spacer from "../Utils/Spacer";
const Card = styled.div`
  width: 100%;
  padding: 2rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  border-radius: 1rem;
`;
const Input = styled.input`
  font-size: 1.4rem;
  border: none;
  border-bottom: solid 1.5px #f2f2f2;
  color: #b3b3b3;
  width: 100%;
  padding: 1rem 0;
  &::placeholder {
    color: inherit;
  }
  &:focus {
    outline: none;
  }
`;
const Label = styled.label`
  font-size: 1.7rem;
  font-weight: 700;
  color: black;
`;
const AddField = ({ name, type, placeholder, label, changed }) => {
  return (
    <Card>
      <Label htmlFor={name}>{label}</Label>
      <Spacer />
      <Input
        name={name}
        type={type}
        id={name}
        placeholder={placeholder}
        onChange={changed}
      />
    </Card>
  );
};

export default AddField;
