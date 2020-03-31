import React, { Component } from "react"

export default class Form extends Component{

    constructor(){
        super()
        this.state = {inputName:" "
                    , inputApellido: " "
                    , inputcheck : true}
    }

   handleSubmit = (e)=>{
    e.preventDefault()
    console.log(this.state)

   }

   handleChange = (e)=>{

    console.log("handle changed")
    console.log(e.target.checked)
    this.setState({inputcheck: e.target.checked})
   }
   
    render(){
        return(

            <div>
                <h1>Formulario</h1>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label htmlFor="name">Nombre</label>
                        <input  id="name" 
                                name="userName"
                                placeholder = "Ingrese Nombre" 
                                onChange = {e => this.setState({inputName: e.target.value})}
                                value = {this.state.inputName}/>
                    </p>
                    <p>
                        <label htmlFor="apellido"> Apellido</label>
                        <input id="apellido"
                               name="apellidoUser"
                               placeholder = "Ingrese Apellido" 
                               onChange = {e => this.setState({inputApellido: e.target.value})}
                               value={this.state.inputApellido}/>
                    </p>

                    <p>
                        <label>
                        <input onChange={this.handleChange} type="checkbox" checked={this.state.inputcheck}/>
                        Accept terms
                        </label>
                    </p>

                    <button>Enviar</button>

                </form>
            
            </div>
        
        )
    }
}