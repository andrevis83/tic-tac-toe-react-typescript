import { PropsWithChildren } from 'react';
import './players.style.css';

function Players({ children }: PropsWithChildren) {
  return <div className="players">{children}</div>;
}

export default Players;
