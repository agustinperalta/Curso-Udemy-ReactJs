import React, { Component} from 'react'
import PropTypes from 'prop-types'

const ANIMAL_IMAGES = {
    cat: "https://www.purina.es/sites/g/files/mcldtz1656/files/2017-11/Bringing-Your-Kitten-Home_0.jpg",
    dolphin: "https://www.animalesacuaticos.info/wp-content/uploads/2019/10/delfines-1.jpg"
    ,panda: "https://www.anipedia.net/imagenes/osos-panda-800x375.jpg"
}

const ANIMALES = Object.keys(ANIMAL_IMAGES)


class AnimalImage extends Component{
    state = {src: ANIMAL_IMAGES[this.props.animal]}

    componentWillReceiveProps(nextprops){
        console.clear()
        console.log('1. componentWillReceive')
        console.log(nextprops)
        this.setState({src: ANIMAL_IMAGES[nextprops.animal]})
    }

    shouldComponentUpdate(nextprops){
        console.log("2. ShpuldComponent")
        return this.props.animal !== nextprops.animal
    }

    componentWillUpdate(nextprops, nexstate){
        console.log("3. Update",nextprops,nexstate)
        const img = document.querySelector('img')
        console.log("From img elment",{alt: img.alt})
        img.animate([{filter: "blur(0px)"},{filter: "blur(2px)"}],{duration: 500,easing:"ease"})
    }

    componentDidUpdate(prevprops, prevstate){
        console.log("4. Didupdate",prevprops)
        const img = document.querySelector("img")
        img.animate([{filter: "blur(2px)"},{filter: "blur(0px)"}]
        , {duration: 1500, easing: "ease"})
    }

    render(){
        console.log("--> render")
        return(
            <div>
                <p>Selected {this.props.animal}</p>
                <img 
                alt={this.props.animal} 
                src={this.state.src}
                width='250' />           
                
            </div>
        )
    }
}

AnimalImage.propTypes ={
    animal: PropTypes.oneOf(ANIMALES)
}


export default class EjemploActualizacion extends Component{
    state = {animal: 'panda'}

    _renderbutton = (animal)=>{
        return (
        <button
        //disabled = {this.state.animal === animal} 
        key={animal} 
        onClick={() => this.setState({animal})}>{animal}</button>
        )
    }

    render(){
        
        return(
                <div>
                    <h4>Ciclo de vida: Ejemplo ShouldComponent</h4>
                    {ANIMALES.map(this._renderbutton)}
                    <AnimalImage animal={this.state.animal} />

                </div>

        )
    }


}