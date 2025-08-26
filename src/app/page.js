import Image from "next/image";
import EventsSection from "./components/EventsSection";
import BannerSection from "./components/landing/BannerSection";
import AboutUsPage from "./about/page";

export default function Home() {
  return (
    <section>
      <BannerSection/>
      <EventsSection />
      <AboutUsPage/>
    </section>
  );
}
