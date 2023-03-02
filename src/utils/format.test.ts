import { formatNumber } from './format';

describe('formatNumber', () => {
  it('should return formated number', () => {
    expect(formatNumber(10000)).toBe('10,000');
  });
});
