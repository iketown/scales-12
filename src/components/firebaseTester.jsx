import React from "react";
import { isLoaded, isEmpty, withFirestore } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";

const fireTester = ({ firebase, todos }) => {
  const sampleTodo = { text: "sample todo", done: false };
  const pushSample = () => firebase.push("todos", sampleTodo);
  const todosList = !isLoaded(todos)
    ? "Loading"
    : isEmpty(todos)
      ? "they empty"
      : Object.keys(todos).map((key, id) => <li>{todos[key]}</li>);
  return (
    <div>
      <h1>Todos</h1>
      <ul>{todosList}</ul>
      <input type="text" />
      <button onClick={pushSample}>Add</button>
    </div>
  );
};

const mapStateToProps = state => ({
  todos: state.firebase.data.todos
});

export default compose(
  withFirestore,
  connect(mapStateToProps)
)(fireTester);
