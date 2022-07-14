import React from 'react';
import NextLink, {LinkProps} from 'next/link';
import {Link, LinkProps as MuiLinkProps} from '@mui/material';


type NextMuiLink = MuiLinkProps & { linkProps?: LinkProps, href: string }

export const NextMuiLink = ({href, linkProps, ...props}: NextMuiLink) => {
    return (
        <NextLink href={href} passHref {...linkProps}>
            <Link {...props} />
        </NextLink>
    );
};



