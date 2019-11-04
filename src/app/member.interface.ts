import {ILocation} from './location.interface';

export interface IMember {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  height: string;
  weight: string;
  address: string;
  location: ILocation;
}
