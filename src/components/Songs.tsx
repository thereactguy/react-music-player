import React from "react";
import styled from "styled-components";

export interface PlayList {
  onChangeTrack(id?: any): void;
  playlist: any[];
}

const SongList: React.FC<PlayList> = ({ onChangeTrack, playlist }) => {
  const ListBlock = styled.div`
    display: block;
    background: #000;
    color: #fff;
    padding: 16px 16px 0;
    text-align: left;
  `;
  const SongName = styled.div`
    display: block;
    line-height: 1.5rem;
    padding-bottom: 16px;
    & .authorName {
      display: block;
    }
  `;

  return (
    <ListBlock>
      {playlist.map((playItem) => (
        <SongName onClick={() => onChangeTrack(playItem.id)}>
          {playItem.title}
          <span className="authorName">{playItem.author}</span>
        </SongName>
      ))}
    </ListBlock>
  );
};

export default SongList;
