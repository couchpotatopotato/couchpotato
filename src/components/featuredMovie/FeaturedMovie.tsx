import React from 'react';

import './FeaturedMovie.scss';

interface FeaturedMovieProps {
  title: string;
  image: string;
  cast: string[];
  duration: number;
  genre: string;
  releaseDate: string;
}

const FeaturedMovie = ({
  title,
  image,
  cast,
  duration,
  genre,
  releaseDate,
}: FeaturedMovieProps) => {
  return (
    <div className="background">
      <img alt="lightyear" src={image} className="image" />
      <div className="info">
        <div>
          <p className="mb-3">With</p>
          <div className="is-flex columns">
            <div className="column">
              {cast.map((actor) => (
                <p key={actor}>{actor}</p>
              ))}
            </div>
            <div className="column">
              <p>{duration} mins</p>
              <p>{genre}</p>
            </div>
          </div>
        </div>
        <h1 className="movieTitle mb-5">{title}</h1>
        <div className="is-flex is-flex-direction-row is-align-items-center">
          <a href="/" className="large mr-7">
            Book Now
          </a>
          <p className="has-text-grey-lighter">{releaseDate}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMovie;
