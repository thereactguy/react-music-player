import React, { useState, useEffect } from "react";
import Controlbar from "./Controlbar";
import SongList from "./Songs";
import { fetchPlaylist, PlaylistContext } from "../context/PlayerProvider";

const Player = () => {
  const [playlist, setPlaylist] = useState<any>([]);
  const [currentTrack, setCurrentTrack] = useState(0);

  const handleChangeTrack = (id?: any) => {
    setCurrentTrack(id);
  };

  const handlePrev = () => {
    console.log("clicked");
    return 0;
  };
  const handleNext = () => {
    console.log("clicked");
  };

  const handleFetchData = async () => {
    const playlist = await fetchPlaylist();
    setPlaylist(playlist);
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <>
      <PlaylistContext.Provider value={{ handlePrev, handleNext }}>
        <main data-testid="mainPart">
          <SongList onChangeTrack={handleChangeTrack} playlist={playlist} />
          <Controlbar track={currentTrack} />
        </main>
      </PlaylistContext.Provider>
    </>
  );
};

export default Player;
