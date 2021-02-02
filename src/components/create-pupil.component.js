import React, { Component } from 'react';
import axios from 'axios';

export default class CreatePupil extends Component {
  constructor(props) {
    super(props);

    this.onChangePupilname = this.onChangePupilname.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      pupilname: ''
    }
  }

  onChangePupilname(e) {
    this.setState({
      pupilname: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const pupil = {
      pupilname: this.state.pupilname
    }

    console.log(pupil);

    axios.post('http://localhost:5000/pupils/add', pupil)
      .then(res => console.log(res.data));

    this.setState({
      pupilname: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Create Pupil</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Pupil name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.pupilname}
                onChange={this.onChangePupilname}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create Pupil" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}