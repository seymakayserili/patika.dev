import HeroButton from "./HeroButton";
import HeroText from "./HeroText";
import HeroActions from "./HeroActions";
import "./hero.css";

export default function Hero() {
  return (
    <div className="hero-bg" id="home">
      <div className="hero-content">
        <HeroButton />
        <HeroText />
        <HeroActions />
      </div>
    </div>
  );
}
