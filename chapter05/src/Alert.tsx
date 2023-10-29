import { useState } from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faInfo, faWarning, faXmark} from "@fortawesome/free-solid-svg-icons"

type Props = {
  type?: string;
  heading: string;
  children: React.ReactNode;
  closable?: boolean;
  onClose?: () => void;
};

export function Alert({ type = 'information', heading, children, closable, onClose }: Props) {
  const [visible, setVisible] = useState(true);
  if (!visible) {
    return null;
  }
  function handleCloseClick() {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  }
  return (
    <div className={`container ${type}`}>
      <div className="header">
        <span
          role="img"
              aria-label={type === 'warning' ? 'Warning' : 'Information'}
              className="header-icon"
        >
          {type === 'warning' ? <FontAwesomeIcon icon={faWarning}/> : <FontAwesomeIcon icon={faInfo}/>}
        </span>
        <span className="header-text">{heading}</span>
        {closable && (
          <button aria-label="Close" onClick={handleCloseClick} className="close-button">
          <span role="img" aria-label="Close">
            <FontAwesomeIcon icon={faXmark} />
          </span>
          </button>
        )}
      </div>
      <div className="content">{children}</div>
    </div>
  );
}
