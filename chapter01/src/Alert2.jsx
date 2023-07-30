
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faWarning} from "@fortawesome/free-solid-svg-icons"

export const Alert2 = () => {
    return (

    <div>
        <div>
            <span role="img" aria-label="Warning"> <FontAwesomeIcon icon={faWarning}/> </span>
            <br/>
            <span>[Alert2]Oh no!</span>
        </div>
    </div>
  );
}
