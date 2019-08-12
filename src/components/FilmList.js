import React, {Component} from 'react';
import FilmItem from './FilmItem';

class FilmList extends Component{

  render() {
    return(
      <div className="film-list">
        <h2>Hi, I'm the film list component</h2>
        <FilmItem/>
        <FilmItem/>
      </div>
    )
  }

}


export default FilmList;
