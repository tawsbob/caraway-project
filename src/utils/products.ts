import { ProductCardProps } from "@/components/ProductCard";
import { getRandonIndexOfArray } from ".";
import { Product } from "@/app/data";

export function formatPrice(price: string = ""): string {
    return `$${price}`;
}

//we need to talk about :P
export function productDataToCardProps(productData: Product): ProductCardProps {

       const { variants, images } = productData

       //here you can choose your own criteria to select a variant
       const randomVariant = getRandonIndexOfArray(variants)
       
        const variant = variants[randomVariant]

        const { id, price } = variant;

        const src = variant.featured_image?.src || images[0].src

        //i think is better to use the variant title like this 
        //const title = `${productData.title} ${variant.title}`

        const title = productData.title

        const compare_at_price = variant.compare_at_price ? formatPrice(variant.compare_at_price) : "";

        const hero_image = {
            src,
            alt: title,
        }

        return {
            id: id.toString(),
            title,
            price: formatPrice(price),
            compare_at_price,
            hero_image,
        } 
}

export function getProductsByType(productData: Product[] = [], types: string[] = []): ProductCardProps[] {
    const result = productData.filter(({ product_type }) => {
        const hasProductType = product_type 
        && types.some((type)=> product_type.toLowerCase().includes(type));
    
        return hasProductType
    }).map(productDataToCardProps)

    return result

}