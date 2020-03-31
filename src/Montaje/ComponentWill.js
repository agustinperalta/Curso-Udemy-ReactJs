import React, { Component } from 'react'

export default class ComponentWill extends Component{
    constructor(props){
        console.log("Constructor")
        super(props)
        this.state = {mensaje: "Mensaje Inicial"}

    }

    componentWillMount(){
        console.log("Metodo ComponentWillMount")
        this.setState({mensaje: "Mensaje Modificado"})
    }

    render(){
        console.log("Render")
        return(
            <div className="componentWillMount">
                <h4>Ciclo de montaje: ComponentWillMount</h4>
                <p>{this.state.mensaje}</p>
            </div>
        )
    }

}