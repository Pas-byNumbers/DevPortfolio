import React from "react";
import { Grid, Box, Text } from "grommet";
import { Language } from 'grommet-icons'

const Interest1 = () => {
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
        <Box gridArea="nav"  align='center' justify='center'>
          <Language size='large' color='brand' />
        </Box>
        <Box gridArea="main">
          <Text>
            Web Development
          </Text>
          <Text color='dark-2'>
           <p>
            Started really getting my feet wet in programming once I moved from CLI applications in Ruby to a full MVC framework.
            I've now developed a strong interest towards JS frameworks, particularly MERN stack
          </p> 
          </Text>
          
        </Box>
      </Grid>
    </div>
  );
};

export default Interest1;
