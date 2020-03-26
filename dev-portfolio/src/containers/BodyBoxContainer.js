import React from 'react'
import { 
  Box,
  Header 
} from 'grommet'
import Nav from '../components/Nav'


const BodyBoxContainer = () => {
  const stylesObj = {
    box: {
      // border: {
      //   color: 'border',
      //   size: 'xsmall',
      //   side: 'between',
        
      // },
      pad: 'medium',
      align: 'center',
      gap: 'small',
      flex: 'true',
      }
    }
  

  return (
    <div>
      <Box 
        {...stylesObj.box}
        >
        <Header>
          <h2>Pascal Rassaby - Developer Portfolio</h2>
        </Header>
        <Nav />
      </Box>
    </div>
  )
}

export default BodyBoxContainer
