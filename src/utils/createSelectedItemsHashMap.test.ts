import { createSelectedItemsHashMap } from './createSelectedItemsHashMap';
import { Product } from '../types/product';

const products: Product[] = [
  {
    name: 'Product 1',
    id: '1',
    displayName: 'Product 1',
    metadata: { blockPricingStrategy: { credits: 100, name: 'Credit' } },
  },
];

describe('createSelectedItemsHashMap', () => {
  it('should return hash map for items arrya', () => {
    expect(createSelectedItemsHashMap(products)).toEqual({ '1': true });
  });
});
