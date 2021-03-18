import { IOrder } from '@/client/interfaces/IOrder';
import { IResponse } from '@/client/interfaces/IResponse';

export const ORDER_MOCK: IResponse<IOrder[]> = {
    success: true,
    data: [
        {
            id: '6005ab200f7cd41e6bbacb10',
            paymentMethod: 'giftcard',
            giftCard: 'DSGFWWT',
            creditCard: null,
            total: 48.65,
            userId: '6005aa690f7cd41e6bbacafe',
            date: '2021-01-18T15:37:04.357Z',
            products: [
                {
                    itemId: '6005ab200f7cd41e6bbacb11',
                    productId: '6005a9ef0a92001e4be84994',
                    price: 33.65,
                    additionals: [
                        {
                            id: '6005a9ef0a92001e4be84995',
                            name: 'spicy mayo',
                            description: 'dipping sauce',
                            price: 2,
                            quantity: 1
                        },
                        {
                            id: '6005a9ef0a92001e4be84996',
                            name: 'black olives sauce',
                            description: 'dipping sauce',
                            price: 1.5,
                            quantity: 1
                        }
                    ],
                    total: 37.15,
                    quantity: 1,
                    review: 0,
                    name: 'Fried Chicken',
                    image: 'assets/dishes/dish27.jpg'
                },
                {
                    itemId: '6005ab200f7cd41e6bbacb12',
                    productId: '6005a9ef0a92001e4be8497c',
                    price: 10,
                    additionals: [
                        {
                            id: '6005a9ef0a92001e4be8497d',
                            name: 'condensed milk',
                            description: 'add sweet flavor',
                            price: 1,
                            quantity: 1
                        },
                        {
                            id: '6005a9ef0a92001e4be8497e',
                            name: 'lemon juice',
                            description: 'mix of flavor',
                            price: 0.5,
                            quantity: 1
                        }
                    ],
                    total: 11.5,
                    quantity: 1,
                    review: 0,
                    name: 'Energy Green Juice',
                    image: 'assets/dishes/dish19.jpg'
                }
            ]
        },
        {
            id: '6005aaef0f7cd41e6bbacb07',
            paymentMethod: 'giftcard',
            giftCard: 'HGKWAN',
            creditCard: null,
            total: 96.9,
            userId: '6005aa690f7cd41e6bbacafe',
            date: '2021-01-18T15:36:15.419Z',
            products: [
                {
                    itemId: '6005aaef0f7cd41e6bbacb08',
                    productId: '6005a9ef0a92001e4be84949',
                    price: 18,
                    additionals: [
                        {
                            id: '6005a9ef0a92001e4be8494a',
                            name: 'mixed salad leaves',
                            description: '50g of salads',
                            price: 8,
                            quantity: 1
                        },
                        {
                            id: '6005a9ef0a92001e4be8494b',
                            name: 'parmesan cheese',
                            description: 'contianer with 15g',
                            price: 1,
                            quantity: 1
                        }
                    ],
                    total: 27,
                    quantity: 1,
                    comments: 'Can you add extra prawns ?',
                    review: 0,
                    name: 'Chilli Prawn Linguine',
                    image: 'assets/dishes/dish2.jpg'
                },
                {
                    itemId: '6005aaef0f7cd41e6bbacb09',
                    productId: '6005a9ef0a92001e4be8495e',
                    price: 11.2,
                    additionals: [
                        {
                            id: '6005a9ef0a92001e4be8495f',
                            name: 'green olive dressing',
                            description: 'flavorful boost',
                            price: 2,
                            quantity: 1
                        },
                        {
                            id: '6005a9ef0a92001e4be84960',
                            name: 'garlic bread',
                            description: 'a bread basket',
                            price: 4.5,
                            quantity: 1
                        }
                    ],
                    total: 17.7,
                    quantity: 1,
                    review: 0,
                    name: 'Summer Radish',
                    image: 'assets/dishes/dish9.jpg'
                },
                {
                    itemId: '6005aaef0f7cd41e6bbacb0a',
                    productId: '6005a9ef0a92001e4be84979',
                    price: 3.5,
                    additionals: [
                        {
                            id: '6005a9ef0a92001e4be8497a',
                            name: 'ice cubes',
                            description: 'cup with ices',
                            price: 0,
                            quantity: 1
                        }
                    ],
                    total: 7,
                    quantity: 2,
                    review: 0,
                    name: 'Guarana Soft Drink',
                    image: 'assets/dishes/dish18.jpg'
                },
                {
                    itemId: '6005aaef0f7cd41e6bbacb0b',
                    productId: '6005a9ef0a92001e4be8498b',
                    price: 14.6,
                    additionals: [
                        {
                            id: '6005a9ef0a92001e4be8498c',
                            name: 'short coffee',
                            description: 'espresso machine',
                            price: 4,
                            quantity: 2
                        }
                    ],
                    total: 45.2,
                    quantity: 2,
                    review: 0,
                    name: 'Cheesecake',
                    image: 'assets/dishes/dish24.jpg'
                }
            ]
        }
    ]
};
