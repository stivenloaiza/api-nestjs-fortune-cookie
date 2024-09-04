import { calc, generateName } from './calc';
import * as getInfo from './calc';

describe('new test', () => {
  it('SUM', () => {
    expect(calc(1, 2)).toBe(3);
  });

  it('REST', () => {
    expect(calc(1, -5)).toBe(-4);
  });

  it('Match', () => {
    expect(generateName(false)).toMatch('GMT');
  });

  it('Error', () => {
    expect(() => generateName(true)).toThrow(Error);
  });

  it('fetchData mock', async () => {
    const spy = jest
      .spyOn(getInfo, 'fetchData')
      .mockResolvedValue({ user: 'Riwilin' });
    expect(await getInfo.getUserData()).toEqual('Riwilin');
    expect(spy).toHaveBeenCalled();
    spy.mockRestore(); // Restaura la implementación original después de la prueba
  });

  it('fetchData failed', async () => {
    expect(await getInfo.fetchData()).toBe('Error TypeError: fetch failed');
  });
});
