export interface Event {
  id: string;
  name: string;
  date: Date;
  location: string;
  description: string;
  imageUrl: string;
  category: string;
  price?: number;
}
