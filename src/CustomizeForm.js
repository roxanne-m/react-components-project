import React from 'react';
import Features from './Features';



class CustomizeForm extends React.Component{
    render(){
        return(
            <form className="main__form">
            <Features selected={this.props.selected} 
            updateFeature={this.props.updateFeature} 
            USCurrencyFormat={this.props.USCurrencyFormat}/> 
            </form>
            
        )
    }
}

export default CustomizeForm;