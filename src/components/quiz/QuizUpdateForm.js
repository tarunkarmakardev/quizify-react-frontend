import React, { Component } from "react";
import QuizForm from "../Form/QuizForm";

const categories = [
  {
    id: 1,
    name: "Entertainment",
  },
  {
    id: 2,
    name: "Science",
  },
  {
    id: 3,
    name: "Maths",
  },
];

export default class QuizUpdateForm extends Component {
  handleOnSubmit = (values) => {
    console.log(values);
  };
  render() {
    return <QuizForm categories={categories} onSubmit={this.handleOnSubmit} />;
  }
}
