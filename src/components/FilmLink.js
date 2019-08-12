import React, {Component} from 'react';


class FilmLink extends Component{

  render() {
    return(
      <div className="film-link">
        <h2>View more upcoming releases</h2>
        <a href="https://www.imdb.com/calendar/?region=gb" target="_blank">View more upcoming releases</a>
      </div>
    )
  }

}


export default FilmLink;
