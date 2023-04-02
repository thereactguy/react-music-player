import React from "react";
import styled from "styled-components";
import { PlaylistProvider } from "../context/PlayerProvider";

const controlBar = () => {
  const Button = styled.button`
    color: palevioletred;
    font-size: 1rem;
    margin: 8px;
    padding: 8px 16px;
    border: 2px solid palevioletred;
    border-radius: 3px;
    cursor: pointer;
  `;

  const BottomPanel = styled.div`
    display: block;
    padding: 16px;
    background: #eeeeee;
  `;

  const SongName = styled.h2`
    display: block;
    padding: 10px;
    font-size: 1.5rem;
    color: #777;
    margin: 0;
  `;

  return (
    <PlaylistProvider.Consumer>
      {(value: any) => (
        <>
          <BottomPanel>
            <SongName>
              {value?.playItem.author} - {value?.playItem.title}
            </SongName>
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
