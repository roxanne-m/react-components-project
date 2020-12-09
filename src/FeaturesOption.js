import React from 'react';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
import FEATURES from './FeaturesObject'

export default class FeaturesObject extends React.Component{
    render(){
        return(
            Object.keys(FEATURES).map((feature, idx) => {
                const featureHash = feature + '-' + idx;
                const options = FEATURES[feature].map(item => {
                  const itemHash = slugify(JSON.stringify(item));
                  return (
                    <div key={itemHash} className="feature__item">
                      <input
                        type="radio"
                        id={itemHash}
                        className="feature__option"
                        name={slugify(feature)}
                        checked={item.name === this.props.selected[feature].name}
                        onChange={e => this.props.updateFeature(feature, item)}
                      />
                      <label htmlFor={itemHash} className="feature__label">
                        {item.name} ({this.props.USCurrencyFormat.format(item.cost)})
                      </label>
                    </div>
                  );
                });
            
                return (
                  <fieldset className="feature" key={featureHash}>
                    <legend className="feature__name">
                      <h3>{feature}</h3>
                    </legend>
                    {options}
                  </fieldset>
                );
              })
        )
    }
}
