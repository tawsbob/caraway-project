import TextBanner from "@/components/TextBanner";
import Container from "@/components/Container"
import Marquee from "@/components/Marquee";
import ProductCard from "@/components/ProductCard";

import data from "./data.json";


export default function Home() {
  const { products } = data;

  return (
    <main>
      <Container as="section">
        <TextBanner
            header="Clean Cooking Has Arrived"
            subheader="Explore Our Best Sellers"
            body="Made with naturally smooth ceramic, not synthetics like polytetrafluoroethylene (such as Teflon®)"
            theme="navy"
        />
        {/* insert cookware and bakeware here */}
        <Marquee
          items={[
            {
              text: 'We believe non-toxic cooking surfaces and thoughtful design lead to cleaner cooking.',
               id: '1'
            }, {
              text: 'Good Looking. Clean Cooking.',
              id: '2'
            }]}
          theme="babyBlue300"
        />
        <TextBanner
            header="Quality Accessories"
            body="Be ready for any recipe with Caraway’s extended Cookware family."
        />
        {/* insert prepware accessories here */}
      </Container>
    </main>
  );
}
