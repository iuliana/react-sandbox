import {useState} from "react";
// this is a function component
export const Alert2 = ({
                           type = "information",
                           heading,
                           children,
                       closable,
                           onClose }) => {

    const [visible, setVisible] = useState(true);
    if (!visible) {
        return null;
    }

    // handleCloseClick() {}
    const handleCloseClick = () => {
        setVisible(false);
        if (onClose) {
            onClose();
        }
    }
  return (
    <div> 
      <div>
        <span role="img" aria-label={
            type === "warn" ? "Warning": "Information"
        }>
            {type === "warn" ? "⚠" : "ℹ️" }
        </span>
        <span>{heading}</span>
      </div>
        {closable && (
        <button aria-label="Close" onClick={handleCloseClick}>
            <span role="img" aria-label="Close">❌</span>
        </button>
        )}
      <div>{children}</div>
    </div>
); };