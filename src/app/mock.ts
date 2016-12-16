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
      'assets/images/1.jpg',
      'assets/images/b1.jpg'
    ],
    temperature: '+10'
  },
  {
    name: 'London',
    description: 'In England',
    phone: '5165 651 651 62',
    images: [
      'assets/images/2.jpg',
      'assets/images/b2.jpg'
    ],
    temperature: '-20'
  },
  {
    name: 'New York',
    description: 'In USA',
    phone: '5165 651 651 62',
    images: [
      'assets/images/3.jpg',
      'assets/images/b3.jpg'
    ],
    temperature: '0'
  }
];
