import React from 'react'
import * as stylex from '@stylexjs/stylex';
import ProductCard, { ProductCardProps } from './ProductCard';
import Markup from './Markup';

type ProductsGridProps = {
    products: ProductCardProps[]
};

const styles = stylex.create({
  productsGridStyles: {
    display: 'flex',
    gap: '1.2rem',
    padding: '2.5rem 0',
    justifyContent: 'center',
  },
})

const ProductsGrid = ({ 
  products = []  
}:ProductsGridProps) => {
  const { productsGridStyles } = styles;
  return (
    <Markup as="section" styles={[productsGridStyles]}>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </Markup>
  )
}

export default ProductsGrid