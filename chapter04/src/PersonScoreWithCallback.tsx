import { useEffect, useReducer, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { reducer } from './PersonScoreWithMemo.tsx';

export function PersonScoreWithRef() {
  const [{name,score,loading}, dispatch] = useReducer(
    reducer,
    {
      name: undefined,
      score:0,
      loading: true,
    }
  );

  const addButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    getPersonWithRef().then(({ name }) =>
      dispatch({ type: 'initialize', name })
    );
  }, []);

  useEffect(() => {
    if (!loading) {
      addButtonRef.current?.focus();
    }
  }, [loading]);

  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <div className={`alert-wrapper error`}>
        <p>
          Person Score with Ref Hook<FontAwesomeIcon icon={faFaceSmile}/>
        </p>
        <h3>
          {name}, {score}
        </h3>
        <button ref={addButtonRef} onClick={() => dispatch({ type: 'increment' })}>Add</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>Subtract</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </div>
    </>
  );
}

type Person = {
  name: string,
};

export function getPersonWithRef(): Promise<Person> {
  return new Promise((resolve) => setTimeout(() => resolve({ name: "Ref" }), 1000));
}