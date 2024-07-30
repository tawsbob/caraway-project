import * as stylex from '@stylexjs/stylex';
import Image from 'next/image';
import Button from './Button';

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
  productCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '233px',
  },
  title: {
    fontSize: '0.9rem',
    fontWeight: 'normal',
    margin: '0 0 5px',
  },

  price: {
    fontSize: '.85rem',
  },
  compareAt: {
    textDecoration: 'line-through',
    fontSize: '.75rem',
  },
  contentGrid: {
    display: 'flex',
    gap: '1rem',
  },
  textContainer: {
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

  //can be better I know :)
  const stylesProps = stylex.props(styles.productCard)
  const titleStyles = stylex.props(styles.title)
  const priceStyles = stylex.props(styles.price)
  const compareAtStyles = stylex.props(styles.compareAt)
  const contentGridStyles = stylex.props(styles.contentGrid)
  const textContainerStyles = stylex.props(styles.textContainer)

  return (
    <div {...stylesProps}>
      <div>
        <Image src={hero_image.src} alt={hero_image.alt} width={233} height={300} style={{ objectFit: "contain" }} title={hero_image.alt} />
      </div>
      <div {...contentGridStyles}>
        <div {...textContainerStyles}>
          <h3 {...titleStyles}>{title}</h3>
          <span {...priceStyles}>{price}</span>
          {" "}
          <span {...compareAtStyles}>{compare_at_price}</span>
        </div>
        <div>
          <Button type="yellow">
            Add to Cart
          </Button>
        </div>
      </div>
      
    </div>
  )
}

export default ProductCard