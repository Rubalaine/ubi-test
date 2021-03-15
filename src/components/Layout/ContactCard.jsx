import React from "react";
import styled from "styled-components";
import HeadingSecondary from "../Typography/HeadingSecondary";
import Paragraph from "../Typography/Paragraph";
import { MdEdit, MdDelete } from "react-icons/md";
import IconButton from "./../Button.jsx/IconButton";
import IconWrapper from "../wrappers/IconWrapper";
import Spacer from "../Utils/Spacer";

const Card = styled.div`
  color: black;
  display: flex;
  padding: 2rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  border-radius: 1rem;
  justify-content: space-between;
  align-items: center;
`;
const CardImage = styled.img`
  height: 5rem;
  width: 5rem;
`;
const TextCard = styled.div``;
const ContactCard = ({ image, name, contact }) => (
  <>
    <Card>
      <CardImage src={image} alt={name} />
      <TextCard>
        <HeadingSecondary>{name}</HeadingSecondary>
        <Paragraph>{contact}</Paragraph>
      </TextCard>
      <IconButton to="/">
        <IconWrapper size={3.5}>
          <MdDelete />
        </IconWrapper>
      </IconButton>
      <IconButton to="/edit">
        <IconWrapper size={3.5}>
          <MdEdit />
        </IconWrapper>
      </IconButton>
    </Card>
    <Spacer size={2} />
  </>
);

export default ContactCard;
