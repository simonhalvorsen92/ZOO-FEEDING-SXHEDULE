export interface IAnimal {
  id: number;
  name: string;
  latinName: string;
  yearOfBirth: number;
  shortDescription: string;
  imageUrl: string;
  medicine: string;
  isFed: boolean;
  lastFed: number;
}
export interface IOmdbResponse {
  Search: IAnimal[];
}
