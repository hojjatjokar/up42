import { render } from '@testing-library/react';
import { OrderListItem } from '.';

const fakeData = {
  item: {
    name: 'Product name',
    id: '1',
    displayName: 'Product name',
    metadata: {
      blockPricingStrategy: {
        credits: 2,
        name: 'Credit',
      },
    },
  },
  onRemoveItem: jest.fn(),
};

const arrange = (props = fakeData) => {
  return render(<OrderListItem {...props} />);
};

describe('OrderListItem', () => {
  it('should render properly', () => {
    const { getByText } = arrange();

    expect(getByText('Product name')).toBeInTheDocument();
    expect(getByText('2 Credits')).toBeInTheDocument();
    expect(getByText('Remove')).toBeInTheDocument();
  });
});
