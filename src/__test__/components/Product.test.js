import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import ProductMock from '../../__mocks__/ProductMock';
import Product from '../../components/Product';

describe('<Product />', () => {
  test('Render del componente Product', () => {
    const product = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>
    );
    // Si nos da el valor de 1 es que sí está haciendo render el componente
    expect(product.length).toEqual(1);
  });
  // Simulamos el click y de esta forma saber si se está ejecutando bien este componente
  test('Comprobar el botón de comprar', () => {
    // Simulamos una función para que no tengamos que llamar la función original
    const handleAddToCart = jest.fn();
    const wrapper = mount(
      <ProviderMock>
        <Product
          product={ProductMock}
          handleAddToCart={handleAddToCart}
        />
      </ProviderMock>
    );
    wrapper.find('button').simulate('click');
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });
});