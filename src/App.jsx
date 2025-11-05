import Header from './components/Header';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductSection />

        {/* About Section */}
        <section id="about" className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">A legacy of purity, a promise of trust</h2>
                <p className="mt-4 text-neutral-700">
                  KishansKraft Oil began as a family pursuit to protect the honesty of Indian flavors. We embraced the timeless wooden ghani method and paired it with strict modern quality checks. The result is an oil that feels like home—golden, fragrant, and full of good intent.
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-amber-600" /> No added colors, flavors, or preservatives</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-amber-600" /> Seeds sourced from trusted farms</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-amber-600" /> Batch-wise quality checks and hygiene protocols</li>
                </ul>
              </div>
              <div className="rounded-3xl overflow-hidden border bg-amber-50/60 p-6">
                <div className="aspect-video w-full rounded-2xl overflow-hidden border shadow-sm bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&w=1974&auto=format&fit=crop"
                    alt="Traditional cold-press setup"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="mt-3 text-xs text-neutral-600 text-center">From seed to bottle — crafted with conscience</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 sm:py-24 bg-neutral-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Bring KishansKraft home</h2>
              <p className="mt-3 text-neutral-700">Order directly with a quick message. We ship across India.</p>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <a
                href="https://wa.me/919876543210?text=Hi%20KishansKraft%2C%20I%27d%20like%20to%20order%20your%20cold-pressed%20mustard%20oil."
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl border bg-white p-6 hover:shadow-md transition-shadow"
              >
                <p className="text-sm font-semibold">WhatsApp</p>
                <p className="text-sm text-neutral-600">Chat with us for quick orders and support</p>
              </a>
              <a
                href="mailto:hello@kishanskraft.in?subject=KishansKraft%20Order%20Inquiry"
                className="block rounded-2xl border bg-white p-6 hover:shadow-md transition-shadow"
              >
                <p className="text-sm font-semibold">Email</p>
                <p className="text-sm text-neutral-600">Prefer email? We respond within 24 hours</p>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
