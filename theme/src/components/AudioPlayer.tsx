import React from 'react';
import AudioCard from 'audiocard';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

type Props = {
  url: string;
  title: string;
  cover?: string;
  link?: string;
};

const AudioPlayer = ({ url, title, cover, link }: Props) => {
  const theme = useContext(ThemeContext);

  return (
    <AudioCard
      source={url}
      title={title}
      skipBackSeconds={10}
      skipForwardSeconds={30}
      art={cover}
      link={link}
      color={theme.colors.text}
      progressBarBackground={theme.colors.primaryLight}
      progressBarCompleteBackground={theme.colors.primary}
      linkText="Link to Anchor"
    />
  );
};

export default AudioPlayer;
