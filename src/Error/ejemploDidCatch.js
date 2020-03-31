import React, { Component } from 'react'

class BotonError extends Component{
    state = {throwError: false}

    render(){
        if(this.state.throwError){
            throw new Error("Se ha lanzado un error")
        }

        return(
            <button onClick={()=>{
                this.setState({throwError: true})
            }}>Lanzar Error</button>

        )
    }



}

export default class EjemploDidCatch extends Component{
    state = {hasError: false, errorMsg:""}

    componentDidCatch(error, info){
        console.log("componentDidCatch")
        console.log({error,info})
        this.setState({hasError:true,errorMsg:error.toString()})
    }
    
    
    render(){
        if (this.state.hasError){
        return( <div>
                    <h1 style={{color:"red",fontSize:14}}>Error en el Componente: {this.state.errorMsg}</h1>
                    <button style={{color:"green",backgroundColor:"blue"}} onClick={()=>{
                        this.setState({hasError:false})
                    }}>Volver a la aplicación</button>
                </div>)
        }
        return(
            <div>
                <h4>Ejemplo de Ciclo de error</h4>
                <p>Error</p>
                <BotonError/>
            </div>

        )

    }
}