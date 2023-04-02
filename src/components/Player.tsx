import React, { useState, useEffect } from "react";
import Controlbar from "./Controlbar";
import Songs from "./Songs";
import { fetchPlaylist, PlaylistProvider } from "../context/PlayerProvider";
import { playModes } from "../consts";

const Player = () => {
  const [playlist, setPlaylist] = useState<any>([]);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [playItem, setPlayItem] = useState<any>([]);
  const [currentMode, setCurrentMode] = useState<any>(playModes[0].mode);

  // Manage Track
  const manageTrack = (id: any) => {
    setPlayItem(playlist.filter((item: any) => item.id === id)[0] || []);
  };

  // Handle Current Mode
  const handleMode = (operationType?: string) => {
    let newItem = 0;
    switch (currentMode) {
      case playModes[0].mode:
        if (typeof operationType !== "string") {
          setCurrentMode(playModes[1].mode);
        }
        if (operationType && operationType === "prev") {
          newItem = currentTrack >= 2 ? currentTrack - 1 : currentTrack;
        }
        if (operationType && operationType === "next") {
          newItem =
            currentTrack === playlist.length + 1
              ? playlist.length + 1
              : currentTrack + 1;
        }
        break;
      case playModes[1].mode:
        if (typeof operationType !== "string") {
          setCurrentMode(playModes[2].mode);
        }
        if (operationType && operationType === "prev") {
          newItem = currentTrack >= 2 ? currentTrack - 1 : playlist.length;
        }
        if (operationType && operationType === "next") {
          newItem = currentTrack === playlist.length ? 1 : currentTrack + 1;
        }
        break;
      default:
        if (typeof operationType !== "string") {
          setCurrentMode(playModes[0].mode);
        }
        if (operationType) {
          newItem = currentTrack;
        }
        break;
    }
    return newItem;
  };

  // Handle the track change
  const handleChangeTrack = (id?: any) => {
    manageTrack(id);
    setCurrentTrack(id);
  };

  // Handle Previous Click
  const handlePrev = () => {
    let newItem = handleMode("prev");
    manageTrack(newItem);
    setCurrentTrack(newItem);
  };

  // Handle Next Click
  const handleNext = () => {
    let newItem = handleMode("next");
    manageTrack(newItem);
    setCurrentTrack(newItem);
  };

  // Fetching Data
  const handleFetchData = async () => {
    const playlist = await fetchPlaylist();
    setPlaylist(playlist);
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <>
      <PlaylistProvider.Provider
        value={{
          handlePrev,
          handleNext,
          handleChangeTrack,
          handleMode,
          currentMode,
          playlist,
          currentTrack,
          playItem,
        }}
      >
        <main data-testid="mainPart">
          <Songs />
          <Controlbar />
        </main>
      </PlaylistProvider.Provider>
    </>
  );
};

export default Player;
