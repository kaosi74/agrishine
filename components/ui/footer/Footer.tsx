import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Quicklinks */}
        <div>
          <h3 className="font-bold mb-4">QUICKLINKS</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/learning-hub">Learning Hub</Link>
            </li>
            <li>
              <Link href="/schools-network">Schools Network</Link>
            </li>
            <li>
              <Link href="/blog">Blog/Newsletter</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">SUPPORT</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/help">Help Center</Link>
            </li>
            <li>
              <Link href="/faqs">FAQs</Link>
            </li>
            <li>
              <Link href="/terms">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-300 py-4 text-center text-sm text-surface">
        © ignite 2023. All Copyright Reserved
      </div>
    </footer>
  );
}
