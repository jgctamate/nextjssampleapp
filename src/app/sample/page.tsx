import Link from 'next/link';
import styles from '../page.module.css';
import { Suspense } from 'react';
import { AddToCartButton } from '@/components/Cart-Button';
import { fetchProducts } from '../../hooks/useProducts';
import Skeleton from '@mui/material/Skeleton';

type Product = {
  id: number;
  name: string;
  brand: string;
  basePrice: number;
  description: string;
};

export default function SamplePage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Sample Page</h1>
        <p>This is a sample page created using Next.js.</p>
        <Link href="/">Return to Home</Link>

        <h2>Product List</h2>
        <Suspense fallback={<div>
          Loading with suspense...
          <Skeleton variant="rounded" width={210} height={60} />
          </div>}>
          <ProductList />
        </Suspense>
      </main>
    </div>
  );
}

async function ProductList() {
  const products = await fetchProducts();

  return (
    <div className={styles.productGrid}>
      {products.map((product: Product) => (
        <div key={product.id} className={styles.productCard}>
          <h3>{product.name}</h3>
          <p>{product.brand}</p>
          <p>${product.basePrice}</p>
          <p>{product.description}</p>
          <AddToCartButton productName={product.name} />
        </div>
      ))}
    </div>
  );
}