import {
  Box,
  Tabs,
  Tab
} from 'grommet'
import React from 'react'
import ProfileContainer from '../containers/ProfileContainer'
import ProjectsContainer from '../containers/ProjectsContainer'

const Nav = () => {

  const stylesObj = {
    accordion: {

    }
  }


  return (
    <div>
    <Tabs>
  <Tab title="About Me">
    <Box pad="medium">
      <ProfileContainer />
    </Box>
  </Tab>
  <Tab title="Projects">
    <Box pad="medium">
    <ProjectsContainer />
    </Box>
  </Tab>
  <Tab title="Areas of Interest">
    <Box pad="medium">Three</Box>
  </Tab>
  <Tab title="Code Challenges">
    <Box pad="medium">Coming soon...</Box>
  </Tab>
</Tabs>
    </div>
  )
}

export default Nav
