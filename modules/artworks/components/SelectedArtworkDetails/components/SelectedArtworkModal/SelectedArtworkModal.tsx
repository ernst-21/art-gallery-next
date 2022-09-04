import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import Room from '../../../LivingRoom/components/Room';
import { IArtwork } from '../../../../../../interfaces';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  height: { xs: '70%', md: '90%' },
  boxShadow: 24,
  backgroundColor: 'white',
  p: 0.5,
};

type ModalProps = {
  handleOpen: () => void;
  handleClose: () => void;
  open: boolean;
  artwork: IArtwork;
};

const SelectedArtworkModal = ({ handleClose, open, artwork }: ModalProps) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Room artwork={artwork} />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
export default SelectedArtworkModal;
