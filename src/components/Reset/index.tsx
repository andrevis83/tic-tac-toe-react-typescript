import type { ResetProps } from '@/types/Reset';
import './reset.style.css';

function Reset({ onClick }: ResetProps) {
  return (
    <div className="reset">
      <button className="reset__button" onClick={onClick}>
        Reset
      </button>
    </div>
  );
}

export default Reset;
