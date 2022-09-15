import * as React from 'react';
import { useRouter } from 'next/router';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { memo } from 'react';
import { Button } from '@mui/material';
import { NextMuiLink } from '../Link/NextMuiLink';
import { useTranslation } from 'next-i18next';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  justifyContent: 'center',
  borderRadius: 1,
  boxShadow: 24,
  p: 4,
};

type ComponentProps = {
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
};

const LoginMessageModal = ({ open, handleClose }: ComponentProps) => {
  const router = useRouter();
  const { t } = useTranslation('common');
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {t('loginToVote')}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                mt: 2,
              }}
            >
              <NextMuiLink href={`/auth/login?p=${router.asPath}`}>
                <Button sx={{ width: 80, mt: 1 }} variant="contained">
                  Login
                </Button>
              </NextMuiLink>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default memo(LoginMessageModal);
