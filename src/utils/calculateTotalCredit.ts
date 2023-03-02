import { Product } from '@/types/product';

const calculateTotalCredit = (items: Product[]) => {
  let total = 0;

  items.forEach(
    (item) => (total += item.metadata.blockPricingStrategy.credits)
  );

  return total;
};

export { calculateTotalCredit };
