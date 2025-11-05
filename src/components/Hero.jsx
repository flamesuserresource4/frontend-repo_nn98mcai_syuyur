import { Star, Shield, Leaf } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50 via-white to-white pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-12 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 text-amber-800 px-3 py-1 text-xs font-medium mb-4">
              <Leaf className="h-4 w-4" /> Cold-Pressed • Traditionally Crafted
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-neutral-900">
              Pure Mustard Goodness, Pressed with Care in India
            </h1>
            <p className="mt-4 text-neutral-600 sm:text-lg">
              KishansKraft Oil carries forward the age-old Indian tradition of wooden cold-pressing. Each drop is rich in natural aroma, authentic flavor, and the trust of clean, modern standards.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#product"
                className="inline-flex items-center justify-center rounded-full bg-amber-600 px-6 py-3 text-white font-medium shadow hover:bg-amber-700"
              >
                Explore the Bottle
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-6 py-3 text-neutral-800 font-medium hover:bg-neutral-50"
              >
                Our Story
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="rounded-xl border p-4 flex items-center gap-3">
                <Shield className="h-5 w-5 text-amber-600" />
                <div>
                  <p className="text-sm font-semibold">Lab Tested</p>
                  <p className="text-xs text-neutral-600">No additives</p>
                </div>
              </div>
              <div className="rounded-xl border p-4 flex items-center gap-3">
                <Star className="h-5 w-5 text-amber-600" />
                <div>
                  <p className="text-sm font-semibold">Bold Aroma</p>
                  <p className="text-xs text-neutral-600">Authentic taste</p>
                </div>
              </div>
              <div className="rounded-xl border p-4 flex items-center gap-3">
                <Leaf className="h-5 w-5 text-amber-600" />
                <div>
                  <p className="text-sm font-semibold">Wood-Pressed</p>
                  <p className="text-xs text-neutral-600">Nutrient rich</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] w-full rounded-3xl bg-gradient-to-br from-amber-100 via-amber-50 to-white border shadow-inner overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1615485737651-f1f8f02bd74e?q=80&w=1932&auto=format&fit=crop"
                alt="KishansKraft Cold-Pressed Mustard Oil bottle"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur rounded-xl border shadow p-3">
              <p className="text-xs text-neutral-600">Image for illustration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
