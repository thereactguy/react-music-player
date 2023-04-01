import React from "react";
import styled from "styled-components";

export interface PlayList {
  track?: any;
  onChangeTrack(id?: any): void;
  playlist: any[];
}

const SongList: React.FC<PlayList> = ({ onChangeTrack, track, playlist }) => {
  const ListBlock = styled.div`
    display: block;
    background: #000;
    padding: 16px 16px 0;
    text-align: left;
  `;
  const SongItem = styled.div`
    display: block;
    line-height: 1.5rem;
    padding-bottom: 16px;
    color: #fff;
    & .authorName {
      display: block;
      color: #fff;
    }
    &.active {
      color: green;
    }
  `;

  return (
    <ListBlock>
      {playlist &&
        playlist.map((playItem) => (
          <SongItem
            onClick={() => onChangeTrack(playItem.id)}
            className={track === playItem.id ? "active" : ""}
          >
            {playItem.title}
            <span className="authorName">{playItem.author}</span>
          </SongItem>
        ))}
    </ListBlock>
  );
};

export default SongList;
