import React from 'react'
import { 
  Box, 
  Grid, 
  Button 
} from 'grommet';

const InDevProject2 = () => {
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
    Rassabee Events Services
  </Box>
  {/* <Box gridArea="nav" background="light-5" pad="xsmall">
 
      <li>Rails</li>
      <li>React</li>
      <li>Redux</li>
  </Box> */}
  <Box gridArea="main" background="light-4" pad="small" align='center' direction='row' round='small'>
  <p>A multi-specialised events company website. Aiming for an appealing minimalist style and simplicity of use. 
  Features will include a gallery and contact form with a quotation system.
  <br />
  <br />
  <em>This app will be pair-programmed alongside my dad</em>
  <ul>
    <li>Ruby on Rails Back-End</li>
    <li>React Front-End</li>
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

export default InDevProject2
