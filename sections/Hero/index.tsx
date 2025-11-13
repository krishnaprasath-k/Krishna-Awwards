import HeroClient from "./Client";
import HeroServer from "./Server";

export default function HeroWrapper() {
  return (
    <div className="relative bg-[#000000]">
      <HeroClient />
      <HeroServer />
    </div>
  );
}
