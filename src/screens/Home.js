import React from "react";
import Card from "../components/card";
import votees from "../utils/votees.json";
import './home.scss';

export default class Home extends React.Component {
  state = {
    votees,
    voteList: {},
    userId: 1,
  }

  vote = (voteeId) => {
    const { voteList } = this.state;
    let list = [];
    if (voteList[voteeId]) {
      voteList[voteeId] = false;
      list = votees.map(votee => {
        if (votee.id === voteeId) {
          votee.votes = votee.votes -1
        }
        return votee
      })
    } else {
      voteList[voteeId] = true;
      list = votees.map(votee => {
        if (votee.id === voteeId) {
          votee.votes = votee.votes + 1;
        }
        return votee
      })
    }
    this.setState({
      voteList,
      votees: list
    })

  }
  render() {
    return (
      <main>
        <div className="cards-container">
          {this.state.votees.map((votee) => (
            <Card
              key={votee.id}
              {
                ...votee
              }
              vote={this.vote}
              voteList={this.state.voteList}
            />
          ))}
        </div>
      </main>
    );
  }
}
