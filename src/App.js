import React, { Component } from 'react';
import Header from './Header';
import CustomizeForm from './CustomizeForm';
import Cart from './Cart';
import './App.css';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };
// the arrow function binds it to app.
// whenever you're passing a function down to children, make it an arrow function
  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {


    return (
      <div className="App">
       <Header />
        <main>

          {/* customizeForm features prop is app's features prop and cF selected prop is coming from App's selected state */}
        <CustomizeForm 
          selected={this.state.selected} 
          updateFeature={this.updateFeature} 
          USCurrencyFormat={USCurrencyFormat}
          />

        <Cart 
          selected={this.state.selected} 
          USCurrencyFormat={USCurrencyFormat} />
        
        </main>
      </div>
    );
  }
}



export default App;
