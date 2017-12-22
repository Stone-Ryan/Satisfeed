import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';


const FIELDS = [
  {label: 'Survey Title', name: 'title', errMess: ' title'},
  {label: 'Subject Line', name: 'subject', errMess: ' subject'},
  {label: 'Email Body', name:'body', errMess: ' body'},
  {label: 'Recipient List', name:'emails', errMess: 'n email'}
]

class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name }) => {
      return(
        <Field key={name} component={SurveyField} type="text" label={label} name={name} />
      )
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>

          {this.renderFields()}

          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>

          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>

          </button>
        </form>
      </div>
    )
  }
}

function validate(values) {
  const errors = {};

  errors.emails = validateEmails(values.emails || '');

  _.each(FIELDS, ({ name, errMess }) => {
    if(!values[name]) {
      errors[name] = `You must include a${errMess}`;
    }
  });


  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
