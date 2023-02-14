import styled from "styled-components";
import { IconMediafire } from "../../../../icons/IconMediafire";
import { IconMega } from "../../../../icons/IconMega";
import { IconTorrent } from "../../../../icons/IconTorrent";

import ImgDownloads from "../../../../../assets/dark-texture.jpeg";

export function Downloads() {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <DownloadsContainer theme={ImgDownloads}>
          <MegaButton><IconMega /> MEGA</MegaButton>
          <MediafireButton><IconMediafire /> MEDIAFIRE</MediafireButton>
          <TorrentButton><IconTorrent /> TORRENT</TorrentButton>
        </DownloadsContainer>
      </div>
  );
}

export const DownloadsContainer = styled.div`
  width: 90%;
  height: 50vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${props => props.theme});
  background-size: cover;
  border-radius: 2rem;
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const BaseButton = styled.button`
  padding: 1rem;
  border: 0;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const MegaButton = styled(BaseButton)`
  &:hover {
    opacity: 0.9;
  }
`;
export const MediafireButton = styled(BaseButton)`
  &:hover {
    opacity: 0.9;
  }
`;
export const TorrentButton = styled(BaseButton)`
  &:hover {
    opacity: 0.9;
  }
`;
