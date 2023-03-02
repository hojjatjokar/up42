import { render } from '@testing-library/react';
import { Props, ProductsList } from '.';

const fakeData: Props = {
  data: [
    {
      name: 'Product 1',
      id: '1',
      displayName: 'Product 1',
      metadata: { blockPricingStrategy: { credits: 100, name: 'Credit' } },
    },
    {
      name: 'Product 2',
      id: '2',
      displayName: 'Product 2',
      metadata: { blockPricingStrategy: { credits: 200, name: 'Credit' } },
    },
  ],
  onClick: jest.fn(),
  selectedItemsHashMap: { '1': true },
};

const arrange = (props = fakeData) => {
  return render(<ProductsList {...props} />);
};

describe('ProductsList', () => {
  it('should render list of products', () => {
    const { getByText } = arrange();
    expect(getByText('Product 1')).toBeInTheDocument();
    expect(getByText('Product 2')).toBeInTheDocument();
  });
});
