import React from 'react';
import _ from 'lodash';

import { connect } from 'react-redux';
import formFields from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  })

  return (
    <div>
      <h5>Please confirm your entries</h5>

      {reviewFields}

      <button
        className="yellow darken-3 btn-flat white-text"
        onClick={onCancel}
        >
        Back
      </button>

      <button
        className="green btn-flat white-text right"
        onClick={() => submitSurvey(formValues)}
        >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(SurveyFormReview);
