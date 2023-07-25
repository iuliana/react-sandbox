
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faInfo, faWarning} from "@fortawesome/free-solid-svg-icons"

export const Alert3 = (props) => {
    return (

        <div>
            <div>
                <span role="img"
                      aria-label={
                          props.type === "warning"
                              ? "Warning"
                              : "Information"
                      }
                >
                    {props.type === "warning" ? <FontAwesomeIcon icon={faWarning}/> : <FontAwesomeIcon icon={faInfo}/>}
                </span>
                <br/>
                <span>{props.heading}</span>
            </div>
        </div>
    );
}