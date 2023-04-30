/* eslint-disable react/prop-types */
import React from "react";
import Modal from "@mui/material/Modal";
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';

const GlobalModal = (props) => {
  const { open, onClose, children } = props;
  const styles = {
    position: props.position,
    top: props.top,
    left: props.left,
    transform: props.transform,
    width: props.width,
    height: props.height,
    overflow:props.overflow,
    bgcolor:props.bgcolor,
    border: props.border,
    borderRadius:props.borderRadius,
    boxShadow: props.boxShadow,
    p: props.p,
    minHeight: props.minHeight,
    background: props.background

  }


  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
    >
      <Fade in={open}>
        <Box className={`mobile_modal_size`} sx={styles}>
          {children}


        </Box>

      </Fade>
    </Modal>
  );
};

export default GlobalModal;
