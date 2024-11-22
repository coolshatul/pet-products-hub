"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="text-2xl font-bold">
            PetProductsHub
          </Link>
        </motion.div>
        <nav>
          <motion.ul
            className="flex space-x-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <li>
              <Link
                href="/"
                className="hover:text-yellow-300 transition-colors"
              >
                Home
              </Link>
            </li>
            {/* <li>
              <Link
                href="/dogs"
                className="hover:text-yellow-300 transition-colors"
              >
                Dogs
              </Link>
            </li>
            <li>
              <Link
                href="/cats"
                className="hover:text-yellow-300 transition-colors"
              >
                Cats
              </Link>
            </li> */}
          </motion.ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
