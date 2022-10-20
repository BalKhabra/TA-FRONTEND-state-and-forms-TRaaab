import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1, 
      email: '',
      username: '',
      password: '', 
    }
  }
  render(){
    return(
        <div>
        <form>
        <label htmlFor = "text">First Name</label>
        <input onChange = {this.handleChange} type = "text" name="text" value="" />
        <label htmlFor = "text">Last Name</label>
        <input onChange = {this.handleChange} type = "text" name="text" value="" />

        <label htmlFor = "date">Date of Birth</label>
        <input onChange = {this.handleChange} type = "date" name = "date" value=""/>

        <label htmlFor = "date">Email Address</label>
        <input onChange = {this.handleChange} type = "text" name = "email" value=""/>
        
        <label htmlFor = "textarea">Enter Details</label>
        <textarea onChange = {this.handleChange} name="textarea" cols="30" rows="10" value = ""></textarea>

        <input type="submit" value = "submit"/>

        </form>
        </div>
    )
}
}
export default App;

