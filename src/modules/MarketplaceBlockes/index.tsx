import { useState, useMemo } from 'react';
import { Box } from '@mui/material';
import { Product } from '@/types/product';
import { ProductsList } from './components/ProductsList';
import { OrderList } from './components/OrderList';
import { Header } from './components/Header';
import { defaultCredit } from '../../utils/config';
import { createSelectedItemsHashMap } from '../../utils/createSelectedItemsHashMap';

export type Props = {
  data: Product[];
};

const MarketplaceBlockes = ({ data }: Props) => {
  const [credit, setCredit] = useState(defaultCredit);
  const [selectedItems, setSelectedItems] = useState<Product[]>([]);
  // This hashmap will be used to check if an item is selected
  // The reason for creating a hashmap is to reduce the time complexity from o(n) in the array to o(1)
  const selectedItemsHashMap = useMemo(
    () => createSelectedItemsHashMap(selectedItems),
    [selectedItems]
  );

  return (
    <Box paddingTop={2} paddingX={4}>
      <Header credit={credit} />

      <OrderList
        selected={selectedItems}
        onRemoveItem={(item: Product) => {
          setSelectedItems(
            selectedItems.filter((selectedItem) => selectedItem.id !== item.id)
          );
        }}
        credit={credit}
        onSubmit={(totalCredit: number) => {
          setCredit(credit - totalCredit);
          setSelectedItems([]);
        }}
      />

      <Box display="flex" gap={1} paddingRight={{ lg: 30 }} marginTop={7}>
        <ProductsList
          data={data}
          onClick={(item: Product) => {
            setSelectedItems([...selectedItems, item]);
          }}
          selectedItemsHashMap={selectedItemsHashMap}
        />
      </Box>
    </Box>
  );
};

export { MarketplaceBlockes };
