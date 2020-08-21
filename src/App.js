import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import "tachyons";
import "./App.css";
import CardGallery from "./components/CardGallery";
import SearchBar from "./components/SearchBar"
import Scroll from "./components/Scroll"

function App() {
  const [robots, setRobots] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        setRobots(users); 
        setSearchResult(users)
      });
    setIsLoading(false);
  }

  const handleSearchChange = (event) => {
    setIsLoading(true);

    const keyword = event.target.value;
    let filterdResult = robots.filter(robot => {
      return robot.name.toLowerCase().includes(keyword.toLowerCase());
    })
    setSearchResult(filterdResult);
    setIsLoading(false);
  }


  return (
    <div className="App tc">
      <h1 className="f1 App-header">RoboFriends</h1>
      <SearchBar handleSearchChange={handleSearchChange} />
      {
        isLoading ? (
          <ReactLoading className="center" type={"bubbles"} color={"#cdecff"} height={'10%'} width={'10%'} />
        ) : (
          <Scroll>
            <CardGallery robots={searchResult} />
          </Scroll>
        )
      }
    </div>
  );
}

export default App;
