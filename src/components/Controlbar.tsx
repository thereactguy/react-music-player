import React from "react";
import styled from "styled-components";
import { PlaylistProvider } from "../context/PlayerProvider";

const controlBar = () => {
  const Button = styled.button`
    color: palevioletred;
    font-size: 1rem;
    margin: 4px;
    padding: 8px 16px;
    border: 2px solid palevioletred;
    border-radius: 3px;
    cursor: pointer;
  `;

  const BottomPanel = styled.div`
    display: block;
    padding: 16px;
    background: #eeeeee;
    max-width: 450px;
    margin: auto;
    border-bottom-left-radius: 8px;
    box-shadow: 0px 0px 3px #999
    border-bottom-right-radius: 8px;
  `;

  const SongName = styled.h2`
    display: block;
    padding: 10px;
    font-size: 1.25rem;
    color: #777;
    margin: 0;
  `;

  return (
    <PlaylistProvider.Consumer>
      {(value: any) => (
        <>
          {/* Control Panel */}
          <BottomPanel>
            {/* Song Name & Author */}
            <SongName>
              {value?.playItem.author} {value?.currentTrack !== 0 ? "- " : ""}
              {value?.playItem.title}
            </SongName>
            {/* Action Buttons */}
            <Button onClick={value?.handlePrev}>Prevoius</Button>
            <Button onClick={value?.handleNext}>Next</Button>
            <Button onClick={value?.handleMode}>{value.currentMode}</Button>
          </BottomPanel>
        </>
      )}
    </PlaylistProvider.Consumer>
  );
};

export default controlBar;
