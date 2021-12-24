export default function () {
  return (
    <>
      <h1>Add a new fact</h1>
      <form>
        <label>
          Title
        <input
          name="title"
          placeholder={
            "The Answer to the Ultimate Question of Life, the Universe, and Everything is 42"
          }
        />
        </label>
        <label>
          Description
        <textarea
          name={"description"}
          placeholder={
            "You want the question that goes with the\n" +
            'answer "42" How about "What\'s six times\n' +
            'seven?" Or "How many Vogons does it take\n' +
            "to screw in a lightbulb?\" Or here's one,\n" +
            '"How many roads must a man walk down?"'
          }
        />
        </label>
        <button type={"submit"}>Add</button>
      </form>
    </>
  );
}
