import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { isLoaded, isEmpty, withFirestore } from "react-redux-firebase";

class FirebaseTester extends Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentWillMount() {
    const { firestore } = this.context.store;
    firestore.get("todos");
  }
  render() {
    return (
      <div>
        hi
        {/* {todos.map(todo => (
          <div key={todo.id}>{JSON.stringify(todo)}</div>
        ))} */}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  todos: state.firestore.ordered.todos
});
export default connect()(FirebaseTester);

// const fireTester = ({ firebase, todos }) => {
//   const sampleTodo = { text: "sample todo", done: false };
//   const pushSample = () => firebase.push("todos", sampleTodo);
//   const todosList = !isLoaded(todos)
//     ? "Loading"
//     : isEmpty(todos)
//       ? "they empty"
//       : Object.keys(todos).map((key, id) => <li>{todos[key]}</li>);
//   return (
//     <div>
//       <h1>Todos</h1>
//       <ul>{todosList}</ul>
//       <input type="text" />
//       <button onClick={pushSample}>Add</button>
//     </div>
//   );
// };

// const mapStateToProps = state => ({
//   todos: state.firestore.data.todos
// });

// export default compose(
//   withFirestore,
//   connect(mapStateToProps)
// )(fireTester);
