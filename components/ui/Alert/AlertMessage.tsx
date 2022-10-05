import React, { Dispatch, SetStateAction, useEffect } from 'react';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

export interface State extends SnackbarOrigin {
  open: boolean;
}

type AlertMessageProps = {
  condition?: boolean;
  setCondition?: Dispatch<SetStateAction<boolean>> | undefined;
  sx?: {};
  text: string;
  verticalPosition: 'top' | 'bottom';
  horizontalPosition: 'left' | 'center' | 'right';
};

const AlertMessage = ({
  sx,
  condition,
  setCondition,
  text,
  verticalPosition,
  horizontalPosition,
}: AlertMessageProps) => {
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: verticalPosition,
    horizontal: horizontalPosition,
  });
  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    if (condition && setCondition) {
      setCondition(false);
    }

    setState({ ...state, open: false });
  };

  useEffect(() => {
    if (condition) {
      setState({ ...state, open: true });
    }
  }, [condition, state]);

  return (
    <Snackbar
      sx={{ mt: 6, zIndex: 990 }}
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      onClose={handleClose}
      message=""
      key={vertical + horizontal}
    >
      <Alert onClose={handleClose} sx={{ width: '100%', ...sx }}>
        {text}
      </Alert>
    </Snackbar>
  );
};

export default AlertMessage;
