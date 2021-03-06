import React from 'react'
import { 
  Box, 
  Grid, 
  Button 
} from 'grommet';

const CompleteProject1 = () => {
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
    MotiveRate
  </Box>
  {/* <Box gridArea="nav" background="light-5" pad="xsmall">
 
      <li>Rails</li>
      <li>React</li>
      <li>Redux</li>
  </Box> */}
  <Box gridArea="main" background="light-4" pad="small" align='center' direction='row' round='small'>
  <p>A goal motivation app with light social media features as well as a points earning system
  <ul>
    <li>Rails RESFTful API</li>
    <li>React Front-End Client</li>
    <li>Redux State Management</li>
    <li>JWT Authentication</li>
  </ul>
  </p> 
  
  <Button
  icon={() => {}}
  label="Source Code"
  onClick={() => {}}
  href="https://github.com/Pas-byNumbers/MotiveRate"
  rel="noopener noreferrer" 
  target="_blank"
/>

  <Button
  icon={() => {}}
  label="Video Demo"
  onClick={() => {}}
  href="https://drive.google.com/file/d/1SQIGG3-0n1-uUF49h7EZhNGym8X87MMb/view?usp=sharing"
  rel="noopener noreferrer" 
  target="_blank"
/>
  </Box>
 
</Grid>
    </div>
  )
}

export default CompleteProject1
