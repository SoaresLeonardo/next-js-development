import { getStorageItem, setStorageItem } from '../../utils/LocalStorage';

describe('getLocalStorage', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });
  it('should return item from localStorage', () => {
    // window.localStorage.setItem('key', JSON.stringify('leonardo'));
    setStorageItem('key', 'leonardo');
    expect(getStorageItem('key')).toStrictEqual('leonardo');
  });
});

describe('setLocalStorage', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });
  it('should add the item to LocalStorage', () => {
    setStorageItem('key', 'henrique');

    expect(window.localStorage.getItem('key')).toStrictEqual(
      JSON.stringify('henrique')
    );
  });
});
