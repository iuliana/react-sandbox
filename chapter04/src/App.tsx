
import './App.css'
import SearchComponent from './SearchComponent';
import SomeComponent from './SomeComponent.tsx';
import { PersonScore } from './PersonScore.tsx';
import { PersonScoreAsync } from './PersonScoreAsync.tsx';
import { PersonScoreWithReducer } from './PersonScoreWithReducer.tsx';
import { PersonScoreWithRef } from './PersonScoreWithRef.tsx';
import { PersonScoreWithMemo } from './PersonScoreWithMemo.tsx';
import { ComposedComponent } from './ComposedComponent.tsx';
import { PersonScoreWithCallback } from './PersonScoreWithCallback.tsx';

function App() {

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td><SomeComponent/></td>
            <td><SearchComponent search="BBB"/></td>
          </tr>
        <tr>
          <td><PersonScore /></td>
          <td><PersonScoreWithReducer /></td>
        </tr>
          <tr>
            <td><PersonScoreWithRef /></td>
            <td><PersonScoreWithMemo /></td>
          </tr>
        <tr>
          <td><ComposedComponent /></td>
          <td><PersonScoreWithCallback /></td>
        </tr>
        </tbody>
      </table>
      <PersonScoreAsync />
    </>
  )
}

export default App
