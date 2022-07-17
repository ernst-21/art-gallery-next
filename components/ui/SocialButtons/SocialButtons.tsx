import React, {memo} from 'react';
import { Button } from '@mui/material';
import { signIn } from 'next-auth/react';
import { FacebookButton, GoogleButton } from '../Buttons';
import Stack from '@mui/material/Stack';

const SocialButtons = ({providers}: any) => {

    const renderProvider = () => {
        {Object.values(providers).map((prov: any) => {
            switch (prov.id) {
                case 'google':
                    return <GoogleButton key={prov.id}
                                         fullWidth
                                         variant='outlined'
                                         color='primary'
                                         sx={{ mb: 1, height: '48px' }}
                                         onClick={() => signIn(prov.id)} />
                case 'credentials':
                    return <div key={prov.id}></div>;
                case 'facebook':
                    return <FacebookButton key={prov.id}
                                           fullWidth
                                           variant='outlined'
                                           color='primary'
                                           sx={{ mb: 1, height: '48px' }}
                                           onClick={() => signIn(prov.id)} />
                default:
                    return <Button
                        key={prov.id}
                        fullWidth
                        variant='outlined'
                        color='primary'
                        sx={{ mb: 1, height: '48px' }}
                        onClick={() => signIn(prov.id)}
                    />
            }

        })}
    }

    return (
        <Stack>
            {renderProvider()}
        </Stack>
    )


};

export default memo(SocialButtons);
