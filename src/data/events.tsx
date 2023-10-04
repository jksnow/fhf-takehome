import img from "../assets/e1.jpg";
export type Event = {
  id: number;
  name: string;
  date: string;
  price: number;
  imageUrl: string;
};

export const events: Event[] = [
  {
    id: 1,
    name: "Concert 1",
    date: "October 15, 2023",
    price: 30,
    imageUrl: img,
  },
  {
    id: 2,
    name: "Concert 2",
    date: "November 5, 2023",
    price: 25,
    imageUrl: img,
  },
  {
    id: 3,
    name: "Concert 3",
    date: "December 20, 2023",
    price: 40,
    imageUrl: img,
  },
];
