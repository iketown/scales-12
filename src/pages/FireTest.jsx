import React, { Component } from "react";
import Layout from "../layout/Layout.jsx";
import { connect } from "react-redux";
import {
  compose,
  withHandlers,
  lifecycle,
  withContext,
  getContext
} from "recompose";

class FireTest extends Component {
  render() {
    return <Layout>hi</Layout>;
  }
}

export default FireTest;
