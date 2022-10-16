import React from 'react';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 0,
            step: 5,
            max: 15,
        }
    }
    handleDecrement = () => {
        this.setState({
            counter: this.state.counter - this.state.step > this.state.max ? this.state.counter : this.state.counter - this.state.step
        });
    };
    handleIncrement = () => {
        let {counter, step, max} = this.state;
        this.setState({
            counter: counter - step > max ? counter : counter + step,
        });
    };
    handleReset = () => {
        this.setState({
            counter: 0,
        });
    };
    render () {
        return (
            <div className='container'>
            <h1>{this.state.counter}</h1>
            <div className='steps'>
                <h3>Steps</h3>
                {[5, 10, 15].map((step) => (
                    <button onClick={() => {
                        this.setState({step : step});
                    }}
                    className={this.state.step === step ? 'active--step' : ''}>{step}</button>
                ))}
            </div>

            <div className='steps'>
                <h3>Max</h3>
                {[15, 100, 200].map((max) => (
                    <button onClick={() => {
                        this.setState({step : max});
                    }}
                    className={this.state.step === max ? 'active--step' : ''}>{max}</button>
                ))}
            </div>

            <div className='buttons'>
            <button onClick={this.handleDecrement}>Decrement</button>
            <button onClick={this.handleIncrement}>Increment</button>
            <button onClick={this.handleReset}>Reset</button>
            </div>
            </div>
        )
    };
}

export default App;