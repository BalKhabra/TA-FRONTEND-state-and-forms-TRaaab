import React from 'react';
import Size from './Size';
import Product from './Product';

class App extends React.Component {
  render(){
  return (
    <div className="container">
      <Size />
      <Product />
    </div>
  );
}
}

export default App;


