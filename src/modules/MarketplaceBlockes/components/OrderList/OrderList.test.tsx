import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { OrderList, Props } from './index';

const fakeData: Props = {
  selected: [],
  onRemoveItem: () => {},
  onSubmit: () => {},
  credit: 10000,
};

const arrange = (props = fakeData) => {
  return render(<OrderList {...props} />);
};

describe('Order', () => {
  it('should render the empty state properly', () => {
    const { getByText } = arrange();

    expect(getByText('Total: 0 Credits')).toBeInTheDocument();
    expect(getByText('Your order list is empty')).toBeInTheDocument();
    expect(getByText('Buy now')).toBeDisabled();
  });

  it('should render selected items in the list', () => {
    const { getByText } = arrange({
      ...fakeData,
      selected: [
        {
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
      ],
    });

    expect(getByText('Total: 2 Credits')).toBeInTheDocument();
    expect(getByText('Product name')).toBeInTheDocument();
    expect(getByText('Buy now')).toBeEnabled();
  });

  it('should prevent submit when credit is not enough', () => {
    const { getByText } = arrange({
      ...fakeData,
      selected: [
        {
          name: 'Product name',
          id: '1',
          displayName: 'Product name',
          metadata: {
            blockPricingStrategy: {
              credits: 20000,
              name: 'Credit',
            },
          },
        },
      ],
    });

    fireEvent.click(getByText('Buy now'));
    expect(getByText('Your credit is not enough')).toBeInTheDocument();
  });
});
