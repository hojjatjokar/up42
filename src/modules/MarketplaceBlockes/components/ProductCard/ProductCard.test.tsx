import { render } from '@testing-library/react';
import { ProductCard, Props } from '.';

const fakeData: Props = {
  product: {
    name: 'Product name',
    id: '1',
    displayName: 'Product name',
    metadata: { blockPricingStrategy: { credits: 100, name: 'Credit' } },
  },
  onClick: jest.fn(),
  isSelected: false,
};

const arrange = (props = fakeData) => {
  return render(<ProductCard {...props} />);
};

describe('ProductCard', () => {
  it('should render properly', () => {
    const { getByText } = arrange();

    expect(getByText('Product name')).toBeInTheDocument();
    expect(getByText('100 Credits')).toBeInTheDocument();
    expect(getByText('Add to cart')).toBeEnabled();
  });

  it('should be disabled when already selected', () => {
    const { getByText } = arrange({ ...fakeData, isSelected: true });

    expect(getByText('Add to cart')).toBeDisabled();
  });
});
