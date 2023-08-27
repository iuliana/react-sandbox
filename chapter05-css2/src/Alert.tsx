import { useState } from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faInfo, faWarning, faCircleXmark} from "@fortawesome/free-solid-svg-icons"

import styles from './Alert.module.css'

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
    <div className={`${styles.container} ${styles[type]}`}>
      <div className={styles.header}>
        <span
          role="img"
              aria-label={type === 'warning' ? 'Warning' : 'Information'}
              className={styles.headerIcon}
        >
          {type === 'warning' ? <FontAwesomeIcon icon={faWarning}/> : <FontAwesomeIcon icon={faInfo}/>}
        </span>
        <span className={styles.headerText}>{heading}</span>
        {closable && (
          <button aria-label="Close" onClick={handleCloseClick} className={styles.closeButton}>
          <span role="img" aria-label="Close">
            <FontAwesomeIcon icon={faCircleXmark} />
          </span>
          </button>
        )}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
