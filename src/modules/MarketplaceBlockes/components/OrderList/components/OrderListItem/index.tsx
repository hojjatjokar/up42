import { Product } from '@/types/product';
import { Button, Typography, Box } from '@mui/material';

type Props = {
  item: Product;
  onRemoveItem: Function;
};

const OrderListItem = ({ item, onRemoveItem }: Props) => (
  <Box
    display="flex"
    flexDirection="column"
    borderBottom="1px solid"
    borderColor="grey">
    <Typography>{item.displayName}</Typography>
    <Box alignSelf="flex-end">
      <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }}>
        {item.metadata.blockPricingStrategy.credits} Credits
      </Typography>
    </Box>
    <Button onClick={() => onRemoveItem(item)}>Remove</Button>
  </Box>
);

export { OrderListItem };
