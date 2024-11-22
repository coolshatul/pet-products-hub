import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <nav>
          <ul className="flex justify-center space-x-4">
            <li>
              <Link
                href="/terms"
                className="hover:text-yellow-300 transition-colors"
              >
                Terms
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="hover:text-yellow-300 transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-yellow-300 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <p className="mt-2">&copy; 2024 PetProductsHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
