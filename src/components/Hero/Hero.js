import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import NextLink from 'next/link';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          <h5>Hello, i'm <br />
          Sibajene Sikasukwe</h5> 
        </SectionTitle>
        <SectionText>
        Full-stack Developer.
        </SectionText>
        <NextLink  href="https://amaznet.vercel.app/" passHref>
          <Button onClick={props.handleClick} variant="#F65314">find more...</Button>
        </NextLink>
        
        
      </LeftSection>
    </Section>
  </>
);

export default Hero;