// a container for all the Movie components and their data
import React from 'react';
import Movie from './Movie';

// news-feed.js code from Nick Suwyn instruction video
export default class MovieList extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.addUserReview = this.addUserReview.bind(this);
  //   this.updateReviewState = this.addUserReview;
  // }

  // todo: fix/replace ratings images, too small
  render() {
    return (
      <div className='movieList container'>
        <Movie {...
          {id: 1,
          key: 1,
          title: 'The Monuments Men',
          ratingImage: <img src='./assets/ratedPg13.png' alt='movie rating'/>,
          summary: "Bill & Co. 'race against time' to retrieve artwork stolen by Hitler.",
          released: '2014',
          image: 'https://images-na.ssl-images-amazon.com/images/I/81mli367I6L._SL1500_.jpg'}
        } />
        <Movie {...
          {id: 2,
          key: 2,
          title: 'The Royal Tenenbaums',
          ratingImage: <img src='./assets/ratedR.png' alt='movie rating'/>,
          summary: "Watch carefully. Does Bill ever smile as neurologist Raleigh St. Clair? Does anyone?",
          released: '2001',
          image: 'https://images2.vudu.com/poster2/25655-338'}
        } />
        <Movie {...
          {id: 3,
          key: 3,
          title: 'Groundhog Day',
          ratingImage: <img src='./assets/ratedPg.png' alt='movie rating'/>,
          summary: "'I've Got You Babe' on repeat.",
          release: '1993',
          image: 'https://i.ytimg.com/vi/8skEQx5w8Cs/movieposter.jpg'}
        } />
        <Movie {...
          {id: 4,
          key: 4,
          title: 'Scrooged',
          ratingImage: <img src='./assets/ratedPg13.png' alt='movie rating'/>,
          summary: "Who can blame Bill for leering at the Solid Gold Dancers? (hey, it was the 80s)",
          released: '1988',
          image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Scrooged_film_poster.JPG/220px-Scrooged_film_poster.JPG'}
        } />
        <Movie {...
          {id: 5,
          key: 5,
          title: 'The Rutles: All You Need is Cash',
          ratingImage: ' Not Rated (tv movie)',
          summary: "More Murray! More Murray!",
          released: '1978',
          image: 'https://images.static-bluray.com/products/20/24498_1_large.jpg'}
        } />
      </div>
    );
  }
}