import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditReward extends Component {
  constructor(props) {
    super(props);

    this.onChangePupilname = this.onChangePupilname.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeStars = this.onChangeStars.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      pupilname: '',
      description: '',
      stars: 0,
      date: new Date(),
      pupils: []
    }
  }

  componentDidMount() {
    axios.get('/rewards/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          pupilname: response.data.pupilname,
          description: response.data.description,
          stars: response.data.stars,
          date: new Date(response.data.date)
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('/pupils/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            pupils: response.data.map(pupil => pupil.pupilname),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangePupilname(e) {
    this.setState({
      pupilname: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeStars(e) {
    this.setState({
      stars: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const reward = {
      pupilname: this.state.pupilname,
      description: this.state.description,
      stars: this.state.stars,
      date: this.state.date
    }

    console.log(reward);

    axios.post('/rewards/update/' + this.props.match.params.id, reward)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Edit Reward Register</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Pupilname: </label>
          <select ref="pupilInput"
              required
              className="form-control"
              value={this.state.pupilname}
              onChange={this.onChangePupilname}>
              {
                this.state.pupils.map(function(pupil) {
                  return <option 
                    key={pupil}
                    value={pupil}>{pupil}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Stars: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.stars}
              onChange={this.onChangeStars}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Edit Reward Register" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}