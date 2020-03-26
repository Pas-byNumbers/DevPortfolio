import React from "react";
import { Box } from "grommet";
import { Github, Linkedin, Medium } from "grommet-icons";

const Contact = () => {
  const stylesObj = {
    linksDiv: {
      direction: "row-reverse",
      gap: "small"
    },
    linksBox: {
      animation: 'pulse'
    }
  };

  return (
    <div>
      <br />
      <h4>Contact and further links</h4>
      <div>
        <p>
          Email:{" "}
          <a href="mailto:pasbynumbers@gmail.com">pasbynumbers@gmail.com</a>
          <br />
          <br />
          Resume:{" "}
          <a 
          href="https://drive.google.com/file/d/1dFN3xb6tIB_3ROJMyE76QA5ZDzyXxQdn/view?usp=sharing"
          rel="noopener noreferrer" target="_blank"
          >
            PDF version
          </a>{" "}
          -{" "}
          <a 
          href="https://drive.google.com/file/d/1Rt9OJyCr8-IZugSXL3vEqSRuuM5sq2-l/view?usp=sharing"
          rel="noopener noreferrer" target="_blank"
          >
            docx version
          </a>
        </p>
      </div>
      {/* <br /> */}
      <br />
      <Box {...stylesObj.linksDiv}>
        <Box {...stylesObj.linksBox} onClick={() => {}} hoverIndicator={{color: '#F6D429'}} round='xsmall'>
        <a href="http://www.medium.com/@pasbynumbers" rel="noopener noreferrer" target="_blank">
          <Medium color="plain" size="large"/>
        </a>
          
        </Box>
        <Box {...stylesObj.linksBox} onClick={() => {}} hoverIndicator={{color: '#F6D429'}} round='xsmall'>
        <a href="https://www.linkedin.com/in/pascal-rassaby-60265929" rel="noopener noreferrer" target="_blank">
          <Linkedin color="plain" size="large" />
        </a>
        </Box>
        <Box {...stylesObj.linksBox} onClick={() => {}} hoverIndicator={{color: '#F6D429'}} round='xsmall'>
        <a href="http://www.github.com/Pas-byNumbers" rel="noopener noreferrer" target="_blank">
           <Github color="plain" size="large" />
        </a>
        </Box>
      </Box>
    </div>
  );
};

export default Contact;
