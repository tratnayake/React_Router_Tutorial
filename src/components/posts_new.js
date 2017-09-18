import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';


class PostsNew extends Component {
  renderField(field) {
    return(
      <div className="form-group">
        <label>{field.label}</label>
        <input
          type="text" className="form-control"
          {...field.input}
        />
        {field.meta.error}
      </div>
    )
  }

  render() {
    return(
      <form>
        <Field
          label="Username"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Password"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Snapchat Username"
          name="content"
          component={this.renderField}
        />
      </form>
    )
  }
}

function validate(values){

  const errors ={};

  //Validate the inputs from 'values"'
  if (!values.title){
    errors.title = "Enter ur username!"
  }
  if (!values.categories){
    errors.categories = "1337 pws only"
  }
  if (!values.content){
    errors.content = "#weouthere"
  }

  return errors;

}


export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);
