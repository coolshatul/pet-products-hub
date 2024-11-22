"use client";

import { ProductGrid } from "@/components/product-grid";
import { motion } from "framer-motion";

// This would typically come from an API or database
const products = [
  {
    id: "1",
    name: "Pets Empire Stainless Steel Dog Bowl",
    description:
      "Made of high quality stainless steel, steady material and durable performance will make this dog bowl become your pet's favorite dish. It offers a healthier alternative to plastic, helps make mealtimes less messy.",
    imageUrl: "https://m.media-amazon.com/images/I/61-H2CVt8XL._SL1500_.jpg",
    price: "₹166.00",
    affiliateLink: "https://amzn.to/4fCCCDb",
  },
  {
    id: "2",
    name: "Pet Grooming Shedding Brush for Dogs and Cats",
    description:
      "Shedding Grooming Brush to Remove Loose Hair, Mats, Tangles, With massage particles, cat brush can better promote the blood circulation, leaving your pets coat soft and shiny. Give your pet a fun and enjoyable grooming experience",
    imageUrl: "https://m.media-amazon.com/images/I/71oKiJLX1zL._SL1500_.jpg",
    price: "₹189",
    affiliateLink: "https://amzn.to/3Z2XtIL",
  },
  {
    id: "3",
    name: "Pecute Pet Grooming Gloves",
    description:
      "Pecute Pet Grooming Gloves, Heat Resistant Dog Bathing Shampoo Gloves with High Density Teeth, Silicone Hair Removal Gloves with Enhanced Five Finger Design, Bathing and Massaging for Dogs and Cats",
    imageUrl: "https://m.media-amazon.com/images/I/71Imb7RaG2L._SL1500_.jpg",
    price: "₹189",
    affiliateLink: "https://amzn.to/3OmaBnC",
  },
  {
    id: "4",
    name: "Amorite Waterproof Reusable Washable Pee Pads for Dogs",
    description:
      "Amorite Waterproof Pet Dry Sheet protects carpets, furniture, bedding, couches, and car seats from dirt, water, odors, scratches, hair, and urine. Machine washable and dryer-friendly, it's a durable, chemical-free alternative to other pet blankets. Ideal for pets, babies, and adults. Easy to use!",
    imageUrl: "https://m.media-amazon.com/images/I/71FIXeVbd3L._SL1500_.jpg",
    price: "₹299",
    affiliateLink: "https://amzn.to/4161IG6",
  },
  // Add more products as needed
];

export default function Home() {
  return (
    <div>
      <motion.div
        className="text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Pawsome Pet Products!
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <ProductGrid products={products} />
      </motion.div>
    </div>
  );
}
