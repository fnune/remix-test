import {Outlet} from "remix";

export default function () {
  return <>
    <h1>Fact <code>$factId</code></h1>
    <main>
      Here's a fact: this page is actually a <code>404</code>.
    </main>
  </>
}
