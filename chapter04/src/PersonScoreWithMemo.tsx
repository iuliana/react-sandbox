import { useEffect, useReducer, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';

type State = {
  name: string | undefined;
  score: number;
  loading: boolean;
};

type Action =
  | {
  type: 'initialize';
  name: string;
}
  | {
  type: 'increment';
}
  | {
  type: 'decrement';
}
  | {
  type: 'reset';
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'initialize':
      return { name: action.name, score: 0, loading: false };
    case 'increment':
      return { ...state, score: state.score + 1 };
    case 'decrement':
      return { ...state, score: state.score - 1 };
    case 'reset':
      return { ...state, score: 0 };
    default:
      return state;
  }
}
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
      <div className={`alert-wrapper success`}>
        <p>
          Person Score with Reducer Hook<FontAwesomeIcon icon={faFaceSmile}/>
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
  return new Promise((resolve) => setTimeout(() => resolve({ name: "Reducer" }), 1000));
}