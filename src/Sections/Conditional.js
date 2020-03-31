import React, {Component} from 'react'

class LoginIn extends Component {

    render(){
        return(<button>Iniciar Sesion</button>)
    }
}

class LoginOut extends Component {

    render(){
        return(<div>
            <p>Bienvenido Usuario</p>
            <button>Salir de la sesion</button>

        </div>)
    }
}


export default class ConditionalSection extends Component {

constructor(){
    super()
    this.state = {isLoged: false}
}


render(){
    
    return(
        <div><h2>Renderizado condicional</h2>
        {this.state.isLoged ? <LoginOut/> : <LoginIn/>}
        </div>

    )
}
}