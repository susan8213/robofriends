import React from "react";
import { connect } from 'react-redux';
import "./App.css";

import { requestRobots, setSearchField } from "./actions"
import Home from "./pages/Home";


function App(props) {
  return <Home {...props} />
}

const mapStateToProps = state => ({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error,
})

const mapDispatchToProps = dispatch => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  onRequestRobot: () => dispatch(requestRobots())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
