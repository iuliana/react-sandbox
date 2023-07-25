
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faWarning} from "@fortawesome/free-solid-svg-icons"

function Alert1() {
    return (
        <div>
            <div>
                <span role="img" aria-label="Warning"> <FontAwesomeIcon icon={faWarning}/> </span>
                <br/>
                <span>[Alert1]Oh no!</span>
            </div>
        </div>
    );
}

export default Alert1;