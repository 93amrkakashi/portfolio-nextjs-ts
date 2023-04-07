import { Box } from "@chakra-ui/react";
import { useCallback, useState } from "react";
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import type { Engine } from "tsparticles-engine";


function BG() {
  const [count, setCount] = useState(20)

  const customInit  = useCallback(async (engine: Engine) => {
    // @ts-ignore
    await loadFull(engine)
  })
  return (
     <Box as={Particles}   options={{
        particles: {
          color: {
            value: "#55626d",
          },
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
      }} init={customInit}/>
        
  )
}

export default BG