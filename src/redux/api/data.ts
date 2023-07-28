// import * as images from '../../assets';

export const orders = [
  {
    id: 1,
    title: 'Нове надходження 1',
    date: '2017-06-29 12:09:33',
    description: 'desc',
  },
  {
    id: 2,
    title: 'Нове надходження 2',
    date: '2017-06-29 12:09:33',
    description: 'desc',
  },
  {
    id: 3,
    title: 'Нове надходження 3',
    date: '2017-06-29 12:09:33',
    description: 'desc',
  },
];

export const products = [
  {
    id: 1,
    serialNumber: 1234,
    isNew: 1,
    photo: 'images.monitor',
    title: 'Acer Predator',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '16 червня 2023 р.',
      end: '16 червня 2026 р.',
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 },
    ],
    order: 1,
    date: '2017-06-29 12:09:33',
  },
  {
    id: 2,
    serialNumber: 1234,
    isNew: 1,
    photo: 'images.phone',
    title: 'iPhone 14 Pro Max',
    type: 'Phones',
    specification: 'Specification 1',
    guarantee: {
      start: '16 червня 2023 р.',
      end: '16 червня 2026 р.',
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 },
    ],
    order: 2,
    date: '2017-06-29 12:09:33',
  },
  {
    id: 3,
    serialNumber: 1234,
    isNew: 1,
    photo: 'images.accessories',
    title: 'Apple accessories',
    type: 'Accessories',
    specification: 'Specification 1',
    guarantee: {
      start: '16 червня 2023 р.',
      end: '16 червня 2026 р.',
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 },
    ],
    order: 3,
    date: '2017-06-29 12:09:33',
  },
];
