import { add } from './add';

describe('add func', () => {
  it('should return the some of the two params', () => {
    const result = add(1, 2);

    expect(result).toEqual(3);
  });
});
