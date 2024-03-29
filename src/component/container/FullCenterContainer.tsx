import {Box, styled} from "@mui/material";

const FullCenterContainer = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    boxSizing: 'border-box',
}));

export default FullCenterContainer;