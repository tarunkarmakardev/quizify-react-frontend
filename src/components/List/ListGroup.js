import React, { Component } from "react";
import ListGroupItem from "./ListGroupItem";

export default class ListGroup extends Component {
  state = {
    activeItemId: "",
  };
  setActiveId = (id) => {
    // console.log(id);
    this.setState({ activeItemId: id });
    this.props.onClick(id);
  };
  renderListItems = (items, showCreatedBy, showDelete, onDelete) => {
    return items.map(({ id, title, created_by, category, max_questions }) => {
      return (
        <ListGroupItem
          id={id}
          key={id}
          heading={title}
          createdBy={showCreatedBy ? created_by : ""}
          category={category}
          onClick={this.setActiveId}
          active={this.state.activeItemId === id}
          maxQuestions={max_questions}
          showDelete={showDelete}
          onDelete={onDelete}
        />
      );
    });
  };
  render() {
    // console.log(this.props);
    const { items, showCreatedBy, showDelete, onDelete } = this.props;
    return (
      <div className="list-group" style={{ cursor: "pointer" }}>
        {this.renderListItems(items, showCreatedBy, showDelete, onDelete)}
      </div>
    );
  }
}
