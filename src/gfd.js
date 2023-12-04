const circleData = [
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

function onRotate(arr, startId, endId, span) {
  let stepsForward = 0;
  const forwardArr1 = arr.slice(startId);
  const reachedForward1 = forwardArr1.find((item) => {
    stepsForward = stepsForward + 1;
    return item.id === endId;
  });

  if (!reachedForward1) stepsForward = 0;

  if (!stepsForward) {
    const forwardArr2 = [...arr.slice(startId), ...arr];
    forwardArr2.find((item) => {
      stepsForward = stepsForward + 1;
      return item.id === endId;
    });
  }

  let stepsBackward = 0;

  const backwardArr1 = arr.slice(endId - 1, startId - 1).reverse();

  const reachedBackward1 = backwardArr1.find((item) => {
    stepsBackward = stepsBackward + 1;
    return item.id === endId;
  });

  if (!reachedBackward1) stepsBackward = 0;

  if (!stepsBackward) {
    const backwardArr2 = [
      ...arr.slice(0, startId - 1).reverse(),
      ...arr.reverse(),
    ];
    backwardArr2.find((item) => {
      stepsBackward = stepsBackward + 1;
      return item.id === endId;
    });
  }

  const shortWay = Math.min(stepsForward, stepsBackward);

  const direction = shortWay === stepsForward ? 1 : -1;

  return shortWay * span * direction;
}

console.log(onRotate(circleData, 2, 6, 60));
