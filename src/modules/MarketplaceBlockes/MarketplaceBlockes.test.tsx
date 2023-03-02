import { fireEvent, render } from '@testing-library/react';
import { MarketplaceBlockes, Props } from '.';

const fakeData: Props = {
  data: [
    {
      name: 'Product 1',
      id: '1',
      displayName: 'Product 1',
      metadata: { blockPricingStrategy: { credits: 100, name: 'Credit' } },
    },
  ],
};

const arrange = (props = fakeData) => {
  return render(<MarketplaceBlockes {...props} />);
};

describe('MarketplaceBlocks', () => {
  it('should submit order forms when clicking on Buy now', () => {
    const { getByText, getAllByText } = arrange();

    expect(getByText('Product 1')).toBeInTheDocument();
    fireEvent.click(getByText('Add to cart'));
    expect(getAllByText('Product 1')).toHaveLength(2);

    fireEvent.click(getByText('Buy now'));

    expect(getByText('9,900')).toBeInTheDocument();
    expect(getAllByText('Product 1')).toHaveLength(1);
    expect(getByText('Your order list is empty')).toBeInTheDocument();
  });

  it('should remove  selected item from ', () => {
    const { getByText, getAllByText } = arrange();

    expect(getByText('Product 1')).toBeInTheDocument();
    fireEvent.click(getByText('Add to cart'));
    expect(getAllByText('Product 1')).toHaveLength(2);
    fireEvent.click(getByText('Remove'));
    expect(getAllByText('Product 1')).toHaveLength(1);
    expect(getByText('Your order list is empty')).toBeInTheDocument();
  });
});
