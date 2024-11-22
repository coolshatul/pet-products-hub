"use client";

import { motion } from "framer-motion";
import { ProductCard } from "./product-card";

interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: string;
  affiliateLink: string;
}

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      initial="hidden"
      animate="show"
    >
      {products.map((product) => (
        <motion.div
          key={product.id}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
        >
          <ProductCard {...product} />
        </motion.div>
      ))}
    </motion.div>
  );
}
