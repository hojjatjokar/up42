import { Product } from '@/types/product';

export type SelectedItemsHashMap = {
  [key: string]: boolean;
};

const createSelectedItemsHashMap = (items: Product[]): SelectedItemsHashMap => {
  const hashMap: SelectedItemsHashMap = {};

  for (const item of items) {
    hashMap[item.id] = true;
  }

  return hashMap;
};

export { createSelectedItemsHashMap };
