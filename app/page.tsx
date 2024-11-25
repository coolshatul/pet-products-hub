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
    price: "166.00",
    affiliateLink: "https://amzn.to/4fCCCDb",
  },
  {
    id: "2",
    name: "Pet Grooming Shedding Brush for Dogs and Cats",
    description:
      "Shedding Grooming Brush to Remove Loose Hair, Mats, Tangles, With massage particles, cat brush can better promote the blood circulation, leaving your pets coat soft and shiny. Give your pet a fun and enjoyable grooming experience",
    imageUrl: "https://m.media-amazon.com/images/I/71oKiJLX1zL._SL1500_.jpg",
    price: "189",
    affiliateLink: "https://amzn.to/3Z2XtIL",
  },
  {
    id: "3",
    name: "PUPPEE Wipe ME 100% Biodegradable",
    description:
      "PUPPEE Wipe Me for dogs is 100% biodegradable and infused with lavender, Vitamin E, and olive oil to clean and soothe your pets skin. These gentle wipes are perfect for everyday use, removing dirt while moisturizing dry paws and skin. 48 wipes per pack.",
    imageUrl: "https://m.media-amazon.com/images/I/715GKbUZzEL._SL1500_.jpg",
    price: "189",
    affiliateLink: "https://amzn.to/3Zkernv",
  },
  {
    id: "4",
    name: "Amorite Waterproof Reusable Washable Pee Pads for Dogs",
    description:
      "Amorite Waterproof Pet Dry Sheet protects carpets, furniture, bedding, couches, and car seats from dirt, water, odors, scratches, hair, and urine. Machine washable and dryer-friendly, it's a durable, chemical-free alternative to other pet blankets. Ideal for pets, babies, and adults. Easy to use!",
    imageUrl: "https://m.media-amazon.com/images/I/71FIXeVbd3L._SL1500_.jpg",
    price: "299",
    affiliateLink: "https://amzn.to/4161IG6",
  },
  {
    id: "5",
    name: "Latex Rubber Squeaky Dog Chew Ball Toy",
    description:
      "Made from safe, non-toxic natural latex, these squeaky dog toys are perfect for small to medium dogs. They relieve anxiety, provide fun, and are easy to clean. Great for chewing, fetch, and interactive play. Ideal for puppies!",
    imageUrl: "https://m.media-amazon.com/images/I/71CygujA5WL._SL1500_.jpg",
    price: "180",
    affiliateLink: "https://amzn.to/490N3xU",
  },
  {
    id: "6",
    name: "Pecute Pet Grooming Gloves",
    description:
      "These 2-in-1 silicone cat bathing gloves feature 3,000 soft brush heads for deep cleaning. Heat-resistant and non-toxic, they offer a comfortable fit with anti-slip bumps. Suitable for pets and multipurpose cleaning needs.",
    imageUrl: "https://m.media-amazon.com/images/I/71Imb7RaG2L._SL1500_.jpg",
    price: "189",
    affiliateLink: "https://amzn.to/4eFp3BL",
  },
  {
    id: "7",
    name: "Folding Dog Poop Scooper",
    description:
      "Make cleaning up after your dog easy with The Pets Company Folding Dog Poop Scooper. With a one-handed design, it's perfect for indoor and outdoor use. No bending over needed, easy to clean, and suitable for all dog sizes",
    imageUrl: "https://m.media-amazon.com/images/I/61tKkrFcfZL._SL1000_.jpg",
    price: "395",
    affiliateLink: "https://amzn.to/3V2zVTg",
  },
  {
    id: "8",
    name: "Puppies Pet Dental Oral Care Kit Combo",
    description:
      "Foodie Puppies Pet Dental Oral Care Kit helps reduce plaque and tartar buildup. The kit includes enzymatic toothpaste (100g) with clove & cinnamon oil and 3 toothbrushes. Ensures fresh breath, soothes gums, and is safe for dogs and puppies.",
    imageUrl: "https://m.media-amazon.com/images/I/81qJmmCUb6L._SL1500_.jpg",
    price: "340",
    affiliateLink: "https://amzn.to/3Osemrr",
  },
  {
    id: "9",
    name: "Dog Toy Pack (Pack of 5)",
    description:
      "Agirav Dog Toy Pack (5 pieces) includes rope toys like a carrot, corn stick, and knot dumbbell. Perfect for small to medium dogs, these non-toxic, durable toys help with teething, exercise, and play, keeping your dog healthy and entertained.",
    imageUrl: "https://m.media-amazon.com/images/I/61GGf4ePmML._SL1500_.jpg",
    price: "199",
    affiliateLink: "https://amzn.to/3Z1c33B",
  },
  {
    id: "10",
    name: "Dog Bath Brush for Grooming & Bathing",
    description:
      "URBANPET Dog Bath Brush is perfect for grooming and bathing your Labrador, German Shepherd, or Golden Retriever. Made of soft silicone rubber, it removes dirt, loose fur, and tangles, ensuring a clean and healthy coat with a comfortable, easy-to-use design.",
    imageUrl: "https://m.media-amazon.com/images/I/71yEXr+OP3L._SL1080_.jpg",
    price: "169",
    affiliateLink: "https://amzn.to/495Ax0s",
  },
  {
    id: "11",
    name: "Personalize Black Engraved Name Collar Tag",
    description:
      "PAWPRO Handmade Pet ID Tag is customizable with your pet's name, contact info, and breed face engraving. Made of durable stainless steel, it's lightweight, stylish, and comes with 2 split rings for easy attachment. Ideal for dogs, cats, puppies, and horses.",
    imageUrl: "https://m.media-amazon.com/images/I/61scwZteBuL._SL1080_.jpg",
    price: "229",
    affiliateLink: "https://amzn.to/3V3CG74",
  },
  {
    id: "12",
    name: "Tie-Out Cable/Leash for Dogs",
    description:
      "AmazonBasics 25-ft Tie-Out Cable for dogs up to 41 kg. Made of durable steel and PVC for strength and rust resistance. Features metal clips for easy connections. Lightweight at 0.4 kg. Perfect for medium to large dogs. Do not leave pet unattended.",
    imageUrl: "https://m.media-amazon.com/images/I/91gnSL6y7xL._SL1500_.jpg",
    price: "349",
    affiliateLink: "https://amzn.to/40WcQp1",
  },
  // Add more products as needed
  {
    id: "13",
    name: "Natural Rubber Spiked Ball Dog Chew Toy",
    description:
      "The Dogs Company Natural Rubber Spiked Ball Dog Chew Toy (3 inches) is safe, durable, and perfect for small to medium dogs. It helps clean teeth, reduce anxiety, and satisfy chewing instincts while providing hours of fun and entertainment.",
    imageUrl: "https://m.media-amazon.com/images/I/61th7vu+SCL._SL1000_.jpg",
    price: "175",
    affiliateLink: "https://amzn.to/4fFFnUl",
  },
  {
    id: "14",
    name: "Neck Collar Belt and Rope Set",
    description:
      "ASenapati Dog Combo Pack includes a waterproof harness, neck collar belt, and 1.5M-2M rope. Designed for medium-sized dogs, this durable set provides comfort and control, perfect for walks and training.",
    imageUrl: "https://m.media-amazon.com/images/I/51kF-64qcQL._SL1500_.jpg",
    price: "220",
    affiliateLink: "https://amzn.to/413BeoJ",
  },
  {
    id: "15",
    name: "Dog Bowl Stand for Large Dogs",
    description:
      "Pets Empire Pet Feeder includes two 1600 ml stainless steel bowls with an iron stand, perfect for large dogs. This durable, X-large bowl set is designed for food and water, ensuring comfort and easy access for your pet.",
    imageUrl: "https://m.media-amazon.com/images/I/61xcD66q8xL._SL1500_.jpg",
    price: "808",
    affiliateLink: "https://amzn.to/4142p2S",
  },
  {
    id: "16",
    name: "Two Door Top Load Pet Kennel",
    description:
      "AmazonBasics Two-Door Top-Load Pet Kennel (23-inch) offers easy access with a top door that opens both ways. Made of durable plastic with a steel-wire front door, it’s perfect for secure transport. Includes screws for added reinforcement. 1-year warranty.",
    imageUrl: "https://m.media-amazon.com/images/I/718gkm0xDFL._SL1500_.jpg",
    price: "1549",
    affiliateLink: "https://amzn.to/3V40tna",
  },
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
