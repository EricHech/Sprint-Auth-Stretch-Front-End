import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getJokes } from '../Redux/actions';
import './displayJokes.css';

class DisplayJokes extends Component {
  componentWillMount() {
    this.props.getJokes();
  }

  render() {
    console.log(this.props.jokes);
    return (
      <ul className="App">
        {this.props.jokes.map((joke, i) => {
          return (
            <li key={i}>
              <div>{joke.setup}</div>
              <div>{joke.punchline}</div>
              <div>--------------------------------------------</div>
            </li>
          );
        })}
      </ul>
    );
  }
}
const mapStateToProps = state => {
  return {
    jokes: state.jokes,
  };
};

export default connect(mapStateToProps, { getJokes })(DisplayJokes);
