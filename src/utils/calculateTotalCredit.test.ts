import { calculateTotalCredit } from './calculateTotalCredit';

const items = [
  {
    name: 'Product 1',
    id: '1',
    displayName: 'Product 1',
    metadata: {
      blockPricingStrategy: {
        credits: 100,
        name: 'Product 1',
      },
    },
  },
  {
    name: 'Product 2',
    id: '2',
    displayName: 'Product 2',
    metadata: {
      blockPricingStrategy: {
        credits: 200,
        name: 'Product 2',
      },
    },
  },
];
describe('calculateTotalCredit', () => {
  it('should return total credit', () => {
    expect(calculateTotalCredit(items)).toBe(300);
  });
});
