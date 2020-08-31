import React, { useState }  from "react";
import { getURLParam } from "./components/Url/Url";
import Title from "./components/Title/Title";
import Search from "./components/Search/Search";
import Switch from "./components/Switch/Switch";
import Board from "./components/Board/Board";

function App() {
  const gifParams = getURLParam("ids") || "";
  let [showBoard, setShowBoard] = useState(Boolean(gifParams));
  const handleSwitch = () => setShowBoard(showBoard = !showBoard);
  return (
    <main>
      <Title />
      { showBoard ? <Board gifs={gifParams} /> : <Search /> }
      <Switch showBoard={showBoard} callback={handleSwitch} />
    </main>
  );
}

export default App;
