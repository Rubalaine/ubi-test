import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HeadingSecondary from "../Typography/HeadingSecondary";
import Paragraph from "../Typography/Paragraph";
import { MdEdit, MdDelete } from "react-icons/md";
import IconButton from "./../Button.jsx/IconButton";
import IconWrapper from "../wrappers/IconWrapper";
import Spacer from "../Utils/Spacer";
import { useContacts } from "../../context/ContactsContext";
import Modal from "../Utils/Modal";
import axios from "axios";

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
const Buttons = styled.div`
  width: 9rem;
  display: flex;
  justify-content: space-between;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  opacity: ${(props) => (props.visible ? "1" : "0")};
  transition: opacity 0.4s;
`;
const TextCard = styled.div``;
const ContactCard = ({ image, name, contact, id }) => {
  const [showModal, setShowModal] = useState(false);
  const [contacts, setContacts] = useContacts();

  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    let timer = setTimeout(() => {
      setClicked(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [clicked]);
  const unMountModal = () => {
    setShowModal(false);
  };
  const handleClick = () => {
    setClicked(true);
  };
  const handleDelete = async () => {
    try {
      await axios.delete(`http://ubi-moz.ml/contacts/delete/3000/${id}`);
    } catch (error) {
      console.log(error);
    } finally {
      setShowModal(false);
    }
  };
  const setEdit = () => {
    setContacts({
      ...contacts,
      editable: {
        id: id,
        name: name,
        contact: contact,
      },
    });
  };
  return (
    <>
      {showModal ? <Modal hideEvent={unMountModal} id={id} deleteEvent={handleDelete}/> : null}
      <Card onClick={handleClick}>
        <CardImage src={image} alt={name} />
        <TextCard>
          <HeadingSecondary>{name}</HeadingSecondary>
          <Paragraph>{contact}</Paragraph>
        </TextCard>
        <Buttons visible={clicked}>
          <IconButton
            action={() => {
              setShowModal(true);
            }}
          >
            <IconWrapper size={3.5}>
              <MdDelete />
            </IconWrapper>
          </IconButton>
          <IconButton link to="/edit" action={setEdit}>
            <IconWrapper size={3.5}>
              <MdEdit />
            </IconWrapper>
          </IconButton>
        </Buttons>
      </Card>
      <Spacer size={1.5} />
    </>
  );
};

export default ContactCard;
