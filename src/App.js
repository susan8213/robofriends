import React, { useEffect } from "react";
import { connect } from 'react-redux';
import ReactLoading from "react-loading";
import "tachyons";
import "./App.css";
import CardGallery from "./components/CardGallery";
import SearchBar from "./components/SearchBar"
import Scroll from "./components/Scroll"

import { requestRobots, setSearchField } from "./actions"


function App({ onRequestRobot, onSearchChange, robots, searchField, isPending, error }) {
  const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));

  useEffect(() => {
    onRequestRobot();
  }, [onRequestRobot]);

  useEffect(() => {
    if (error) alert(error);
  }, [error]);


  return (
    <div className="App tc">
      <h1 className="f1 App-header">RoboFriends</h1>
      <SearchBar handleSearchChange={onSearchChange} />
      {
        isPending ? (
          <ReactLoading className="center" type={"bubbles"} color={"#cdecff"} height={'10%'} width={'10%'} />
        ) : (
          <Scroll>
            <CardGallery robots={filteredRobots} />
          </Scroll>
        )
      }
    </div>
  );
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
