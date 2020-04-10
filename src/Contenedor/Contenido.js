import React, { Component } from "react"

 class BitCoinContent extends Component{
    
    _renderCorrencies(){
        const {bpi} = this.props
        return Object.keys(bpi)//EUR, USD,...
        .map(currency =>{
            return(
                <ul key={currency}>
                    <li><p>{currency}: {bpi[currency].rate}</p></li>
                </ul>
            )
        })
    }

    render(){
        return(
            <div>
            <h2>Bitcoin Price</h2>
            {this._renderCorrencies()}
            </div>
        )
    }


}

export default BitCoinContent