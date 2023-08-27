import { useEffect, useReducer, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { Person } from './PersonScore.tsx';

export type State = {
  name: string | undefined;
  score: number;
  loading: boolean;
};

export type Action =
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

function sillyExpensiveFunction() {
  console.log("Executing silly function");
  let sum = 0;
  for (let i = 0; i < 10000; i++) {
    sum += i;
  }
  return sum;
}

export function reducer(state: State, action: Action): State {
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
export function PersonScoreWithMemo() {
  const [{name,score,loading}, dispatch] = useReducer(
    reducer,
    {
      name: undefined,
      score:0,
      loading: true,
    }
  );

  //const expensiveCalculation = sillyExpensiveFunction();
  const expensiveCalculation = useMemo(
    () => sillyExpensiveFunction(),
    []
  );

  useEffect(() => {
    getPersonWithMemo().then(({ name }) =>
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
          Person Score with Memo<FontAwesomeIcon icon={faGift}/>
        </p>
        <h3>
          {name}, {score}
        </h3>
        <p>{expensiveCalculation}</p>
        <button onClick={() => dispatch({ type: 'increment' })}>Add</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>Subtract</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </div>
    </>
  );
}


export function getPersonWithMemo(): Promise<Person> {
  return new Promise((resolve) => setTimeout(() => resolve({ name: "Memo" }), 1000));
}