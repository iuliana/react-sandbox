import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './assets/react.svg';

export function Header() {
  return (
    <header className="text-center text-slate-50 bg-slate-900 h-40 p-5">
      <Logo/>
      <h1 className="text-2xl">React Tools</h1>
      <nav>
        { /*<!-- the 'to' attribute defines the path to navigate to.*/ }
          <Link
            to="products"
            className="text-white no-underline p-1"
          >
              Products
          </Link>
      </nav>
    </header>
  );
}
