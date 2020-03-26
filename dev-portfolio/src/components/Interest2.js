import React from "react";
import { Grid, Box, Text } from "grommet";
import { Apple, Android } from 'grommet-icons'

const Interest2 = () => {
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
          <Apple size='large' color='brand' />
          <Android size='large' color='brand' />
        </Box>
        <Box gridArea="main">
          <Text>
            Mobile Development
          </Text>
          <Text color='dark-2'>
           <p>
            Through web development, I've recently discovered the importance of mobile-responsive applications, hence
            making this portfolio site a mobile-friendly resource. Eventually I will pick up Flutter as a new language in order to create
            cross-platform titles
          </p> 
          </Text>
          
        </Box>
      </Grid>
    </div>
  );
};

export default Interest2;
