import React, { useEffect } from 'react'
import ReactLoading from "react-loading";
import CardGallery from "../components/CardGallery"
import SearchBar from "../components/SearchBar"
import Scroll from "../components/Scroll"
import "tachyons";


function Home({ onRequestRobot, onSearchChange, robots, searchField, isPending, error }) {
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

export default Home;