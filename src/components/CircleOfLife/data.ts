interface ICircleValue {
  title: string;
  value: string;
  largetext?: boolean;
}

export interface ICircleItem {
  id: number;
  title: string;
  value: ICircleValue[];
  x: number;
  y: number;
}

export type TCircleData = ICircleItem[];

export const circleData: TCircleData = [
  {
    id: 1,
    title: "About",
    value: [
      { title: "Name", value: "Artem Ilchenko" },
      { title: "Age", value: "31" },
      { title: "Location", value: "Ukraine" },
      { title: "Language", value: "Ukrainian, English" },
    ],
    x: -260,
    y: -260,
  },
  {
    id: 2,
    title: "Link",
    value: [
      { title: "Instagram", value: "artem__ilchenko" },
      { title: "Phone", value: "+380936637141" },
      {
        title: "Linkedin",
        value: "linkedin.com/in/ilchenko-artem-228687230/",
        largetext: true,
      },
      { title: "Email", value: "artemilchenko999@gmail.com", largetext: true },
    ],
    x: 328,
    y: -140,
  },
  {
    id: 3,
    title: "Exp-ce",
    value: [
      {
        title: "React",
        value: "1 year - commercial",
      },
      {
        title: "Node",
        value: "1 year - noncommercial",
      },
    ],
    x: -140,
    y: 328,
  },
];
