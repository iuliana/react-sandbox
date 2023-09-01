import { Alert } from './Alert';
import { ReactComponent as Logo } from './assets/logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
      </header>
      <Alert heading="Success" closable>
        React with Tailwind CSS!
      </Alert>
    </div>
  );
}

export default App;