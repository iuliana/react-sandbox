import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

function SomeComponent(){

  useEffect(() => {
    console.log("some effect");
  });

  return (<>
    <div className={`alert-wrapper error`}>
    <p>
      Some component <FontAwesomeIcon icon={faCog}/>
    </p>
    </div>
  </>);
}

export default SomeComponent