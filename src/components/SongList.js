import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

const SongList = () => {
  return <div>Song List</div>;
};

const mapStateToProps = (state) => {
  console.log(state);
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong: selectSong })(SongList);
