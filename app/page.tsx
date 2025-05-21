import { About, Carousel, GetAQuote, Services } from "@/components/ui/home";
import HomeNews from "./blogs/page";

export default function Home() {
  return (
    <>
      <Carousel />
      <About />
      <Services />
      <GetAQuote />
      <HomeNews />
    </>
  );
}
