import './App.css';
import { Alert } from './Alert';

function App() {
  return (
    <div className="App">
      <Alert heading="Success" closable>
        React with Emotion CSS!
      </Alert>
    </div>
  );
}

export default App;