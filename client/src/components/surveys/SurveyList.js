import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
  componentDidMount(){
    this.props.fetchSurveys();
  };

  renderSurveys() {
    return this.props.surveys.reverse().map(({ title, body, dateSent, yes, no}) => {
      return (
        <div className="card darken-1" key={title}>
          <div className="card-content">
            <span className="card-title">{title}</span>
            <p>
              {body}
            </p>
            <p className="right">
              Sent On: {new Date(dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a>Yes: {yes}</a>
            <a>No: {no}</a>
          </div>
        </div>
      );
    })
  };

  render() {
    return(
      <div>
        {this.renderSurveys()}
      </div>
    );
  }
}

function mapStateToProps({surveys}) {
  return { surveys }
};

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
