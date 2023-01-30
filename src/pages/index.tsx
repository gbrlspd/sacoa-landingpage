import React from 'react';

import SectionHero from 'components/SectionHero';
import SectionAbout from 'components/SectionAbout';
import SectionSolutions from 'components/SectionSolutions';
import SectionProducts from 'components/SectionProducts';
import SectionModules from 'components/SectionModules';
import SectionSupport from 'components/SectionSupport';
import PricingBox from 'components/PricingBox';
import SectionReviews from 'components/SectionReviews';
import SectionFaq from 'components/SectionFaq';

const Index = () => (
  <>
    <SectionHero />
    <SectionAbout />
    <SectionSolutions />
    <SectionProducts />
    <SectionModules />
    <SectionSupport />
    <PricingBox />
    <SectionReviews />
    <SectionFaq />
  </>
);

export default Index;
