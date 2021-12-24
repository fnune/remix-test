import { Outlet, useLoaderData } from "remix";

interface Fact {
  title: string;
  description: string;
}

export const loader = async () => {
  return [
    {
      title: "Saturn's rings are very thin",
      description:
        "Saturn's main/most visible rings extend up to ~200,000 km (~120,000 miles) away from its center but they are only about 10 (!!) meters thick (32 ft).",
    },
    {
      title: "Calculate your birthday star",
      description:
        "With this website you can find a star that's your age in light-years, so you can look at light that was emitted when you were born http://freeant.net/birthdaystar",
    },
    {
      title: "Chronostasis while blinking",
      description:
        "If you've ever wondered why the moment you look at a clock the passing second feels a bit longer than the following seconds, this effect (chronostasis) has reason to be, and a name: saccadic masking. It's really interesting to read about it. Your brain/eyes lie to you about the moment your eyes were moving (and even a bit before that) so that you don't perceive significant smearing, by making you feel like you were seeing the final image all along.",
    },
    {
      title: "The word angst comes from philosophy",
      description:
        "The word angst was introduced into English from the Danish, Norwegian, and Dutch word angst and the German word Angst. It is attested since the 19th century in English translations of the works of Kierkegaard and Freud.",
    },
  ];
};

export default function () {
  const facts = useLoaderData<Fact[]>();
  return (
    <>
      <h1>Facts</h1>
      <main>
        <Outlet />
        {facts.map((fact) => (
          <div key={/* I know */ fact.title /* this is bad */}>
            <h3>{fact.title}</h3>
            <p>{fact.description}</p>
          </div>
        ))}
      </main>
    </>
  );
}
