import React, { useMemo, memo, useState, SyntheticEvent } from 'react';
import { CardContent, Stack } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import UserActionsButtons from '../../../../components/ui/UserActionsButtons/UserActionsButtons';
import { IArtwork } from '../../../../interfaces';
import { stringWrangler } from '../../../../utils';
import { NextMuiLink } from '../../../../components/ui/Link/NextMuiLink';
import useToggle from '../../../../hooks/utils/useToggle';
import { useUser } from '../../../../hooks/security/useUser';
import { useMutation } from 'react-query';
import { ArtworkVoteType } from '../../../../types/common.types';
import { downVoteArtwork, voteArtwork } from '../../services/artworks-api';

type CardContentProps = {
  artwork: IArtwork;
};

const ArtworkCardContent = ({ artwork }: CardContentProps) => {
  const { isOpen, onClose, onOpen } = useToggle();
  const { isAuthenticated, user } = useUser();
  const [updatedArtwork, setUpdatedArtwork] = useState(null);
  const { mutate: voteArtworkByClick } = useMutation(
    ['artwork-vote', artwork?._id],
    (body: ArtworkVoteType) => voteArtwork(body),
    {
      //@ts-ignore
      onSuccess: (data) => setUpdatedArtwork(data),
    }
  );

  const { mutate: downVoteArtworkByClick } = useMutation(
    ['artwork-downVote', artwork?._id],
    (body: ArtworkVoteType) => downVoteArtwork(body),
    {
      //@ts-ignore
      onSuccess: (data) => setUpdatedArtwork(data),
    }
  );

  const artworkToRender = useMemo(() => {
    return updatedArtwork ? updatedArtwork : artwork;
  }, [artwork, updatedArtwork]);

  const likes = useMemo(() => {
    return artworkToRender?.voters?.length;
  }, [artworkToRender?.voters]);

  const artistIdentifier = useMemo(() => {
    if (artwork && !artwork.featured) {
      return stringWrangler.joinNames(artwork?.artist, artwork?.artist_Id);
    } else return '';
  }, [artwork]);

  const downVoteOrLogin = (e: SyntheticEvent) => {
    e.stopPropagation();
    return !isAuthenticated
      ? onOpen()
      : downVoteArtworkByClick({ artworkId: artwork._id!, userId: user?._id });
  };

  const voteOrLogin = (e: SyntheticEvent) => {
    e.stopPropagation();
    return !isAuthenticated
      ? onOpen()
      : voteArtworkByClick({ artworkId: artwork._id!, userId: user?._id });
  };

  return (
    <>
      <CardContent>
        <Stack spacing={2}>
          <Typography variant="h6" component="h1">
            {artwork?.name}
          </Typography>

          <Typography variant="body1" color="text.secondary">
            {artwork?.category.charAt(0).toUpperCase() +
              artwork?.category.slice(1)}
          </Typography>
          {artwork?.featured && (
            <Typography variant="body2" color="text.secondary">
              Right now in {artwork?.gallery} gallery
            </Typography>
          )}
          {!artwork?.featured && (
            <>
              <NextMuiLink href={`/artists/${artistIdentifier}`}>
                <Typography variant="body2" color="text.secondary">
                  {artwork?.artist}
                </Typography>
              </NextMuiLink>
              <Typography variant="body2" color="text.secondary">
                Likes: {likes}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price: ${artwork?.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Gallery: {artwork?.gallery}
              </Typography>
            </>
          )}
        </Stack>
      </CardContent>

      {!artwork?.featured && (
        <CardActions>
          <UserActionsButtons
            artwork={artworkToRender}
            isOpen={isOpen}
            onClose={onClose}
            onOpen={onOpen}
            downVoteOrLogin={downVoteOrLogin}
            voteOrLogin={voteOrLogin}
            isLoading={false}
          />
        </CardActions>
      )}
    </>
  );
};

export default memo(ArtworkCardContent);
