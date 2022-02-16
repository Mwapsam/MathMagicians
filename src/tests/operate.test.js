import operate from '../logic/Operate';

describe('testing operators', () => {
  test('test addition', () => {
    expect(operate(3, 5, '+')).toBe('8');
  });
  test('testing subtraction', () => {
    expect(operate(7, 9, '-')).toBe('-2');
  });
  test('testing multiplication', () => {
    expect(operate(5, 4, 'x')).toBe('20');
  });
  test('testing divission', () => {
    expect(operate(21, 7, '÷')).toBe('3');
  });
  test('testing modulus', () => {
    expect(operate(15, 4, '%')).toBe('3');
  });
});
