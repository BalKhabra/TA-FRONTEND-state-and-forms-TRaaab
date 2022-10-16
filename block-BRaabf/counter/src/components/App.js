import React from 'react';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 0,
        }
    }
    handleDecrement = () => {
        this.setState({
            counter: this.state.counter -1,
        });
    };
    handleIncrement = () => {
        this.setState({
            counter: this.state.counter +1,
        });
    };
    handleReset = () => {
        this.setState({
            counter: 0,
        });
    };
    //steps
    handleStepsFive = () => {
        this.setState({
            counter: 5,
        });
    };
    handleStepsTen = () => {
        this.setState({
            counter: 10,
        });
    };
    handleStepsFifteen = () => {
        this.setState({
            counter: 15,
        });

    //increments    
    };
    handleFive = () => {
        this.setState({
            counter: this.state.counter +5,
        });
    };
    handleTen = () => {
        this.setState({
            counter: this.state.counter +10,
        });
    };
    handleFifteen = () => {
        this.setState({
            counter: this.state.counter +15,
        });
    };
    render(){
        return (
            <center>
                <h1>Counter App</h1>

                <h2>{this.state.counter}</h2>
                <div>
                    <h2>Steps</h2>
                    <button onClick={this.handleStepsFive}>5</button>
                    <button onClick={this.handleStepsTen}>10</button>
                    <button onClick={this.handleStepsFifteen}>15</button>
                </div>
                <button onClick={this.handleDecrement}>Decrement</button>
                <button onClick={this.handleIncrement}>Increment</button>
                <button onClick={this.handleReset}>Reset</button>
            </center>
        );
    }
}

export default App;