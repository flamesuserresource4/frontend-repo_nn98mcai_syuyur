import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold">KishansKraft Oil</h3>
            <p className="mt-2 text-sm text-neutral-400">
              Traditional purity, bottled with modern trust. Cold-pressed mustard oil for homes that love authentic taste.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-neutral-300">Reach us</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 98765 43210</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@kishanskraft.in</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Jaipur, Rajasthan, India</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-neutral-300">Follow</h4>
            <div className="mt-3 flex gap-3">
              <a aria-label="Instagram" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-800 hover:bg-neutral-700"><Instagram className="h-4 w-4" /></a>
              <a aria-label="Facebook" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-800 hover:bg-neutral-700"><Facebook className="h-4 w-4" /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-800 pt-6 text-xs text-neutral-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} KishansKraft Oil. All rights reserved.</p>
          <p>Made with care for Indian kitchens.</p>
        </div>
      </div>
    </footer>
  );
}
