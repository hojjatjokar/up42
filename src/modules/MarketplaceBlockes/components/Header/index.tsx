import { Box, Typography } from '@mui/material';
import { formatNumber } from '../../../../utils/format';

type Props = {
  credit: number;
};

const Header = ({ credit }: Props) => (
  <Box
    display="flex"
    gap={1}
    position="fixed"
    top={0}
    right={0}
    padding={2}
    width="100%"
    justifyContent="flex-end"
    paddingRight={28}
    bgcolor="white"
    zIndex={2}>
    <Typography>Credits:</Typography>
    <Typography sx={{ fontWeight: 'bold' }}>{formatNumber(credit)}</Typography>
  </Box>
);

export { Header };
