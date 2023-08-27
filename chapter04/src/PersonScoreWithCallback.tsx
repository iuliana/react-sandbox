import { memo, useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { reducer } from './PersonScoreWithMemo.tsx';
import { Person } from './PersonScore.tsx';

export function PersonScoreWithCallback() {
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
    getPersonWithCallback().then(({ name }) =>
      dispatch({ type: 'initialize', name })
    );
  }, []);

  useEffect(() => {
    if (!loading) {
      addButtonRef.current?.focus();
    }
  }, [loading]);

/*  function handleReset() {
    dispatch({ type: 'reset' });
  }*/

  const handleReset = useCallback(
    () => dispatch({ type: 'reset' }),
    []
  );

  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <div className={`alert-wrapper error`}>
        <p>
          Person Score with Callback Hook<FontAwesomeIcon icon={faStar}/>
        </p>
        <h3>
          {name}, {score}
        </h3>
        <button ref={addButtonRef} onClick={() => dispatch({ type: 'increment' })}>Add</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>Subtract</button>
        <Reset onClick={handleReset}/>
        <p>
          <TextVanish text={'starting text'}/>
        </p>
        <p>
          <Counter/><CounterRef/><MemoCounter/><CallbackCounter/>
        </p>
        <ReducerUser/>
      </div>
    </>
  );
}

type Props = {
  onClick: () => void,
};

export  const Reset = memo (({onClick} : Props) => {
  console.log("Render Reset Button");
  return <button onClick={onClick}>Reset</button>
});

Reset.displayName = 'Reset';

export function getPersonWithCallback(): Promise<Person> {
  return new Promise((resolve) => setTimeout(() => resolve({ name: "Callback" }), 1000));
}

type Props2 = {
  text : string,
};

// exercise 1
export function TextVanish({text}:Props2) {
  if (!text) { // bad placement => must be after the hooks, cannot invoke useState and useEffect conditionally
    return null;
  }
  const [textToRender, setTextToRender] = useState(text);
  useEffect(() => {
    setTimeout(() => setTextToRender(""), 5000);
  }, []);

  const [data, setData] = useState<string[]>();
  /*  useEffect(async () => {
    const data = await getData();
    setData(data);
  });*/

  // correct
  /*useEffect( () => {
    async function getAsyncData() {
      const data = await getData();
      setData(data);
    }
    getAsyncData();
  }, []);*/

  useEffect(() => {
    getData().then((theData) => setData(theData));
  }, []);

  function getData() : Promise<string[]> {
    return new Promise(() => setTimeout(() => Array.of('1','2', '3'), 1000));
  }

  console.log(">>> ", data);
  return <span>{textToRender}</span>;
}


export function Counter(){
  const  [count, setCount] = useState(0);
  return (
    <button onClick={() => {
      setCount(count + 1);
      setCount(count + 1);
      setCount(count + 1);
    }}
    >
     Counter: {count}
    </button>
  );
}

export function MemoCounter() {
  const [count, setCount] = useState(0);
  const memoCount = useMemo(() => count, []);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        MemoCounter: {memoCount}
      </button>
    </div>
  );
}


export function CallbackCounter() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {setCount(count+1)}, []);
  return (
    <div>
      <button onClick={handleClick}>
        CallbackCounter: {count}
      </button>
    </div>
  );
}

export function CounterRef() {
  const count = useRef(0);

  return(
    <button onClick={() => {
      count.current = count.current + 1;
      console.log(">> ref count ", count.current);
    }}
    >
      CounterRef: {count.current}
    </button>
  );
}

type State = { steps: number };
type Action =
  | { type: 'forward'; steps: number }
  | { type: 'backwards'; steps: number };

function reducerFct(state: State, action: Action): State {
  switch (action.type) {
    case 'forward':
      return { ...state, steps: state.steps + action.steps };
    case 'backwards':
      return { ...state, steps: state.steps - action.steps };
    default:
      return state;
  }
}

export function ReducerUser () {
  reducerFct({steps: 3}, {type: 'forward', steps:3});
  return null;
}