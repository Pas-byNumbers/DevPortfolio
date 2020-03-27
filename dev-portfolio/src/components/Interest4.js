import React from "react";
import { Grid, Box, Text } from "grommet";
import { Secure, DocumentLocked } from 'grommet-icons'

const Interest4 = () => {
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
        <Box gridArea="nav"  align='center' justify='center' responsive={true} flex={true}>
          <DocumentLocked size='large' color='brand' />
        </Box>
        <Box gridArea="main" justify='center' responsive={true} flex={true} >
          <Text>
            Application Security
          </Text>
          <Text color='dark-2'>
           <p>
            I've always had an interest towards cyber security and its crucial<br /> importance. 
            Furthering my research, I've delivered a presentation<br /> on common cyber attacks at Flatiron and started practicing more <br />defensive measures when developing my applications
          </p> 
          </Text>
          
        </Box>
      </Grid>
    </div>
  );
};

export default Interest4;
