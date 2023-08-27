import { useEffect, useReducer } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHippo } from '@fortawesome/free-solid-svg-icons';
import { reducer } from './PersonScoreWithMemo.tsx';
import { Person } from './PersonScore.tsx';


export function PersonScoreWithReducer() {
  const [{name,score,loading}, dispatch] = useReducer(
    reducer,
    {
      name: undefined,
      score:0,
      loading: true,
    }
  );

  useEffect(() => {
    getPersonWithReducer().then(({ name }) =>
      dispatch({ type: 'initialize', name })
    );
  }, []);


  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <div className={`alert-wrapper success`}>
        <p>
          Person Score with Reducer Hook<FontAwesomeIcon icon={faHippo}/>
        </p>
        <h3>
          {name}, {score}
        </h3>
        <button onClick={() => dispatch({ type: 'increment' })}>Add</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>Subtract</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </div>
    </>
  );
}

export function getPersonWithReducer(): Promise<Person> {
  return new Promise((resolve) => setTimeout(() => resolve({ name: "Reducer" }), 1000));
}