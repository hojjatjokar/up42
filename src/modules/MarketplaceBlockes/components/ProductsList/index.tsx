import { Box } from '@mui/material';
import { ProductCard } from '../ProductCard';
import { Product } from '../../../../types/product';

export type Props = {
  data: Product[];
  onClick: Function;
  selectedItemsHashMap: { [key: string]: boolean };
};

const ProductsList = ({ data, onClick, selectedItemsHashMap }: Props) => (
  <Box flex="4" flexDirection="row" display="flex" flexWrap="wrap" gap={1}>
    {data.map((item: Product) => (
      <ProductCard
        product={item}
        onClick={onClick}
        key={item.id}
        isSelected={selectedItemsHashMap[item.id]}
      />
    ))}
  </Box>
);

export { ProductsList };
