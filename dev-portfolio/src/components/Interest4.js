import React from "react";
import { Grid, Box, Text } from "grommet";
import { Secure, DocumentLocked } from 'grommet-icons'

const Interest4 = () => {
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
          <DocumentLocked size='large' color='brand' />
        </Box>
        <Box gridArea="main">
          <Text>
            Application Security
          </Text>
          <Text color='dark-2'>
           <p>
            I've always been curious about cyber security and its crucial presence within technology.
            Furthering my research, I've delivered a presentation on common cyber attacks at Flatiron and started practicing more defensive measures when developing my applications
          </p> 
          </Text>
          
        </Box>
      </Grid>
    </div>
  );
};

export default Interest4;
