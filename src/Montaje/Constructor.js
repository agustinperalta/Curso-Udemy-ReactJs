import React, { Component } from 'react'


export default class Constructor extends Component{
    constructor(props){
        console.log("Contructor Inicializado")
        super(props)
        this.state = {mensajeInicial: 'Mnesaje Hola'}
        //this.handleClick = this.handleClick.bind(this)
    }

    handleClick = () =>{
        this.setState({mensajeInicial:"Mensaje Chau"})
    }

    render(){
        return(
            <div className="Montaje">
                <h4>Ciclo de Montaje: constructor </h4>
                {this.state.mensajeInicial}

                <button onClick={this.handleClick}>Cambiar Mensaje</button>
            </div>
        )
    }
}