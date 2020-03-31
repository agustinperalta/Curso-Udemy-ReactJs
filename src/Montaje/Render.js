import React , { Component } from 'react'

const HelloRender = (props) => <h1>Hola Render</h1>


export default class Render extends Component{
    constructor(props){
        console.log("Constructor")
        super(props)
        this.state = {mensaje: 'mensaje Inicial'}
    }

    componentWillMount(){
        console.log("ComponentWillMount")
    }

    render(){
        console.log("Render")

        return [<h1 key="A">Titulo</h1>,
            <p key="B">Parrafo</p>,
            <HelloRender key = "C"/>,
            <HelloRender key = "D"/> ]
    }    
}