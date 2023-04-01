import React from "react";
import styled from "styled-components";
import { PlaylistContext } from "../context/PlayerProvider";

export interface ControllPanel {
  playItem?: {
    title?: string;
    author: string;
  };
}

const controlBar: React.FC<ControllPanel> = ({ playItem }) => {
  // const [currentTract, setCurrentTrack] = React.useState();
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

  // playlist?.map((playItem) => {
  //   if (playItem?.id === track) {
  //     setCurrentTrack(playItem);
  //   }
  // });

  return (
    <PlaylistContext.Consumer>
      {(value: any) => (
        <>
          <BottomPanel>
            <SongName>
              {playItem?.author} - {playItem?.title}
            </SongName>
            <Button onClick={value?.handlePrev}>Prevoius</Button>
            <Button onClick={value?.handleNext}>Next</Button>
            <Button>Not replaying</Button>
          </BottomPanel>
        </>
      )}
    </PlaylistContext.Consumer>
  );
};

export default controlBar;
