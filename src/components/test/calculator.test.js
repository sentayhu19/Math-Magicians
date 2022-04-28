/* eslint-disable no-unused-expressions */
import calaculate from '../../logic/calculate';

describe('Test for calaculate', () => {
  const number1 = [5, 10, 50, 34, 50];
  const number2 = [2, 10, 100, 3, 0];
  let test1;
  test('adding numbers', () => {
    test1 = calaculate({ next: number1[0], total: number2[0], operation: '+' }, '=');
    expect(test1.next).toBe(null);
    expect(test1.total).toBe('7');
    expect(test1.operation).toBe(null);
  }),
  test('subtracting numbers', () => {
    test1 = calaculate({ next: number1[1], total: number2[1], operation: '-' }, '=');
    expect(test1.next).toBe(null);
    expect(test1.total).toBe('0');
    expect(test1.operation).toBe(null);
  }), test('dividing numbers', () => {
    test1 = calaculate({ next: number1[2], total: number2[2], operation: '÷' }, '=');
    expect(test1.next).toBe(null);
    expect(test1.total).toBe('2');
    expect(test1.operation).toBe(null);
  }),
  test('Multiplying numbers', () => {
    test1 = calaculate({ next: number1[3], total: number2[3], operation: 'x' }, '=');
    expect(test1.next).toBe(null);
    expect(test1.total).toBe('102');
    expect(test1.operation).toBe(null);
  }),
  test('Negative number on Addition', () => {
    test1 = calaculate({ next: number1[3], total: number2[3], operation: '+' }, '+/-');
    test1 = calaculate({
      next: test1.next,
      total: test1.total,
      operation: test1.operation,
    }, '=');
    expect(test1.next).toBe(null);
    expect(test1.total).toBe('-31');
    expect(test1.operation).toBe(null);
  }),
  test('Negative number on subtracting', () => {
    test1 = calaculate({ next: number1[2], total: number2[1], operation: '-' }, '+/-');
    test1 = calaculate({
      next: test1.next,
      total: test1.total,
      operation: test1.operation,
    }, '=');
    expect(test1.next).toBe(null);
    expect(test1.total).toBe('60');
    expect(test1.operation).toBe(null);
  });
});
