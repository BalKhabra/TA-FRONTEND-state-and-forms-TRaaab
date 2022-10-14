import React from 'react';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            active: "basketball"
        }
    }
    render(){
    let labels = ['basketball', 'pubg', 'tiger', 'phone', 'laptop']
    return <>
    <div className='buttons'>
        {labels.map((label) => (
                <button 
                    key={label}
                    className={this.state.active === label ? 'active' : '' }
                    onClick={() => {
                    this.setState({
                        active: label,
                    })
                }}>{label}</button>
            ))}
    </div>
    <img alt={this.state.active} src={'./images/basketball.jpg'}/>
    </>
    }
}

export default App;