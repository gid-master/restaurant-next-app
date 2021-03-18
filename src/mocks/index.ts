import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { USER_MOCK } from './UserMock';
import { PRODUCT_MOCK } from './ProductMock';
import { ORDER_MOCK } from './OrderMock';

const createMock = () => {
    console.log('MOCK ENABLED');

    const mock = new MockAdapter(axios);

    // AUTHENTICATION
    mock.onGet('/user/authenticate').reply(200, { ...USER_MOCK });
    mock.onPost('/user/login').reply(200, { ...USER_MOCK });
    mock.onPost('/user/register').reply(200, { ...USER_MOCK });
    mock.onPost('/user/push').reply((config) => [200, { success: true, data: JSON.parse(config.data) }]);

    // PRODUCTS
    mock.onGet('/product').reply(200, { ...PRODUCT_MOCK });

    // ORDER
    mock.onGet('/order').reply(200, { ...ORDER_MOCK });
    mock.onPost('/order').reply((config) => [200, { success: true, data: JSON.parse(config.data) }]);
    mock.onPost('/order/review').reply((config) => [200, { success: true, data: JSON.parse(config.data) }]);
};

export default createMock;
