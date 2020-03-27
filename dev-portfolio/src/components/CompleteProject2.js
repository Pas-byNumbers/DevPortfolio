import React from 'react'
import { 
  Box, 
  Grid, 
  Button 
} from 'grommet';

const CompleteProject2 = () => {
  return (
    <div>
      <Grid
  rows={['xxsmall', 'small']}
  columns={['xsmall', 'medium']}
  gap="small"
  areas={[
    { name: 'header', start: [0, 0], end: [1, 0] },
    // { name: 'nav', start: [0, 1], end: [0, 1] },
    { name: 'main', start: [0, 1], end: [1, 1] },
  ]}
>
  <Box gridArea="header" background="dark-2" justify="center" align="center" round='small'>
    Harry Potter Trivia
  </Box>
  {/* <Box gridArea="nav" background="light-5" pad="xsmall">
 
      <li>Rails</li>
      <li>React</li>
      <li>Redux</li>
  </Box> */}
  <Box gridArea="main" background="light-4" pad='small' align='center' direction='row' round='small'>
  <p>Pair-programmed quiz with an animated UI, based on lore from the <em>Harry Potter</em> franchise
  <br />
  <br />
  <strong>Video demo found in source code README</strong>
  <ul>
    <li>Ruby on Rails Back-End</li>
    <li>Vanilla JS Front-end</li>
    <li>TweenMax Animation Library</li>
  </ul>
  </p> 
  
  <Button
  icon={() => {}}
  label="Source Code"
  onClick={() => {}}
  href="https://github.com/fedemcmac/hp-app"
  rel="noopener noreferrer" 
  target="_blank"
/>

  </Box>
 
</Grid>
    </div>
  )
}

export default CompleteProject2
