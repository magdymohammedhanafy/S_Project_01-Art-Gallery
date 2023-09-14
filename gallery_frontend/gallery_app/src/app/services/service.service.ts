import { Injectable } from '@angular/core';
import { IService } from '../Models/i-service';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  servList: IService[];
  constructor() {
    this.servList = [
      {
        id: 1,
        name: 'service 1',
        descreption:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit',
      },
      {
        id: 2,
        name: 'service 2',
        descreption:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit',
      },
      {
        id: 3,
        name: 'service 3',
        descreption:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit',
      },
      {
        id: 4,
        name: 'service 4',
        descreption:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit',
      },
    ];
  }
  getAllServices(): IService[] {
    return this.servList;
  }
}
