import { moveInBottom } from "../animations/moves";
import styled from "styled-components";
export const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 40;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.507);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;
export const ModalCard = styled.div`
  width: 55rem;
  background-color: white;
  border-radius: 5px;
  padding: 1.5rem;
  animation: ${(props) => (props.isShow ? moveInBottom : "none")} 0.5s;
`;
export const ModalCardHeader = styled.div`
  display: flex;
  align-items: center;
  color: #3b3b3b;
  margin-bottom: 2rem;
`;
export const CloseButton = styled.button`
  cursor: pointer;
  color: #777;

  margin-left: auto;
  background-color: transparent;
  /* color: #fe854d; */
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  &:hover {
    color: #fe854d;
  }
  &:focus {
    outline: none;
  }
`;
export const ModalBody = styled.div``;
export const Label = styled.label`
  font-size: 1.5rem;
  color: #777;
  font-weight: 400;
  margin-bottom: 0.7rem;
  display: block;
  transition: all 0.3s;
`;
export const Form = styled.form``;
export const Input = styled.input`
  border: none;
  font-family: inherit;
  background-color: #f1f1f1;
  width: 100%;
  font-size: 1.5rem;
  padding: 1rem 1.5rem;
  border-radius: 5px;
  border: 3px solid transparent;
  transition: all 0.4s;
  &::-webkit-input-placeholder {
    color: #777;
  }
  &:focus {
    outline: none;
    border-color: rgba(94, 216, 135, 0.473);
  }
  &:focus:invalid {
    border-color: #fe854d;
  }
`;
export const Group = styled.div`
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;
export const Buttons = styled.div`
  display: flex;
  & > *:not(:last-child) {
    margin-right: 2rem;
  }
`;
