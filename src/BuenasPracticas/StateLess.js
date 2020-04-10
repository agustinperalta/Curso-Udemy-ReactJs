import React, { Component } from "react"
import PropTypes from "prop-types"

function Article (props){
    return(
        <section>
            <h2>{props.title}</h2>
            <p><b>Escrito por: {props.author}</b></p>
            <date>{props.date}</date>
            <article>{props.children}</article>
        </section>
    )

}

Article.propTypes={
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    children: PropTypes.any
}

const Button = ({borderColor = "red", label}) =>(
    <div>
        <button style={{borderColor, display:"block"}}>{label}</button>
    </div>
)

Button.propTypes={
    borderColor: PropTypes.string,
    label: PropTypes.string.isRequired
}

export default class StateLess extends Component{

    render(){
        return(
            <div className="StateLess">
                <h2>Buenas Prácticas State Less</h2>
                <Article
                    title="Tittulo del articulo"
                    author="Juan Jose"
                    date= {new Date().toLocaleDateString()}>
                        <p>El contenido del articulo</p>
                </Article>
                <br/>
                <Button borderColor="#09f" label="Esta OK"/>

            </div>
        )
    }
}

