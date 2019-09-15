import Link from 'next/link';
import { useRouter } from 'next/router';

const A = ({ href, children }) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <Link href={href}>
      <a className={pathname === href ? 'active' : 'link'}>
        {children}
        <style jsx>{`
          a {
            text-decoration: none;
            color: var(--color-1);
          }
          .active {
            border-bottom: 1px solid var(--color-1);
          }
          .link:hover {
            border-bottom: 1px solid var(--color-3);
          }
        `}</style>
      </a>
    </Link>
  );
};

const Header = ({ children }) => {
  return (
    <header>
      <h1>{children}</h1>
      <ul>
        <li>
          <A href="/">Home</A>
        </li>
      </ul>
      <style jsx>{`
        header {
          display: flex;
          align-items: center;
        }
        h1 {
          flex: 1;
          font-size: 3.5rem;
          color: var(--color-1);
        }
        ul {
          display: grid;
          grid-auto-flow: column;
          grid-gap: 2rem;
          font-size: 2rem;
          list-style: none;
        }
        a {
          text-decoration: none;
          color: var(--color-1);
        }
        a.active {
          border-bottom: 1px solid var(--color-1);
        }
        a:hover {
          border-bottom: 1px solid var(--color-3);
        }
      `}</style>
    </header>
  );
};

export default Header;
