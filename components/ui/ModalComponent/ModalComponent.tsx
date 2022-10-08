import React, { memo, ReactNode } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 1,
  p: 4,
};

type PaymentModalProps = {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  sx?: {};
  children: ReactNode;
};

const ModalComponent = ({
  open,
  handleClose,
  sx,
  children,
}: PaymentModalProps) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, ...sx }}>{children}</Box>
      </Modal>
    </div>
  );
};

export default memo(ModalComponent);
