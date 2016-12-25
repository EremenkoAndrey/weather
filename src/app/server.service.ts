import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

export interface ICiies {
  name:string,
  description: string,
  phone: string,
  images: string[],
  temperature: string,
  continent: string,
  selected?: boolean
}

let cities:ICiies[] = [
  {
    name: 'Paris',
    description: 'In France',
    phone: '5165 651 651 62',
    images: [
      'assets/images/1.jpg',
      'assets/images/b1.jpg'
    ],
    temperature: '+10',
    continent: 'Evrope'
  },
  {
    name: 'London',
    description: 'In England',
    phone: '5165 651 651 62',
    images: [
      'assets/images/2.jpg',
      'assets/images/b2.jpg'
    ],
    temperature: '-20',
    continent: 'Evrope'
  },
  {
    name: 'New York',
    description: 'In USA',
    phone: '5165 651 651 62',
    images: [
      'assets/images/3.jpg',
      'assets/images/b3.jpg'
    ],
    temperature: '0',
    continent: 'America'
  },
  {
    name: 'Prague',
    description: 'In Czechia',
    phone: '5165 651 651 62',
    images: [
      'assets/images/4.jpg',
      'assets/images/b4.jpg'
    ],
    temperature: '-2',
    continent: 'Evrope'
  },
  {
    name: 'Mexico City',
    description: 'In Mexico',
    phone: '5165 651 651 62',
    images: [
      'assets/images/5.jpg',
      'assets/images/b5.jpg'
    ],
    temperature: '+15',
    continent: 'America'
  },
  {
    name: 'Ottawa',
    description: 'In Canada',
    phone: '5165 651 651 62',
    images: [
      'assets/images/6.jpg',
      'assets/images/b6.jpg'
    ],
    temperature: '+2',
    continent: 'America'
  },
  {
    name: 'Ankara',
    description: 'In Turkey',
    phone: '5165 651 651 62',
    images: [
      'assets/images/7.jpg',
      'assets/images/b7.jpg'
    ],
    temperature: '+35',
    continent: 'Asia'
  },
  {
    name: 'Kathmandu',
    description: 'In Nepal',
    phone: '5165 651 651 62',
    images: [
      'assets/images/8.jpg',
      'assets/images/b8.jpg'
    ],
    temperature: '+55',
    continent: 'Asia'
  },
  {
    name: 'Pekin',
    description: 'In China',
    phone: '5165 651 651 62',
    images: [
      'assets/images/9.jpg',
      'assets/images/b9.jpg'
    ],
    temperature: '+55',
    continent: 'Asia'
  }
];

@Injectable()
export class ServerService {

  get citiesList():Observable<ICiies>{
    return Observable.from(cities);
  }

}
