export interface House {
  id: string;
  name: string;
  imageURL: string;
  price: number;
  discount: number;
  capacity: number;
  sold: number;
  tagNames: { [key: string]: string };
  tags: { [key: string]: boolean } | undefined;

  categories: string[];
}
