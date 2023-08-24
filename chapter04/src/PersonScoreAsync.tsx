import { useEffect } from 'react';

export function PersonScore() {
  useEffect(() => {
    getPerson().then((person) => console.log(person));
  }, []);
  return null;
}

type Person = {
  name: string,
};

export function getPerson(): Promise<Person> {
  return new Promise((resolve) => setTimeout(() => resolve({ name: "Bob" }), 1000));
}