import React from "react";
import './card.scss';

export default function Card(props) {
  return (
    <div className="card">
      <div className="image-container">
        <img alt="votee" className="card-image" src={props.image} />
      </div>
      <div className="card-info">
        <div className="candidate-votes">
          <div className="title-text">{props.votes}</div>
          <div className="sub-text">VOTES</div>
        </div>
        <div className="line"></div>
        <div className="candidate-info">
          <div className="title-text">{props.name}</div>
          <div className="sub-text">{'face of rhosyface2021'}</div>
        </div>
      </div>
      <button
        onClick={() => props.vote(props.id)}
        className="card-btn">
          {props.voteList[props.id] ? 'remove vote' : 'vote'}
      </button>
    </div>
  );
}
