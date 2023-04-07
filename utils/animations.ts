import { keyframes } from "@emotion/react";




export const animation = keyframes`
0%{
  transform: translateY(0)
}


55%{
  transform: translateY(25px)
}

100%{
  transform: translateY(0)
}
`;



export const roboAnimation = `${animation} infinite 2s`;