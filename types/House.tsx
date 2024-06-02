export interface House {
  id: string;
  imageURL: string;
  price: number;
  discount: number;
  name: string;
  capacity: number;
  sold: number;
  tagNames: { [key: string]: string };
  tags: { [key: string]: boolean } | undefined;
  categories: string[]; 
  latitude: number;
  longitude: number;
  galleryImages: string[];
  OptionsName: { [key: string]: string };
  Options: { [key: string]: boolean };
  metrage: number;
  bar: number;
  karbari: string;
  provience: string;
  city: string;
  address: string;
}
