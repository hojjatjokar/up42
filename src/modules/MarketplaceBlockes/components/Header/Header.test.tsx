import { render } from '@testing-library/react';
import { Header } from '.';

const fakeCredit = 10000;

const arrange = () => {
  return render(<Header credit={fakeCredit} />);
};

describe('Header', () => {
  it('should render the credit', () => {
    const { getByText } = arrange();

    expect(getByText('10,000')).toBeInTheDocument();
  });
});
