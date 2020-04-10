import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from "prop-types"
import BitCoinConteiner from './Contenedor/Contenedor';

class Box extends Component{
  render(){
    return(

      <div style={{border: "1px solid #09f",margin:5,padding:5}}>
        {this.props.children}
      </div>
      )
}
}

class Article extends Component{
  // eslint-disable-next-line react/no-typos
  static propTypes = {
  author: PropTypes.string.isRequired
  }
  
  render(){
    const {author, children, date, title} = this.props
    return(
      <section>
      <h1>{title}</h1>
      <h2>Autor: {author}</h2>
      <Box>Fecha: {date}</Box>
      <article>
        {children}
      </article>
      </section>

    )
  }
}

class App extends Component{
  render(){
    return(
      <div className="App">
    

      <BitCoinConteiner />
        
      </div>
    )}
  }


export default App;
