import { useState } from 'react';
import { Box } from '@mui/material';
import { Product } from '@/types/product';
import { Header } from './components/Header';
import { defaultCredit } from '../../utils/config';

export type Props = {
  data: Product[];
};

const MarketplaceBlockes = ({ data }: Props) => {
  const [credit] = useState(defaultCredit);

  return (
    <Box paddingTop={2} paddingX={4}>
      <Header credit={credit} />
    </Box>
  );
};

export { MarketplaceBlockes };
