import React from "react";
import CompleteProject1 from "../components/CompleteProject1";
import CompleteProject2 from "../components/CompleteProject2";
import { Box, Accordion, AccordionPanel, Text } from "grommet";
import InDevProject1 from "../components/InDevProject1";
import InDevProject2 from "../components/InDevProject2";


const ProjectsContainer = () => {
  return (
    <div>
      <Accordion animate='true' alignSelf='start'>
  <AccordionPanel label="Completed">
     <Box direction="row-responsive" gap="xsmall" margin="small">
        <CompleteProject1 />
        <CompleteProject2 />
      </Box>
  </AccordionPanel>
  <AccordionPanel label="In Development">
  <Box direction="row-responsive" gap="xsmall" margin="small">
      <InDevProject2 />
      <InDevProject1 />
      </Box>
  </AccordionPanel>
</Accordion>
     
    </div>
  );
};

export default ProjectsContainer;
