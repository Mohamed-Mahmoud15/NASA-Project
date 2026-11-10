import Header from "../ui/Header";
import SpaceBackground from "../features/space/SpaceBackground";
import Hero from "../features/hero/Hero";
import { useParallax } from "../hooks/useParallax";

function HomePage() {
  useParallax();

  return (
    <>
      <SpaceBackground />
      <Header />
      <Hero />
    </>
  );
}

export default HomePage;
