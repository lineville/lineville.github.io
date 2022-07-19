import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Hero, About, Jobs, Featured, Projects } from '@components';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

// TODO Make new logo to replace B spinner logo or remove altogether
// TODO Find a medium logo to link to blog
// TODO Replace projects with all of my projects
// TODO Replace checkout course with some other link
const IndexPage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <Hero />
      <About />
      <Jobs />
      <Featured />
      <Projects />
    </StyledMainContainer>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
