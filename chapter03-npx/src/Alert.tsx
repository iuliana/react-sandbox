import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faInfo, faWarning } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

interface Props {
  type?: string;
  heading: string;
  children: React.ReactNode;
  closable?: boolean;
  onClose?: () => void;
}

export function Alert({ type = 'information', heading, children, closable, onClose }: Props) {
  const [visible, setVisible] = useState(true);
  //const [firstName, setFirstName] = useState("");
  //const [email, setEmail] = useState(null);
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
    <div>
      <div>
        <span role="img" aria-label={type === 'warning' ? 'Warning' : 'Information'}>
          {type === 'warn' ? (
            <FontAwesomeIcon icon={faWarning} />
          ) : (
            <FontAwesomeIcon icon={faInfo} />
          )}
        </span>
        <span>{heading}</span>
      </div>
      {closable && (
        <button aria-label="Close" onClick={handleCloseClick}>
          <span role="img" aria-label="Close">
            <FontAwesomeIcon icon={faClose} />
          </span>
        </button>
      )}
      <div>{children}</div>
    </div>
  );
}
