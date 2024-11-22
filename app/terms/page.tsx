"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
        Terms of Service
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-purple-600">
          1. Acceptance of Terms
        </h2>
        <p className="mb-4">
          By accessing and using PetProductsHub, you agree to be bound by these
          Terms of Service and all applicable laws and regulations.
        </p>

        <h2 className="text-xl font-semibold mb-4 text-purple-600">
          2. Use of the Website
        </h2>
        <p className="mb-4">
          You agree to use this website only for lawful purposes. You may not
          use PetProductsHub in a manner that could damage, disable, overburden,
          or impair the functionality of the site or interfere with other users
          access.
        </p>

        <h2 className="text-xl font-semibold mb-4 text-purple-600">
          3. Product Information and Affiliate Links
        </h2>
        <p className="mb-4">
          We strive to provide accurate product descriptions, but we do not
          guarantee that product details, prices, or availability are
          error-free. PetProductsHub is a participant in the Amazon Services LLC
          Associates Program, an affiliate advertising program designed to
          provide a means for sites to earn advertising fees by advertising and
          linking to Amazon.com. When you purchase products through affiliate
          links, we may earn a commission at no extra cost to you.
        </p>

        <h2 className="text-xl font-semibold mb-4 text-purple-600">
          4. Limitation of Liability
        </h2>
        <p className="mb-4">
          We do not assume liability for any damages arising from your use of
          the website, including errors in product listings, external links, or
          site availability. You agree to use the website at your own risk.
        </p>

        <h2 className="text-xl font-semibold mb-4 text-purple-600">
          5. Changes to Terms
        </h2>
        <p className="mb-4">
          We reserve the right to modify these Terms of Service at any time.
          Please review these terms periodically for changes. Your continued use
          of the website after any changes constitutes acceptance of the
          modified terms.
        </p>

        <h2 className="text-xl font-semibold mb-4 text-purple-600">
          6. Governing Law
        </h2>
        <p className="mb-4">
          These Terms of Service are governed by and construed in accordance
          with the laws of India. Any disputes will be resolved in the courts of
          India.
        </p>
      </div>
    </motion.div>
  );
}
