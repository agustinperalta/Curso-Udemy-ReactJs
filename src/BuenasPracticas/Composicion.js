import React, {Component} from 'react'

class Button extends Component{
    render(){
        return(
            <button style={{borderColor: this.props.borderColor, display:"block"}}>{this.props.label}</button>
        )
    }
}

Button.defaultProps = {
    borderColor: "#09f"

}

class ButtonDanger extends Component{
    render(){
        return(
            <Button borderColor="red" label={this.props.label}/>
        )
    }
}

class ButtonWithLegend extends Component{
    render(){
        return(
        <div>
        <Button borderColor={this.props.bordercolor} label = {this.props.label}/>
        <small>{this.props.legend}</small>
        </div>
        )
    }

}


export default class Composicion extends Component{

    render(){
        return(
            <div className="Composicion">
                <h2>Buenas Practicas: Composicion</h2>
                <Button label="Boton 1"/>
                <br/> 
                <ButtonDanger label="Cuidado!!" /> 
                <br/>
                <ButtonWithLegend bordercolor="green" legend="Haga Click Aqui" label="Boton con legenda"/>

            </div>
        )
    }

}