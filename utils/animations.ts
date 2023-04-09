import { keyframes } from "@emotion/react";

export const animation = keyframes`
0%{
  transform: translateY(0)
}


55%{
  transform: translateY(0px)
}

100%{
  transform: translateY(0)
}
`;

export const roboAnimation = `${animation} infinite 2s`;

export const divVarient = {
  start: {
    opacity: 0,
    y: "90vh",
  },
  end: {
    opacity: 1,
    y: "0",
  },
  textUpStart: {
    y: "100vh",
  },
  textUpEnd: {
    y: "0",
  },
  skillStart: {
    y: "-100vh",
  },
  skillEnd: {
    y: "0",
  },
  roboStart: {
    y: "70vh", scale: 0.1, x:"20vw"
  },
  roboEnd: {
    y: "0", scale: 1 ,x:"0"
  },
};
