"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
        Privacy Policy
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-purple-600">
          1. Information We Collect
        </h2>
        <p className="mb-4">
          We collect personal information when you interact with our website,
          such as when you make a purchase through affiliate links or subscribe
          to our newsletter. This may include your name, email address, and
          payment details.
        </p>

        <h2 className="text-xl font-semibold mb-4 text-purple-600">
          2. Cookies and Tracking Technologies
        </h2>
        <p className="mb-4">
          We use cookies and other tracking technologies to improve your
          browsing experience, analyze site traffic, and serve personalized
          content. You can disable cookies through your browser settings.
        </p>

        <h2 className="text-xl font-semibold mb-4 text-purple-600">
          3. How We Use Your Information
        </h2>
        <p className="mb-4">
          The information we collect is used to improve our services, provide
          relevant product recommendations, and analyze site traffic. We do not
          sell or share your personal data with third parties for their
          commercial purposes.
        </p>

        <h2 className="text-xl font-semibold mb-4 text-purple-600">
          4. Affiliate Links
        </h2>
        <p className="mb-4">
          Some of the links on this website are affiliate links, meaning we may
          earn a commission if you click through and make a purchase. These
          links do not collect any personal information from you.
        </p>

        <h2 className="text-xl font-semibold mb-4 text-purple-600">
          5. Data Security
        </h2>
        <p className="mb-4">
          We use reasonable security measures to protect your personal
          information from loss, theft, misuse, and unauthorized access,
          disclosure, alteration, or destruction. However, no method of
          transmission over the Internet is 100% secure.
        </p>

        <h2 className="text-xl font-semibold mb-4 text-purple-600">
          6. Changes to This Privacy Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with the updated date. Your continued use of
          the website after changes have been made constitutes acceptance of the
          new terms.
        </p>

        <h2 className="text-xl font-semibold mb-4 text-purple-600">
          7. Contact Us
        </h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy or our practices,
          please contact us at [Your Email Address].
        </p>
      </div>
    </motion.div>
  );
}
