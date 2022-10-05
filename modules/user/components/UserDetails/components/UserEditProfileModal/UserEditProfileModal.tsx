import * as React from 'react';
import { Dispatch, memo, SetStateAction, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Chip, Grid } from '@mui/material';
import { ErrorOutlined } from '@mui/icons-material';
import FormTextField from '../../../../../../components/ui/FormFields/Text/FormTextField';
import FormPasswordField from '../../../../../../components/ui/FormFields/Text/FormPasswordField';
import { LoadingButton } from '@mui/lab';
import { useState } from 'react';
import useEditProfileForm from '../../../../hooks/useEditProfileForm';
import toast, { Toaster } from 'react-hot-toast';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '2px',
  p: 4,
};

type ModalProps = {
  open: boolean;
  handleClose: () => void;
  setEditSuccess: Dispatch<SetStateAction<boolean>>;
};

const UserEditProfileModal = ({
  open,
  handleClose,
  setEditSuccess,
}: ModalProps) => {
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { onSubmit, control, isLoading, error, isSuccess, data } =
    useEditProfileForm(setShowError, setErrorMessage, handleClose);

  useEffect(() => {
    if (isSuccess) {
      setEditSuccess(true);
    }
  }, [isSuccess, setEditSuccess]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={onSubmit} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h1" component="h1">
                  Edit profile
                </Typography>
                <Chip
                  className="fadeIn"
                  sx={{
                    display: showError ? 'flex' : 'none',
                    justifyContent: 'flex-start',
                  }}
                  label={errorMessage}
                  color="error"
                  icon={<ErrorOutlined />}
                />
              </Grid>
              <Grid item xs={12}>
                <FormTextField
                  variant={'filled'}
                  name="name"
                  label={'Name'}
                  control={control}
                  disabled={isLoading}
                />
              </Grid>

              <Grid item xs={12}>
                <FormTextField
                  variant={'filled'}
                  name="email"
                  label={'Email'}
                  control={control}
                  disabled={isLoading}
                />
              </Grid>

              <Grid item xs={12}>
                <FormPasswordField
                  variant={'filled'}
                  name="password"
                  label={'Password'}
                  control={control}
                  disabled={false}
                />
              </Grid>

              <Grid item xs={12}>
                <LoadingButton
                  fullWidth
                  sx={{ height: '48px' }}
                  type="submit"
                  color="primary"
                  variant="contained"
                  size={'large'}
                  loading={isLoading}
                >
                  Submit
                </LoadingButton>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default memo(UserEditProfileModal);
