import React from 'react';
import Total from './Total';
import Summary from './Summary';

class Cart extends React.Component{
    render(){
        return(
        <div>
        <Summary selected={this.props.selected} 
                USCurrencyFormat={this.props.USCurrencyFormat} 
                total={this.props.total}/>
        
        <Total selected={this.props.selected} 
                         USCurrencyFormat={this.props.USCurrencyFormat} />
        
        </div>

        )
    }
    
}

export default Cart;