import { Alert } from './Alert';
import { ReactComponent as Logo } from './assets/logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
      </header>
      <Alert heading="Success" closable>
        Everything is really good!
      </Alert>
    </div>
  );
}

export default App;