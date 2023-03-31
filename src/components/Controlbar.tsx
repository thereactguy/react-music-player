import React from "react";
import styled from "styled-components";

export interface ControllPanel {
  track?: any;
}

const controlBar: React.FC<ControllPanel> = ({ track }) => {
  const Button = styled.button`
    color: palevioletred;
    font-size: 1rem;
    margin: 8px;
    padding: 8px 16px;
    border: 2px solid palevioletred;
    border-radius: 3px;
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
  console.log("track", track);

  return (
    <BottomPanel>
      <SongName>Author Name - Song Name</SongName>
      <Button>Prevoius</Button>
      <Button>Next</Button>
      <Button>Not replaying</Button>
    </BottomPanel>
  );
};

export default controlBar;
