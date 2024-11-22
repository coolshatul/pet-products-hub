import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  name: string;
  description: string;
  imageUrl: string;
  price: string;
  affiliateLink: string;
}

export function ProductCard({
  name,
  description,
  imageUrl,
  price,
  affiliateLink,
}: ProductCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative">
        <Image
          src={imageUrl}
          alt={name}
          width={300}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-0 right-0 bg-yellow-400 text-gray-800 font-bold py-1 px-2 rounded-bl-lg">
          ₹ {price}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-purple-600">{name}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <Button
          asChild
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
        >
          <a
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            Buy Now
          </a>
        </Button>
      </div>
    </motion.div>
  );
}
