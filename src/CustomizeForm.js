import React from 'react';
import Features from './Features';
import FEATURES from './FeaturesObject';


class CustomizeForm extends React.Component{
    render(){
        return(
            <form className="main__form">
            <Features selected={this.props.selected} 
            updateFeature={this.props.updateFeature} 
            USCurrencyFormat={this.props.USCurrencyFormat}
            FEATURES={FEATURES}
            /> 
            </form>
            
        )
    }
}

export default CustomizeForm;