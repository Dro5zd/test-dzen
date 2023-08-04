import {SortProducts} from "../../types/SortProducts";
import monitor from '../../assets/images/monitor.png'
import phone from '../../assets/images/phone.png'
import gameConsole from '../../assets/images/console.png'
import laptop from '../../assets/images/laptop.png'
import controller from '../../assets/images/controller.png'

interface ImageAddresses {
    [key: string]: string;
}

export const imageAddresses: ImageAddresses = {
    [SortProducts.ALL]: '',
    [SortProducts.MONITORS]: monitor,
    [SortProducts.PHONES]: phone,
    [SortProducts.CONSOLES]: gameConsole,
    [SortProducts.LAPTOPS]: laptop,
    [SortProducts.ACCESSORIES]: controller,
};

interface ProductTitles {
    [key: string]: string;
}

export const productTitles: ProductTitles = {
    [SortProducts.ALL]: '',
    [SortProducts.MONITORS]: 'Asus ROG Swift PG-8q',
    [SortProducts.PHONES]: 'Huawei Honor 7 Honor 7A',
    [SortProducts.CONSOLES]: 'Nintendo Switch',
    [SortProducts.LAPTOPS]: 'Asus ROG STRIX GL503',
    [SortProducts.ACCESSORIES]: 'Xbox controller',
};

export const orders = [
    {
        id: 1,
        title: 'Long long long order name',
        date: '2017-06-29 12:09:33',
        description: 'desc',
    },
    {
        id: 2,
        title: 'Long long order name',
        date: '2017-06-29 12:09:33',
        description: 'desc',
    },
    {
        id: 3,
        title: 'Long order name',
        date: '2017-06-29 12:09:33',
        description: 'desc',
    },
];

export const products = [
    {
        id: 1,
        serialNumber: 'SN-NUNX4QYH',
        isNew: 1,
        photo: imageAddresses[SortProducts.MONITORS],
        title: productTitles[SortProducts.MONITORS],
        type: SortProducts.MONITORS,
        specification: 'Specification 1',
        guarantee: {
            start: '2021-11-30T00:00:00.000Z',
            end: '2022-11-30T00:00:00.000Z',
        },
        price: [
            {value: 100, symbol: 'USD', isDefault: 0},
            {value: 3650, symbol: 'UAH', isDefault: 1},
        ],
        order: 1,
        date: '2017-06-29 12:09:33',
    },
    {
        id: 2,
        serialNumber: 'SN-EK899QLZ',
        isNew: 1,
        photo: imageAddresses[SortProducts.PHONES],
        title: productTitles[SortProducts.PHONES],
        type: SortProducts.PHONES,
        specification: 'Specification 1',
        guarantee: {
            start: '2023-06-16T00:00:00.000Z',
            end: '2026-06-16T00:00:00.000Z',
        },
        price: [
            {value: 100, symbol: 'USD', isDefault: 0},
            {value: 3650, symbol: 'UAH', isDefault: 1},
        ],
        order: 2,
        date: '2017-06-29 12:09:33',
    },
    {
        id: 3,
        serialNumber: 'SN-H9L8MFJ2',
        isNew: 1,
        photo: imageAddresses[SortProducts.LAPTOPS],
        title: productTitles[SortProducts.LAPTOPS],
        type: SortProducts.LAPTOPS,
        specification: 'Specification 1',
        guarantee: {
            start: '2023-03-08T00:00:00.000Z',
            end: '2026-03-08T00:00:00.000Z',
        },
        price: [
            {value: 100, symbol: 'USD', isDefault: 0},
            {value: 3650, symbol: 'UAH', isDefault: 1},
        ],
        order: 3,
        date: '2017-06-29 12:09:33',
    },
    {
        id: 4,
        serialNumber: 'SN-YGRKAWP',
        isNew: 1,
        photo: imageAddresses[SortProducts.CONSOLES],
        title: productTitles[SortProducts.CONSOLES],
        type: SortProducts.CONSOLES,
        specification: 'Specification 1',
        guarantee: {
            start: '2019-09-21T00:00:00.000Z',
            end: '2024-09-21T00:00:00.000Z',
        },
        price: [
            {value: 100, symbol: 'USD', isDefault: 0},
            {value: 3650, symbol: 'UAH', isDefault: 1},
        ],
        order: 3,
        date: '2017-06-29 12:09:33',
    },
    {
        id: 5,
        serialNumber: 'SN-UPXRKW6G',
        isNew: 1,
        photo: imageAddresses[SortProducts.ACCESSORIES],
        title: productTitles[SortProducts.ACCESSORIES],
        type: SortProducts.ACCESSORIES,
        specification: 'Specification 1',
        guarantee: {
            start: '2021-02-07T00:00:00.000Z',
            end: '2024-02-07T00:00:00.000Z',
        },
        price: [
            {value: 100, symbol: 'USD', isDefault: 0},
            {value: 3650, symbol: 'UAH', isDefault: 1},
        ],
        order: 3,
        date: '2017-06-29 12:09:33',
    },
];
