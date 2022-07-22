import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { navDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';
// import { email } from '@config';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;

  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }

  ${'' /* TODO CSS gradient here */}
  #colorful-heading {
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = (
    <h1>
      {/* TODO animate this text to be typed out with a cursor like a CLI, and randomly generate new text each time, maybe in different languages or different ways of greeting */}
      {/* TODO make some typing sounds maybe? */}
      <span role="img" aria-label="wave">
        👋
      </span>{' '}
      Hi, my name is_
    </h1>
  );
  const two = <h2 className="big-heading">Liam Neville</h2>;
  const three = (
    <h3 className="big-heading" id="colorful-heading">
      I build things for the web.
    </h3>
  );
  const four = (
    <>
      <p>
        I’m a Full-Stack Software Engineer focused on building powerful, reliable and delightful
        digital experiences. Currently I'm working at{' '}
        <a href="https://github.com/github" target="_blank" rel="noreferrer">
          GitHub
        </a>{' '}
        as a member of the{' '}
        <a href="https://github.com/github/field-engineering" target="_blank" rel="noreferrer">
          Field Engineering
        </a>{' '}
        team, with the mission of delivering high quality tools to accelerate the adoption and usage
        of GitHub Actions.
      </p>
    </>
  );
  const five = (
    <a
      className="email-link"
      href="https://www.github.com/lineville"
      target="_blank"
      rel="noreferrer">
      Follow me on GitHub!{' '}
      <span role="img" aria-label="point-right">
        👉
      </span>{' '}
      @lineville
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      <>{isMounted && items.map((item, i) => <div key={i}>{item}</div>)}</>
    </StyledHeroSection>
  );
};

export default Hero;
