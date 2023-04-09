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





export const repoVarient ={
  start:{
    opacity:0,
    y:"90vh",
  },
  end:{
    opacity:1,
    y:"0"
  },
  textUpStart:{
    y:"100vh"
  },
  textUpEnd:{
    y:"0"
  },
}