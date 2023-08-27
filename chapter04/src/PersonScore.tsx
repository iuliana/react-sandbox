import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export function PersonScore() {
  const [name, setName] = useState<string | undefined>();
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPerson().then((person) => {
      setLoading(false);
      setName(person.name);
      //console.log("State values", loading, name);
    })

  }, []);
  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <div className={`alert-wrapper error`}>
        <p>
          Person Score with State Hook<FontAwesomeIcon icon={faUser}/>
        </p>
        <h3>
          {name}, {score}
        </h3>
        <button onClick={() => setScore(score + 1)}>Add</button>
        <button onClick={() => setScore(score - 1)}>Subtract</button>
        <button onClick={() => setScore(0)}>Reset</button>
      </div>
    </>
  );
}

export type Person = {
  name: string,
};

export function getPerson(): Promise<Person> {
  return new Promise((resolve) => setTimeout(() => resolve({ name: "Bob" }), 1000));
}