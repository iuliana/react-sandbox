import { useEffect } from 'react';
import { Person } from './PersonScore.tsx';

export function PersonScoreAsync() {
  useEffect( () => {
    async function getThePerson() {
      const person = await getPersonAsync();
      console.log(person);
    }
    getThePerson();
  }, []);
  return null;
}

export function getPersonAsync(): Promise<Person> {
  return new Promise((resolve) => setTimeout(() => resolve({ name: "Jerry" }), 1000));
}