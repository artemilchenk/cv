import React from "react";
import { SCircleOfLifeItem, SCircleOfLifeItemTitle } from "./styled";
import { ICircleItem } from "./data";

interface ICircleOfLifeItemProps {
  data: ICircleItem;
  defaultangle: number;
  priority: number;
}

export const CircleOfLifeItem: React.FunctionComponent<
  ICircleOfLifeItemProps
> = ({ data, defaultangle, priority }) => {
  return (
    <SCircleOfLifeItem defaultangle={defaultangle} priority={priority}>
      <SCircleOfLifeItemTitle defaultangle={defaultangle}>
        {data.title}
      </SCircleOfLifeItemTitle>
    </SCircleOfLifeItem>
  );
};
