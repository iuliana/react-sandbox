import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

function SomeComponent(){

  useEffect(() => {
    console.log("some effect");
  });

  return (<>
    <p className="aaa">
      Some effect <FontAwesomeIcon icon={faCog}/>
    </p>
  </>);
}

export default SomeComponent