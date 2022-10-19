import React from 'react';

class App extends React.Component{
  constructor(props){
      super(props)
      this.state = {
          text:"",
          date:"",
          file:"",
          textarea:"",
          errors:{
              text:"",
              date:"",
              file:"",
              textarea:""
          }

      }
  }

  handleSubmit = (event) => {
      event.preventDefault();
      console.log(this.state);
  }

  handleChange = (event) => {
      event.preventDefault();
      let name = event.target.name;
      let element = this.state[name] 
      let errors = this.state.errors;

      switch(name){
      case 'text':
      errors.text = element.length > 6 ? "" : "length should be more than 6 char";
      break;
      case 'date':
      errors.date = element.length > 3 ? "" : "length shud be more than 3 char";
      break;
      case 'file':
      errors.file = element.length > 8 ? "": "length shuld be more than 8 char"
       break;
       case 'textarea':
       errors.textarea = element.length > 15 ? "" : "char shud be more than 15"
       break;

       default: break;

  }
  this.setState({
      errors,
      [name] : event.target.value
  })

 
  }
  render(){
      return(
          <>
          <form>
          <label htmlFor = "text">Enter text</label>
          <input onChange = {this.handleChange} type = "text" name="text" value="" />

          <label htmlFor = "date">Enter Date</label>
          <input onChange = {this.handleChange} type = "date" name = "date" value=""/>

          <label htmlFor = "file">Choose File</label>
          <input onChange = {this.handleChange} type = "file" name = "file" value=""/>

          <label htmlFor = "readonly">Enter Date</label>
          <input onChange = {this.handleChange} type = "text" readonly name = "readonly" value=""/>

          
          <label htmlFor = "textarea">Enter Details</label>
          <textarea onChange = {this.handleChange} name="textarea" cols="30" rows="10" value = ""></textarea>

          <input type="submit" value = "submit"/>

          </form>
          </>
      )
  }
}

export default App;