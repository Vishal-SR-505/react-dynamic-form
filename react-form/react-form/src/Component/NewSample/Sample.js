import * as React from "react";
import { useRenderTimes } from "./utils";


function getRandomHEX() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function Header() {
  const [color, setColor] = React.useState("#111");
  const count = useRenderTimes();
  return (
    <header style={{ backgroundColor: color }}>
      <p>Header component has re-rendered {count} times</p>
      <button onClick={() => setColor(getRandomHEX())}>Click</button>
    </header>
  );
}

function Footer() {
  const count = useRenderTimes();
  return (
    <footer>
      <p>Footer component has re-rendered {count} times</p>
    </footer>
  );
}

function SampleApp() {
  const count = useRenderTimes();
  return (
    <>
      <Header />
      <main>
        {/* <p>Hey, nice to see you again 👋🏼</p> */}
        <p>The SampleApp component has re-rendered {count} times</p>
      </main>
      <Footer />
    </>
  );
}

export { SampleApp };