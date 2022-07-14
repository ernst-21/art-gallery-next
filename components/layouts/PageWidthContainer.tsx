import { ChildrenProps } from '../../types/common.types';
import Box, { BoxProps } from '@mui/material/Box';


const PageWidthContainer = ({ children, ...props }: ChildrenProps & BoxProps) => {

    return (
        <Box className={'page-wrapper'} {...props}>
            {children}
        </Box>
    );

};

export default PageWidthContainer;