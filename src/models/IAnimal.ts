export default interface IAnimal {
  id: number;
  name: string;
  latinName: string;
  yearOfBirth: number;
  shortDescription: string;
  imageUrl: string;
  longDescription: string;
  medicine: string;
  isFed: boolean;
  lastFed: string;
}

export interface AllAnimal {
  id: number;

  imageUrl: string;

  name: string;

  yearOfBirth: number;

  shortDescription: string;

  latinName: string;

  longDescription: string;

  isFed: boolean;

  lastFed: string;
}
