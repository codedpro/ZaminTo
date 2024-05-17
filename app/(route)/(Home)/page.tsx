import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Special from "@/components/Special";

export default function Home() {


  return (
    <div  className="light" style={{ height: "100vh", overflow: "auto" }}>
      <Header />
      <div className="Hero">
        <Hero
          title="ZamineTo"
          subtitle="Zamine to ba ma bekhar"
          buttonText="Start Now"
          buttonLink="/start"
        />
      </div>
      <div className="Special">
        <Special
          title="ZamineTo"
          subtitle="Zamine to ba ma bekhar"
          buttonText="Start Now"
          buttonLink="/start"
        />
      </div>
      <div>
        <p>Search</p>
        <p>houses</p>
        <p>favorites</p>
        <p>about us</p>
        <p>blogs</p>
        <p>footer</p>
      </div>
    </div>
  );
}
