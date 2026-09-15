import { Fragment } from "react";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {

  return (
    <Fragment>    {/* Si puo usare 'Fregment' inceve del 'div' */}
      <Header />
      <main>
        <CoreConcepts />

        <Examples />
      </main>
    </Fragment>
  );
}

export default App;