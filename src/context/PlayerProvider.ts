import React from "react";
import { SongList } from "../consts";

// Fetching data
export const fetchPlaylist = () => {
  return new Promise((res, rej) => {
    setTimeout(() => res(SongList), 1000);
  });
};

export const PlaylistProvider = React.createContext({});
