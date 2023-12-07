import styled, { css, keyframes } from "styled-components";

export const SCircleOfLife = styled.div({
  height: "380px",
  width: "380px",
  borderRadius: "50%",
  background: "lightgray",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const SCircleContent = styled(SCircleOfLife)({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 2000,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  overflow: "hidden",
});

export const SCircleContentItems = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  width: "300px",
});

export const SCircleContentItem = styled.div({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: `translate(-50%, -50%)`,
  zIndex: 2000,
  width: "228px",
});

export const SCircleContentText = styled.div<{
  x: number;
  y: number;
  active: boolean;
}>(({ x, y, active }) => {
  const flyInContent = keyframes`
      0% {
        transform: translate(${x}px, ${y}px);
      }
      100% {
        transform: translate(0px, 0px);
      }
    `;

  const flyOutContent = keyframes`
      0% {
        transform: translate(0px, 0px);
      }
      100% {
        transform: translate(${x}px, ${y}px);
      }
    `;

  return css`
    display: flex;
    flex-flow: column;
    justify-content: start;
    animation-name: ${!active ? flyInContent : flyOutContent};
    animation-duration: ${2}s;
    animation-fill-mode: forwards;
  `;
});

export const SCircleOption = styled.div<{
  largetext?: boolean;
}>(({ largetext }) => ({
  display: "flex",
  width: "100%",
  margin: "4px",
  justifyContent: "space-between",
  alignItems: "start",
}));

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

export const SCircleOfLifeItemTitle = styled.div<{ defaultangle: number }>(
  ({ defaultangle }) => ({
    cursor: "pointer",
    width: "max-content",
    transform: `rotate(${-defaultangle}deg)`,
  })
);

export const SCircleOfLifeRotator = styled.div<{
  rotateangle: number;
  rotatespan: number;
  rotationtime: number;
}>(({ rotateangle, rotatespan, rotationtime }) => {
  let direction = rotatespan / Math.abs(rotatespan);

  const breatheAnimation = keyframes`
      0% {
        transform: rotate(${rotateangle - rotatespan}deg)
      }

      40% {
        transform: rotate(calc(${rotateangle}deg + ${direction * 10}deg))
      }
      52% {
        transform: rotate(calc(${rotateangle}deg - ${direction * 8}deg))
      }
      64% {
        transform: rotate(calc(${rotateangle}deg + ${direction * 6}deg))
      }
      76% {
        transform: rotate(calc(${rotateangle}deg - ${direction * 4}deg))
      }
      88% {
        transform: rotate(calc(${rotateangle}deg + ${direction * 2}deg))
      }
      100% {
        transform: rotate(calc(${rotateangle}deg))
      }
    `;

  return css`
    height: 268px;
    width: 268px;
    background: crimson;
    z-index: 1000;
    animation-name: ${breatheAnimation};
    animation-timing-function: cubic-bezier(0.72, 0.25, 0.9, 0.43);
    animation-duration: ${rotationtime}s;
    animation-fill-mode: forwards;
  `;
});

export const SCircleOfLifeArrow = styled.div({
  height: "38px",
  width: "38px",
  background: "crimson",
  transform: `translate(-50%, -50%)`,
});
