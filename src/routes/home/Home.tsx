import React from 'react';

import lightyear from 'assets/lightyear.jpg';
import { FeaturedMovie } from 'components/featuredMovie';
import { SectionHeader } from 'components/section/sectionHeader';
import { SectionWrapper } from 'components/section/sectionWrapper';

const Home = () => {
  return (
    <div>
      <FeaturedMovie
        title="Rise of the Planet of the Apes"
        cast={['Chris Evans', 'Keke Palmer']}
        image={lightyear}
        duration={105}
        genre="Adventure/Family"
        releaseDate="June 17, 2022"
      />
      <SectionWrapper isWide>
        <SectionHeader title="Now Showing" increasedMarginTop />
      </SectionWrapper>
    </div>
  );
};

export default Home;
