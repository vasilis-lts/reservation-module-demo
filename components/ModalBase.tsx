import React from "react";
import Modal from "@mui/material/Modal";
import Box from '@mui/material/Box';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '1px solid #ddd',
  boxShadow: 24,
  p: 4,
};

export default function ModalBase(props) {

  return (
    <Modal
      aria-labelledby="base-modal"
      aria-describedby="base-modal"
      open={props.open}
    >
      <Box sx={style}>
        {props.children}
      </Box>
    </Modal>
  );
}
