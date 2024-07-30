import TextBanner from "@/components/TextBanner";
import Container from "@/components/Container"
import Marquee from "@/components/Marquee";
import ProductsGrid from "@/components/ProductsGrid";
import { getProductsByType } from "@/utils/products";
import data from "./data.json";
import { Root } from "./data";

export default function Home() {
  const { products } = data as Root;

  const cookwareAndBakeware = getProductsByType(products, ['cookware','bakeware']);
  const prepwareAccessories = getProductsByType(products, ['prepware']);

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
        <ProductsGrid products={cookwareAndBakeware} />
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
        <ProductsGrid products={prepwareAccessories} />
      </Container>
    </main>
  );
}
