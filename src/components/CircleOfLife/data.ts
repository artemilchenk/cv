export interface ICircleItem {
  id: number;
  title: string;
  value: string;
}

export type TCircleData = ICircleItem[];

export const circleData: TCircleData = [
  {
    id: 1,
    title: "Name",
    value: "Artem Ilchenko",
  },
  {
    id: 2,
    title: "Age",
    value: "31",
  },
  {
    id: 3,
    title: "Exp-ce",
    value: "React: 1 year - commercial, Nest: 0.5 year - noncommercial",
  },
  { id: 4, title: "Name", value: "Artem Ilchenko" },
  {
    id: 5,
    title: "Age",
    value: "31",
  },
  {
    id: 6,
    title: "Exp-ce",
    value: "React: 1 year - commercial, Nest: 0.5 year - noncommercial",
  },
];
