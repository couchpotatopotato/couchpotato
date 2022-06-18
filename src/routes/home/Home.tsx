import React from 'react';

import lightyear from 'assets/lightyear.jpg';
import { FeaturedMovie } from 'components/featuredMovie';
import { Navbar } from 'components/navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <FeaturedMovie
        title="Rise of the Planet of the Apes"
        cast={['Chris Evans', 'Keke Palmer']}
        image={lightyear}
        duration={105}
        genre="Adventure/Family"
        releaseDate="June 17, 2022"
      />
    </div>
  );
};

export default Home;
