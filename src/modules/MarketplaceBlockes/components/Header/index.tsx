import { Box, Typography } from '@mui/material';
import { formatNumber } from '../../../../utils/format';

type Props = {
  credit: number;
};

const Header = ({ credit }: Props) => (
  <Box
    display="flex"
    gap={1}
    position={{ lg: 'fixed' }}
    justifyContent={{ lg: 'flex-end' }}
    paddingRight={{ lg: 28 }}
    top={0}
    right={0}
    padding={2}
    width="100%"
    bgcolor={{ xs: '#f1f1f1', lg: 'white' }}
    zIndex={2}>
    <Typography>Credits:</Typography>
    <Typography sx={{ fontWeight: 'bold' }}>{formatNumber(credit)}</Typography>
  </Box>
);

export { Header };
