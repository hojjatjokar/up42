import { useEffect, useState } from 'react';
import { Product } from '@/types/product';
import { calculateTotalCredit } from '../../../../utils/calculateTotalCredit';
import { Button, Box, Typography } from '@mui/material';
import { OrderListItem } from './components/OrderListItem';

export type Props = {
  selected: Product[];
  onRemoveItem: Function;
  onSubmit: Function;
  credit: number;
};

const OrderList = ({ selected, onRemoveItem, onSubmit, credit }: Props) => {
  const [error, setError] = useState<string | null>(null);
  const totalCredit = calculateTotalCredit(selected);

  useEffect(() => {
    if (error) setError(null);
  }, [selected, credit]);

  return (
    <Box
      flex={1}
      height="calc(100vh - 56px)"
      width={240}
      position="fixed"
      top={56}
      right={0}
      display="flex"
      flexDirection="column"
      paddingRight={3}
      paddingBottom={1}>
      <Box flex={1} overflow="scroll" paddingRight={2}>
        <Typography padding={2}>Cart</Typography>
        <hr />
        {selected.length === 0 && (
          <Typography>Your order list is empty</Typography>
        )}
        {selected.map((item) => (
          <OrderListItem
            key={item.id}
            item={item}
            onRemoveItem={onRemoveItem}
          />
        ))}
      </Box>

      <Box flexBasis={12}>
        {error && <Typography color="red">{error}</Typography>}
        <Typography padding={2}>Total: {totalCredit} Credits</Typography>
        <Button
          fullWidth
          variant="contained"
          disabled={selected.length === 0}
          onClick={() => {
            if (totalCredit > credit) {
              setError('Your credit is not enough');
            } else {
              onSubmit(totalCredit);
            }
          }}>
          Buy now
        </Button>
      </Box>
    </Box>
  );
};

export { OrderList };
