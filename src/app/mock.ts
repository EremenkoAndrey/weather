export interface IItems {
  name:string,
  description: string,
  phone: string,
  images: string[],
  temperature: string
}
export let mockItems:IItems[] = [
  {
    name: 'Paris',
    description: 'In France',
    phone: '5165 651 651 62',
    images: [
      'images/1.jpg',
      'images/b1.jpg'
    ],
    temperature: '+10'
  },
  {
    name: 'London',
    description: 'In England',
    phone: '5165 651 651 62',
    images: [
      'images/2.jpg',
      'images/b2.jpg'
    ],
    temperature: '-20'
  },
  {
    name: 'New York',
    description: 'In USA',
    phone: '5165 651 651 62',
    images: [
      'images/3.jpg',
      'images/b3.jpg'
    ],
    temperature: '0'
  }
];
