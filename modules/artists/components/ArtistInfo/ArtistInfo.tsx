import React, { memo, useMemo, useState } from 'react';
import { ArtistType } from '../../../../types/common.types';
import { Stack, Typography } from '@mui/material';
import { stringWrangler } from '../../../../utils';
import { ArtistShareButtons } from '../ArtistShareButtons';
import { useMutation } from 'react-query';
import { downVoteArtist, voteArtist } from '../../services/artists-api';
import useToggle from '../../../../hooks/utils/useToggle';
import { useUser } from '../../../../hooks/security/useUser';
import { useHasUserVoted } from '../../../../hooks/artworks/useUserInfo';
import { IArtist } from '../../../../interfaces';
import { ArtistVoteType } from '../../../../types/common.types';

const ArtistInfo = ({ artist }: ArtistType) => {
  const { hasVoted } = useHasUserVoted(artist.likes, artist);
  const [updatedArtist, setUpdatedArtist] = useState<null | IArtist[]>(null);
  const { isAuthenticated, user } = useUser();
  const { isOpen, onClose, onOpen } = useToggle();
  const { mutate: upVote, isLoading } = useMutation(
    'vote-artist',
    (body: ArtistVoteType) => voteArtist(body),
    {
      onSuccess: (data) => setUpdatedArtist(data),
    }
  );
  const { mutate: downVote, isLoading: downVoteLoading } = useMutation(
    'vote-artist',
    (body: ArtistVoteType) => downVoteArtist(body),
    {
      onSuccess: (data) => setUpdatedArtist(data),
    }
  );

  const downVoteOrLogin = () => {
    return !isAuthenticated
      ? onOpen()
      : downVote({ identifier: artist.identifier, userId: user?._id });
  };

  const voteOrLogin = () => {
    return !isAuthenticated
      ? onOpen()
      : upVote({ identifier: artist.identifier, userId: user?._id });
  };

  const artistVoted = useMemo(() => {
    if (!updatedArtist) {
      return hasVoted;
    } else {
      //@ts-ignore
      return updatedArtist?.likes?.includes(user?._id);
    }
  }, [hasVoted, updatedArtist, user?._id]);

  const artistLikes = useMemo(() => {
    if (!updatedArtist) {
      return artist.likes.length;
    } else {
      //@ts-ignore
      return updatedArtist.likes?.length;
    }
  }, [updatedArtist, artist.likes.length]);

  return (
    <Stack
      spacing={2}
      sx={{
        display: 'flex',
        width: { xs: '100%', md: '50%' },
      }}
    >
      <Typography variant="h1">{artist.name}</Typography>
      <Typography sx={{ fontSize: 18, color: 'gray' }}>
        {stringWrangler.capitalizeString(artist.discipline)}
      </Typography>
      <Typography sx={{ fontSize: 18, color: 'gray' }}>
        {artist.country}
      </Typography>
      <Typography>Likes: {artistLikes}</Typography>
      <Typography>{artist.about}</Typography>
      <ArtistShareButtons
        isLoading={isLoading || downVoteLoading}
        isOpen={isOpen}
        artist={artist}
        onClose={onClose}
        onOpen={onOpen}
        artistVoted={artistVoted}
        voteOrLogin={voteOrLogin}
        downVoteOrLogin={downVoteOrLogin}
      />
    </Stack>
  );
};

export default memo(ArtistInfo);
