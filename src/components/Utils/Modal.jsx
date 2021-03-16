import React from "react";
import usePortal from "react-cool-portal";
import IconWrapper from "./../wrappers/IconWrapper";
import { BiXCircle } from "react-icons/bi";

import {
  Modal,
  ModalCard,
  ModalCardHeader,
  CloseButton,
  ModalBody,
  Form,
  Buttons,
} from "./ModalStyles";
import Button from "../Button.jsx";
import HeadingSecondary from "../Typography/HeadingSecondary";
import Spacer from "./Spacer";
import Paragraph from "../Typography/Paragraph";

const ModalDelete = ({ hideEvent, deleteEvent }) => {
  const { Portal, isShow, hide } = usePortal({
    defaultShow: true,
    clickOutsideToHide: true,
    escToHide: true,
    containerId: "modal",
    onHide: () => {
      hideEvent();
    },
  });
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Portal>
        <Modal>
          <ModalCard isShow={isShow}>
            <ModalCardHeader>
              <HeadingSecondary>apagar contacto</HeadingSecondary>
              <CloseButton onClick={hide}>
                <IconWrapper size={2}>
                  <BiXCircle />
                </IconWrapper>
              </CloseButton>
            </ModalCardHeader>
            <ModalBody>
              <Spacer />
              <Paragraph>Tem a certeza?</Paragraph>
              <Spacer size={2} />
              <Form onSubmit={handleSubmit}>
                <Buttons>
                  <Button clicked={deleteEvent}>apagar</Button>
                  <Button clicked={hide} altern>
                    cancelar
                  </Button>
                </Buttons>
              </Form>
            </ModalBody>
          </ModalCard>
        </Modal>
      </Portal>
    </>
  );
};

export default ModalDelete;
