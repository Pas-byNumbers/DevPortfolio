import React from 'react'
import { 
  Box, 
  Grid, 
  Button 
} from 'grommet';

const InDevProject1 = () => {
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
    SillyME Official Producer/DJ Website 
  </Box>
  {/* <Box gridArea="nav" background="light-5" pad="xsmall">
 
      <li>Rails</li>
      <li>React</li>
      <li>Redux</li>
  </Box> */}
  <Box gridArea="main" background="light-4" pad="small" align='center' direction='row' round='small'>
  <p>A media app and e-commerce site to promote music services, tracks, live shows and recent experiences.
  <br />
  <br />
  <em>Possible to sample tracks and preview PDF contracts</em>
  <ul>
    <li>MongoDB</li>
    <li>Node + Express.js</li>
    <li>React</li>
  </ul>
  </p> 
  
  {/* <Button
  icon={() => {}}
  label="Source Code"
  onClick={() => {}}
/>

  <Button
  icon={() => {}}
  label="Video Demo"
  onClick={() => {}}
/> */}
  </Box>
 
</Grid>
    </div>
  )
}

export default InDevProject1
