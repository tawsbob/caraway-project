import React from 'react'
import * as stylex from '@stylexjs/stylex';
import ProductCard, { ProductCardProps } from './ProductCard';

type ProductsGridProps = {
    products: ProductCardProps[]
};

const styles = stylex.create({
  productsGrid: {
    display: 'flex',
    gap: '1.2rem',
    padding: '2.5rem 0',
    justifyContent: 'center',
  },
})

const ProductsGrid = ({ 
  products = []  
}:ProductsGridProps) => {
  const stylesProps = stylex.props(styles.productsGrid)
  return (
    <section {...stylesProps}>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </section>
  )
}

export default ProductsGrid