import * as stylex from '@stylexjs/stylex';
import Image from 'next/image';
import Button from './Button';
import Markup from './Markup';

export type ProductCardProps = {
  id: string
  compare_at_price: string
  hero_image: {
    src: string
    alt: string
  }
  title: string
  price: string
};

const styles = stylex.create({
  productCardStyles: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '233px',
  },
  productTitleStyles: {
    fontSize: '0.9rem',
    fontWeight: 'normal',
    margin: '0 0 5px',
  },

  priceStyle: {
    fontSize: '.85rem',
  },
  compareAtStyle: {
    textDecoration: 'line-through',
    fontSize: '.75rem',
  },
  contentGridStyles: {
    display: 'flex',
    gap: '1rem',
  },
  textContainerStyles: {
    flex: '1',
  }
})

const ProductCard = ({ 
  hero_image = {
    src: "", 
    alt: "",
  }, 
  title = "", 
  price = "",
  compare_at_price = "",
}:ProductCardProps) => {

  const { productCardStyles, productTitleStyles, contentGridStyles, textContainerStyles, priceStyle, compareAtStyle } = styles;
  
  return (
    <Markup styles={[productCardStyles]}>
      <Markup>
        <Image 
          src={hero_image.src} 
          alt={hero_image.alt} 
          width={233} 
          height={300} 
          style={{ objectFit: "contain" }} title={hero_image.alt} />
      </Markup>
      <Markup styles={[contentGridStyles]}>
        <Markup styles={[textContainerStyles]}>
          <Markup as="h3" styles={[productTitleStyles]}>{title}</Markup>
          <Markup as="span" styles={[priceStyle]}>{price}</Markup>
          {" "}
          <Markup as="span" styles={[compareAtStyle]}>{compare_at_price}</Markup>
        </Markup>
        <Markup>
          <Button type="yellow">
            Add to Cart
          </Button>
        </Markup>
      </Markup>
      
    </Markup>
  )
}

export default ProductCard