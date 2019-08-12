import React, {Component} from 'react';
import FilmItem from './FilmItem';

class FilmList extends Component{

  render() {

    const filmNodes = this.props.data.map(film =>{
      return <FilmItem key={film.id} name={film.name} url={film.url}/>
    })

    return(
      <div className="film-list">
        <ul>
          {filmNodes}
        </ul>
      </div>
    )
  }

}


export default FilmList;
