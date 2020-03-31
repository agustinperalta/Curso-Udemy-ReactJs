import React, {Component} from 'react'

export default class FetchExample extends Component{
    state = {bpi:{}}
    componentDidMount(){
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(res => res.json())
        .then(data => {
            const { bpi } = data
            this.setState({bpi})
        })
    }

    _renderCorrencies(){
        const {bpi} = this.state
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