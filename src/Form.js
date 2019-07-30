import React,{Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Form extends Component{

  constructor(props) {
    super(props);

    this.initialState = {
      'name':'',
      'job':''
    }

    this.state = this.initialState;
  }

  submitForm = () =>{
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  }

  handleEvent = event => {
    const {name,value} = event.target;

    this.setState({
      [name]:value,
    })
  }

  render() {

    const {name,job} = this.state;

    return(

          <form>
            <div className="row">

              <div className="col-md-4">
              <div className="form-group">
              <label>Name</label>
              <input className="form-control" type="text" name="name" value={name} onChange={this.handleEvent}/>
              </div>
              </div>
            <div className="col-md-4">
              <div className="form-group">
              <label>Job</label>
              <input className="form-control" type="text" name="job" value={job} onChange={this.handleEvent}/>

              </div>
            </div>

              <div className="col-md-4">
                <input type="button" value="Submit" className="btn btn-default btn-primary" onClick={this.submitForm}/>
              </div>
            </div>
        </form>

    );
  }
}

export default Form;