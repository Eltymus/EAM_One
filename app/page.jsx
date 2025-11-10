import { Nav } from "./components/Navbar";
import { Hero } from "./components/hero";
import { Description } from "./components/heroDescription";
import { FixTables, CodePC, Cloud } from "./icons";
import home from "../public/text.json";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl bg-linear-to-b from-amber-300 to-white">
      <Nav />
      <Hero />
      <div className="mx-8 flex flex-row items-center justify-center">
        <Description
          className="w-1/3"
          title={home.home.value_props[0].title}
          description={home.home.value_props[0].text}
          Icon={FixTables}
        />
        <Description
          className="w-1/3"
          title={home.home.value_props[1].title}
          description={home.home.value_props[1].text}
          Icon={CodePC}
        />
        <Description
          className="w-1/3"
          title={home.home.value_props[2].title}
          description={home.home.value_props[2].text}
          Icon={Cloud}
        />
      </div>
    </main>
  );
}
