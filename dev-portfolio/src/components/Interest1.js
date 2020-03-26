import React from "react";
import { Grid, Box, Text } from "grommet";
import { Language } from 'grommet-icons'

const Interest1 = () => {
  return (
    <div>
      <Grid
        rows={["auto", "auto"]}
        columns={["xsmall", "auto"]}
        gap="small"
        align='stretch'
        justify='stretch'
        responsive={true}
        areas={[
          // { name: "header", start: [0, 0], end: [1, 0] },
          { name: "nav", start: [0, 1], end: [0, 1] },
          { name: "main", start: [1, 1], end: [1, 1] }
        ]}
      >
        {/* <Box gridArea="header" background="brand" /> */}
        <Box gridArea="nav"  align='center' justify='center' responsive={true} flex={true} alignSelf='stretch'>
          <Language size='large' color='brand' />
        </Box>
        <Box gridArea="main" justify='center' responsive={true} flex={true} alignSelf='stretch'>
          <Text>
            Web Development
          </Text>
          <Text color='dark-2'>
           <p>
            Started really getting my feet wet in programming once I moved<br /> from CLI applications in Ruby to a full MVC framework in Rails.<br />
            I've now developed a keen inclination towards JS frameworks, <br />particularly MERN stack
          </p> 
          </Text>
          
        </Box>
      </Grid>
    </div>
  );
};

export default Interest1;
