import React from "react";
import { SHome } from "./styled";
import { CircleOfLife } from "../../components/CircleOfLife";
import { circleData } from "../../components/CircleOfLife/data";

interface IHomeProps {}

export const Home: React.FunctionComponent<IHomeProps> = () => {
  return (
    <SHome>
      <CircleOfLife data={circleData} />
    </SHome>
  );
};
