import React from "react";
import { Grid, Box, Text } from "grommet";
import { Paint, Brush } from 'grommet-icons'

const Interest3 = () => {
  return (
    <div>
      <Grid
        rows={["xxsmall", "xsmall"]}
        columns={["xsmall", "large"]}
        gap="small"
        areas={[
          // { name: "header", start: [0, 0], end: [1, 0] },
          { name: "nav", start: [0, 1], end: [0, 1] },
          { name: "main", start: [1, 1], end: [1, 1] }
        ]}
      >
        {/* <Box gridArea="header" background="brand" /> */}
        <Box gridArea="nav"  align='center' justify='center' direction='row'>
          <Paint size='large' color='brand' />
          <Brush size='large' color='brand' />
        </Box>
        <Box gridArea="main">
          <Text>
            UI/UX
          </Text>
          <Text color='dark-2'>
           <p>
            First attempted some basic UI design on my MotiveRate project.
            Ever since, I have anticipated learning more about Figma and wireframing.
            This com
          </p> 
          </Text>
          
        </Box>
      </Grid>
    </div>
  );
};

export default Interest3;
