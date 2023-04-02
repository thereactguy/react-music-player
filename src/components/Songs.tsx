import React from "react";
import styled from "styled-components";
import { PlaylistProvider } from "../context/PlayerProvider";

const Songs = () => {
  const ListBlock = styled.div`
    display: block;
    background: #222;
    padding: 16px 16px 0;
    text-align: left;
    max-width: 450px;
    margin: auto;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    box-shadow: 0 0 4px #444;
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
              // Song Listing
              <SongItem
                onClick={() => value?.handleChangeTrack(playItem.id)}
                className={value.currentTrack === playItem.id ? "active" : ""}
              >
                {/* Audio Player */}
                <audio
                  id="audioPlayer"
                  preload="metadata"
                  autoPlay={value.currentTrack === playItem.id ? true : false}
                  loop={false}
                >
                  <source src={playItem?.url} type="audio/ogg" />
                  Ooops, your browser is sooo old.
                </audio>

                {/* Song Info */}
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
