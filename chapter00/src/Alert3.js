// this is a function component written using arrow syntax version
export const Alert3 = (props) => {
    return (
        <div>
            <div>
                <span
                    role="img"
                    aria-label={
                        props.type === "warning"
                            ? "Warning"
                            : "Information"
                    }
                >
                {props.type === "warning" ? "⚠" : "ℹ"}
                </span>
                <span>{props.heading}</span>
            </div>
            <div>{props.children}</div>
        </div>
    );
}