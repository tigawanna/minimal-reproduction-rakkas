import { Head, Page, useLocation } from "rakkasjs";

const HomePage: Page = function HomePage() {
  const {current} = useLocation()
  return (
    <main>
      <Head title="Home" description="Rakkas demo homepage "/>
      <h1>Hello world!</h1>
      <p>Welcome to the Rakkas demo page 💃</p>
      
      <h2>Currently in {current.toString()} </h2>

      <p>
        Try editing the files in <code>src/routes</code> to get started or go to
        the{" "}
        <a href="https://rakkasjs.org" target="_blank" rel="noreferrer">
          website
        </a>
        .
      </p>
      <p>
        You may also check the little <a href="/todo">todo application</a> to
        learn about API endpoints and data fetching.
      </p>
    </main>
  );
};

export default HomePage;
