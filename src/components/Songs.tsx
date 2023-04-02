import React from "react";
import styled from "styled-components";
import { PlaylistProvider } from "../context/PlayerProvider";

const Songs = () => {
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
    <PlaylistProvider.Consumer>
      {(value: any) => (
        <ListBlock>
          {value?.playlist &&
            value?.playlist.map((playItem: any) => (
              <SongItem
                onClick={() => value?.handleChangeTrack(playItem.id)}
                className={value.currentTrack === playItem.id ? "active" : ""}
              >
                <audio
                  id="audioPlayer"
                  preload="metadata"
                  autoPlay={value.currentTrack === playItem.id ? true : false}
                  loop={false}
                >
                  <source src={playItem?.url} type="audio/ogg" />
                  Ooops, your browser is sooo old.
                </audio>

                {playItem.title}
                <span className="authorName">{playItem.author}</span>
              </SongItem>
            ))}
        </ListBlock>
      )}
    </PlaylistProvider.Consumer>
  );
};

export default Songs;
