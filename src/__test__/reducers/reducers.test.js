import reducer from '../../reducers/';
import ProductMock from '../../__mocks__/ProductMock';

describe('Reducers', () => {
  test('Retornar Initial State', () => {
    // Default case
    expect(reducer({}, '')).toEqual({});
  });
  test('ADD_TO_CART', () => {
    const initialState = {
      cart: []
    };
    const payload = ProductMock;
    const action = {
      type: 'ADD_TO_CART',
      payload
    };
    const expected = {
      cart: [
        ProductMock
      ]
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
  test('REMOVE_FROM_CART', () => {
    const initialState = {
      cart: [
        ProductMock
      ]
    }
    const payload = ProductMock;
    const action = {
      type: 'REMOVE_FROM_CART',
      payload
    };
    const expected = {
      cart: []
    }
    expect(reducer(initialState, action)).toEqual(expected);
  });
});