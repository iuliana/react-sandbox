import { Link, NavLink, useSearchParams, Form } from 'react-router-dom';
import { ReactComponent as Logo } from './assets/react.svg';

export function Header() {
  const [searchParams] = useSearchParams();

  return (
    <header className="text-center text-slate-50 bg-slate-900 h-40 p-5">
      <Form
        className="relative text-right"
        action="/products"
        >
        <input
          type="search"
          name="search"
          placeholder="Search"
          defaultValue={ searchParams.get('search') ?? '' }
          className="absolute right-0 top-0 rounded py-2 px-3 text-gray-700"
        />
      </Form>
     {/* <form
        className="relative text-right"
        onSubmit={handleSearchSubmit}
      >
        <input
          type="search"
          name="search"
          placeholder="Search"
          defaultValue={ searchParams.get('search') ?? '' }
          className="absolute right-0 top-0 rounded py-2 px-3 text-gray-700"
        />
      </form>*/}
      <Link to="">
        <Logo/>
      </Link>
      <Link to="">
        <h1 className="text-2xl">React Tools</h1>
      </Link>
      <nav>
        { /*<!-- the 'to' attribute defines the path to navigate to.*/ }
          <NavLink
            to="products"
            className={({ isActive }) =>
            `text-white no-underline p-1 pb-0.5 border-solid border-b-2 ${
                isActive ? "border-white" : "border-transparent"
              }`
            }
          >
              Products
          </NavLink>
      </nav>
    </header>
  );
}
