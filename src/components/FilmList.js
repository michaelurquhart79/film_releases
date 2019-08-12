import React, {Component} from 'react';
import FilmItem from './FilmItem';

class FilmList extends Component{

  render() {

    const filmNodes = this.props.data.map(film =>{
      return <FilmItem key={film.id} name={film.name} url={film.url}/>
    })

    return(
      <div className="film-list">
        <h2>Hi, I'm the film list component</h2>
        {filmNodes}
      </div>
    )
  }

}


export default FilmList;
