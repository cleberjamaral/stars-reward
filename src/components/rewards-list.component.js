import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Reward = props => (
  <tr>
    <td>{props.reward.pupilname}</td>
    <td>{props.reward.description}</td>
    <td>{props.reward.stars}</td>
    <td>{props.reward.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.reward._id}>edit</Link> | <a href="#" onClick={() => { props.deleteReward(props.reward._id) }}>delete</a>
    </td>
  </tr>
)

export default class RewardsList extends Component {
  constructor(props) {
    super(props);

    this.deleteReward = this.deleteReward.bind(this)

    this.state = {rewards: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/rewards/')
      .then(response => {
        this.setState({ rewards: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteReward(id) {
    axios.delete('http://localhost:5000/rewards/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      rewards: this.state.rewards.filter(el => el._id !== id)
    })
  }

  rewardList() {
    return this.state.rewards.map(currentreward => {
      return <Reward reward={currentreward} deleteReward={this.deleteReward} key={currentreward._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Registered Rewards</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Pupilname</th>
              <th>Description</th>
              <th>Stars</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.rewardList() }
          </tbody>
        </table>
      </div>
    )
  }
}