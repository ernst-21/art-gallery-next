import React from 'react';

import { socialItems } from '../../../../constants/socialItems';
import { Box } from '@mui/material';

type SocialIconProps = {
  icon: any;
  shareButton: any;
  name: string;
  title?: string;
  hasHashTag?: boolean;
  hashtag?: string;
  round?: boolean;
  url: string | undefined;
};

const SocialIcon = ({
  icon,
  shareButton,
  title,
  hasHashTag,
  hashtag,
  round,
  url,
}: SocialIconProps) => {
  const Icon = icon;
  const ShareButton = shareButton;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: 0.3,
        mt: 0.7,
        mx: 0.2,
      }}
    >
      {hasHashTag ? (
        <ShareButton url={url} hashtag={hashtag} separator=":: ">
          <Icon size={32} round={round} />
        </ShareButton>
      ) : (
        <ShareButton url={url} title={title} separator=":: ">
          <Icon size={32} round={round} />
        </ShareButton>
      )}
    </Box>
  );
};

type SocialIconsListProps = Partial<SocialIconProps>;

const SocialIconsList = ({ url, hashtag, round }: SocialIconsListProps) => {
  return (
    <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'}>
      {socialItems?.map((item) => (
        <SocialIcon
          key={item?.name}
          icon={item?.icon}
          shareButton={item?.shareButton}
          name={item?.name}
          hasHashTag={item?.hasHashTag}
          hashtag={hashtag}
          url={url}
          round={round}
        />
      ))}
    </Box>
  );
};

export default SocialIconsList;
