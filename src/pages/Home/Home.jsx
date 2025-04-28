import React from 'react';
import { Link } from 'react-router-dom';
import { HeroContainer, HeroText, Button } from './Home.styles';

function Home() {
  return (
    <HeroContainer>
      <HeroText>
        <h1>Hi, I'm Dorota Karpinska</h1>
        <p>I'm a passionate Frontend Developer creating sleek and functional web experiences.</p>
      </HeroText>
      <Link to="/projects">
        <Button>See my projects</Button>
      </Link>
    </HeroContainer>
  );
}

export default Home;
