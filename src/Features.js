import React from 'react';
import FeaturesOption from './FeaturesOption';



class Features extends React.Component{
    
    render() {
        
    
        return(
            <div>
              <h2>Customize your laptop</h2>
            <FeaturesOption selected={this.props.selected} 
            updateFeature={this.props.updateFeature} USCurrencyFormat={this.props.USCurrencyFormat} />
            </div>
        )
    }

}


export default Features;