import React from 'react';
import fonts from "./data.json"

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      inputText: "",
    }
  }
  handleChange = (event) => {
    this.setState({ inputText: event.target.value});
  };
  handleSlider = (event) => {
    this.state({
      size:event.target.value
    })
  }
  render() {
    return (
      <>
        <input onChange={this.handleChange} type="Text" placeholder='Type something' />
        <input type="range" min="1" max="2" onChange = {this.handleSlider} value ="50" class="slider" id="myRange" />
        <ul className='cards'>
          {fonts.map((font, i) => {
            return (<li key = {i} className="card">
              <h3>{font.name}</h3>
              <h2 style={{
                fontSize:this.state.size,
                fontFamily:font.font,
              }}>
                {this.state.inputText}
              </h2>
            </li>
            )
          })}
        </ul>
        <button onClick={this.handleClick}>refresh</button>
      </>
    )
  }
}

export default App;