import {useState} from "react";


// using destructuring props
export const Alert4 = ({
                           type = "information",
                           heading,
                           children,
                           closable, // makes the component closable by adding a close button
                           onClose }) => {

    const [visible, setVisible] = useState(true);
    if (!visible) {
        return null;
    }

    // this is an event handler / event listener function
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
    );
};

