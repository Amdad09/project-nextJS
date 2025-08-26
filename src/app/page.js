import Image from "next/image";
import EventsSection from "./components/EventsSection";
import BannerSection from "./components/landing/BannerSection";

export default function Home() {
  return (
    <section>
      <BannerSection/>
      <EventsSection/>
    </section>
  );
}
