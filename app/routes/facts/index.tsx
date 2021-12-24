import { Outlet } from "remix";

export default function () {
  return (
    <>
      <h1>Facts</h1>
      <main>
        <Outlet />
      </main>
    </>
  );
}
