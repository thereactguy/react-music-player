import React, { useState, useEffect } from "react";
import Controlbar from "./Controlbar";
import SongList from "./Songs";
import { fetchPlaylist, PlaylistContext } from "../context/PlayerProvider";

const Player = () => {
  const [playlist, setPlaylist] = useState<any>([]);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [playItem, setPlayItem] = useState<any>([]);

  const manageTrack = (id: any) => {
    playlist.map((item: any) => {
      if (item.id === id) {
        setPlayItem(item);
      }
    });
  };

  const handleChangeTrack = (id?: any) => {
    manageTrack(id);
    setCurrentTrack(id);
  };

  const handlePrev = () => {
    let newItem = currentTrack - 1;
    manageTrack(newItem);
    setCurrentTrack(newItem);
  };

  const handleNext = () => {
    let newItem = currentTrack + 1;
    manageTrack(newItem);
    setCurrentTrack(newItem);
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
          <SongList
            onChangeTrack={handleChangeTrack}
            playlist={playlist}
            track={currentTrack}
          />
          <Controlbar playItem={playItem} />
        </main>
      </PlaylistContext.Provider>
    </>
  );
};

export default Player;
