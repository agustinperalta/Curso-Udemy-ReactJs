import React, {Component} from 'react'

class ComponenteADesmontar extends Component{
    state = {windowWidth: 0}

    _updateStateWindow =() =>{ 
        this.setState({windowWidth: document.body.clientWidth})
    }

    componentDidMount(){
        this._updateStateWindow()
        window.addEventListener('resize',this._updateStateWindow)

    }

    componentWillUnmount(){
        window.removeEventListener('resize',this._updateStateWindow)
    }

    render(){
        return(
            <div>
            <p>Ancho de ventana: {this.state.windowWidth}</p>
            </div>

        )

    }
}


export default class EjemploDidUnMount extends Component{
    state = {mostrarComponente: true}

    render(){
        if (this.state.mostrarComponente === true){
            return(
                <div>
                    <h4>Desmontaje</h4>
                    <ComponenteADesmontar/>
                    <button onClick={()=> this.setState({mostrarComponente:false})}>Demontar Componente</button> 
                </div>
            )
        }
        return (
            <div>
                <h4>Componente Desmontado</h4>
            </div>
        )
    }
}