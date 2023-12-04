import styled from "styled-components";

export const SCircleOfLife = styled.div({
  height: "380px",
  width: "380px",
  borderRadius: "50%",
  background: "red",
  position: "relative",
});

export const SCircleOfLifeItem = styled.div<{
  defaultangle: number;
  priority: number;
}>(({ defaultangle, priority }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: priority,
  height: "380px",
  width: "380px",
  borderRadius: "50%",
  transform: `rotate(${defaultangle}deg)`,
}));

export const SCircleOfLifeValue = styled.div<{ defaultangle: number }>(
  ({ defaultangle }) => ({
    width: "max-content",
    transform: `rotate(${-defaultangle}deg)`,
  })
);

export const SCircleOfLifeRotator = styled.div<{ rotateangle: number }>(
  ({ rotateangle }) => ({
    height: "268px",
    width: "268px",
    background: "red",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: `translate(-50%, -50%) rotate(${rotateangle}deg)`,
    transition: "all 1s",
    zIndex: 1000,
  })
);

export const SCircleOfLifeArrow = styled.div({
  height: "28px",
  width: "28px",
  background: "red",
  transform: `translate(-50%, -50%)`,
});
