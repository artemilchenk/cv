import React, { useEffect, useState } from "react";
import { TCircleData } from "./data";
import { CircleOfLifeItem } from "./CircleOfLifeItem";
import {
  SCircleOfLife,
  SCircleOfLifeArrow,
  SCircleOfLifeRotator,
} from "./styled";

function onRotate(
  arr: TCircleData,
  startId: number,
  endId: number,
  span: number
) {
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

interface ICircleOfLifeProps {
  data: TCircleData;
}

export const CircleOfLife: React.FunctionComponent<ICircleOfLifeProps> = ({
  data,
}) => {
  const span = 360 / (data.length || 1);
  const [rotateAngle, setRotateAngle] = useState<number>(0);
  const [activeItemId, setActiveItemId] = useState<number>(1);

  return (
    <SCircleOfLife>
      <SCircleOfLifeRotator rotateangle={rotateAngle}>
        <SCircleOfLifeArrow />
      </SCircleOfLifeRotator>
      {data.map((itemData, index) => {
        const defaultangle = span * index;
        return (
          <div
            key={itemData.id}
            onClick={() => {
              setActiveItemId((prevId) => {
                if (prevId === itemData.id) return prevId;
                setRotateAngle((prevAngle) => {
                  return (
                    prevAngle + onRotate([...data], prevId, itemData.id, span)
                  );
                });
                return itemData.id;
              });
            }}
          >
            <CircleOfLifeItem
              data={itemData}
              defaultangle={defaultangle}
              priority={100 + index}
            />
          </div>
        );
      })}
    </SCircleOfLife>
  );
};
