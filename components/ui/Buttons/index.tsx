import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import MuiLoadingButton, { LoadingButtonProps } from '@mui/lab/LoadingButton';
import GoogleIcon from '../Icons/GoogleIcon';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '../Icons/FacebookIcon'; // styled components

export const GoogleButton = (props: ButtonProps) => (
  <Button startIcon={<GoogleIcon sx={{ mr: 1 }} />} {...props} />
);

export const FacebookButton = (props: ButtonProps) => (
  <Button startIcon={<FacebookIcon sx={{ mr: 1 }} />} {...props} />
);

export const GithubButton = (props: ButtonProps) => (
  <Button startIcon={<GitHubIcon sx={{ mr: 1 }} />} {...props} />
);

export const LoadingButton = ({ loading, ...props }: LoadingButtonProps) => {
  if (loading) return <MuiLoadingButton {...props} loading />;

  return <Button {...props} />;
};
