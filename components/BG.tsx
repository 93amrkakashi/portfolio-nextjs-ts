// import React from 'react'

// function BG() {
//   return (
//     <div>BG</div>
//   )
// }

// export default BG


import { Box } from "@chakra-ui/react";
import { useCallback, useState } from "react";
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'



function BG() {
  const [count, setCount] = useState(30)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const init = useCallback(async (engine:any) => {
    await loadFull(engine)
  })
  return (
     <Box as={Particles} color='red'  options={{
        particles: {
          // color: {
          //   value: "red"
          // },
          number: {
            value: count
          },
          opacity: {
            value: {min: 0.3, max: 1}
          },
          shape: {
            type: "circle"
          },
          size: {
            value: {min:1, max:5}
          },
          move: {
            // direction: "bottom-right",
            enable: true,
            speed: {min: 0.2, max: 2},
            straight: true
          }
        }
      }} init={init}/>
        
  )
}

export default BG