import type { PlayerProps } from '@/types/Player';
import './player.style.css';

function Player({ isActive, name, cellIcon }: PlayerProps) {
  return (
    <div className="player">
      <div className="player__info">
        <div className="player__name">{name}</div>
        <div className="player__symbol">{cellIcon}</div>
      </div>
      <div
        className={`player__status${isActive ? ' player__status--active' : ''}`}
      ></div>
    </div>
  );
}

export default Player;
