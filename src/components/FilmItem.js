import React, {Component} from 'react';

class FilmItem extends Component{

  render(){
    return(
      <li>
      <a href={this.props.url} target="_blank">{this.props.name}</a>
      </li>
    )
  }
}

export default FilmItem;
