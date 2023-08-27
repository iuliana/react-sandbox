import { memo, useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

export function ComposedComponent (){
  const [someState, setSomeState] = useState('something');

  // this component re-renders when the button is clicked
  // because it is made of two components ChildComponent & AnotherChildComponent get re-rendered as well
  // we use the memo function to prevent re-rendering ChildComponent, that does not change, is not dependent on state
  return (
    <>
      <div className={`alert-wrapper info`}>
        <p>
          Composed Component <FontAwesomeIcon icon={faMusic}/>
        </p>
        <ChildComponent/>
        <AnotherChildComponent something={someState} />
        <button onClick={() => setSomeState(uuidv4().substring(0,8))}>Change State</button>
      </div>
    </>
  );
}

//export function ChildComponent() {
export const ChildComponent = memo( () =>  {
  return (
    <>
      <div className={`alert-wrapper error`}>
        <p>ChildComponent</p>
      </div>
    </>
  );
});

export function AnotherChildComponent({ something = 'default'}) {
  return (
    <>
      <div className={`alert-wrapper success`}>
        <p>AnotherChildComponent: {something}</p>
      </div>
    </>
  );
}