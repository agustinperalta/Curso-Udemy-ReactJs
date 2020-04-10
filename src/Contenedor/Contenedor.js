import React, {Component} from 'react'
function _renderCorrencies(bpi){
   
    return Object.keys(bpi)//EUR, USD,...
    .map(currency =>{
        return(
            <ul key={currency}>
                <li><p>{currency}: {bpi[currency].rate}</p></li>
            </ul>
        )
    })
}

const BitCoinContent = ({bpi}) => ( <div>
    <h2>Bitcoin Price</h2>
    {_renderCorrencies(bpi)}
    </div>)

class BitCoinConteiner extends Component{
    state = {bpi:{}}
    componentDidMount(){
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(res => res.json())
        .then(data => {
            const { bpi } = data
            this.setState({bpi})
        })
    }

    

    render(){
        return(
            <BitCoinContent bpi={this.state.bpi}/>
        )
    }

}

export default BitCoinConteiner