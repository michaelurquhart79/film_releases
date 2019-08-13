import React, {Component} from 'react';


class FilmLink extends Component{

  render() {
    return(
      <div className="film-link">
        <button>
          <a href="https://www.imdb.com/calendar/?region=gb" target="_blank">View more upcoming releases &gt;&gt;</a>
        </button>
      </div>
    )
  }

}


export default FilmLink;
