import React, { memo } from 'react';
import NextLink, {LinkProps} from 'next/link';
import { ChildrenProps } from '../../../types/common.types';


const ELink = ({
                   href,
                   children,
                   className,
                   target,
                   rel,
                   ...props
                 }: LinkProps & ChildrenProps & { className?: string, target?: string, rel?: string }) => {
  return (
    <NextLink href={href} passHref {...props}>
      <a target={target} rel={rel} className={className}>
        {children}
      </a>
    </NextLink>
  );

};


export default memo(ELink);


