// This is the main layout of our app. It renders the header and the footer.

import { Head, Link, StyledLink, Layout, useRequestContext } from "rakkasjs";

// Vite supports CSS modules out of the box!
import css from "./layout.module.css";
import { useState } from "react";

const MainLayout: Layout = ({ children }) => {
  const ctx = useRequestContext();

  const [theme, setTheme] = useState(
    import.meta.env.SSR
      ? ctx!.cookie.theme === "dark"
        ? "dark"
        : "light"
      : // eslint-disable-next-line ssr-friendly/no-dom-globals-in-react-fc
        document.documentElement.getAttribute("data-theme") || "light",
  );

  return (
    <>
      <Head title="Rakkas Demo App" htmlAttributes={{ "data-theme": theme }} />

      <header className={css.header}>
        {/* <Link /> is like <a /> but it provides client-side navigation without full page reload. */}
        <Link className={css.logo} href="/">
          Rakkas Demo App
        </Link>

        <button
          onClick={() => {
            const newTheme = theme === "light" ? "dark" : "light";
            document.cookie = `theme=${newTheme}; path=/; max-age=31536000`;
            setTheme(newTheme);
          }}
        >
          Toggle theme
        </button>

        <nav className={css.nav}>
          <ul>
            <li>
              {/* <StyledLink /> is like <Link /> but it can be styled based on the current route ()which is useful for navigation links). */}
              <StyledLink href="/" activeClass={css.activeLink}>
                Home
              </StyledLink>
            </li>
            <li>
              <StyledLink href="/about" activeClass={css.activeLink}>
                About
              </StyledLink>
            </li>
            <li>
              <StyledLink href="/todo" activeClass={css.activeLink}>
                Todo
              </StyledLink>
            </li>
          </ul>
        </nav>
      </header>

      <section className={css.main}>{children}</section>

      <footer className={css.footer}>
        <p>
          Software and documentation: Copyright 2021 Fatih Aygün. MIT License.
        </p>

        <p>
          Favicon: “Flamenco” by{" "}
          <a href="https://thenounproject.com/term/flamenco/111303/">
            gzz from Noun Project
          </a>{" "}
          (not affiliated).
          <br />
          Used under{" "}
          <a href="https://creativecommons.org/licenses/by/2.0/">
            Creative Commons Attribution Generic license (CCBY)
          </a>
        </p>
      </footer>
    </>
  );
};

export default MainLayout;
