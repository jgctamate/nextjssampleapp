import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

interface ModalComponentProps {
  open: boolean;
  handleClose: () => void;
}

const ModalComponent: React.FC<ModalComponentProps> = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-title" variant="h6" component="h2">
          Modal Title
        </Typography>
        <Typography id="modal-description" sx={{ mt: 2 }}>
          Modal Content
        </Typography>
      </Box>
    </Modal>
  );
};

export default ModalComponent;