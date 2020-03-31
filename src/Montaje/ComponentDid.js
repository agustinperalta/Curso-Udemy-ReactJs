import React ,{ Component } from 'react'

export default class EjemploDeComponentDid extends Component{
    constructor (props){
        console.log("Constructor")
        super(props)
        this.state = {scroll: 0}
    }

    componentWillMount(){
        console.log("ComponentWillMount")
        
    }

    componentDidMount(){
        console.log("Mount")
        document.addEventListener('scroll', ()=>{
            this.setState({scroll: window.scrollY})
        })
       
    }

    render(){
        console.log("render")
        return(
        <div>
            <h4>Ciclo de montaje: componentDidMount</h4>
            <p>Este Componente</p>
            <p>{this.state.scroll}</p>
            <p>Este Componente</p>
            <p>Este Componente</p>
            <p>Este Componente</p>
            <p>Este Componente</p>
            <p>Este Componente</p>
            <p>Este Componente</p>
            <p>Este Componente</p>
            <p>Este Componente</p>
            <p>Este Componente</p>
            <p>Este Componente</p>
            <p>Este Componente</p>
            <p>Este Componente</p>
            <p>Este Componente</p>
            

        </div>
        )


    }

}