import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";
import { selectSong } from "../actions";

const App = function () {
  return (
    <div>
      <SongList />
      <SongDetail />
    </div>
  );
};
export default App;
