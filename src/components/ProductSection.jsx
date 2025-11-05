import { ShieldCheck, Droplets, Recycle, Package } from 'lucide-react';

export default function ProductSection() {
  const features = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-amber-600" />,
      title: 'Cold-Pressed Purity',
      desc: 'Extracted at low temperatures to retain natural antioxidants, vitamins, and the signature pungency of mustard.'
    },
    {
      icon: <Droplets className="h-6 w-6 text-amber-600" />,
      title: 'Rich Omega Profile',
      desc: 'Naturally balanced fats that support heart health and traditional Indian cooking.'
    },
    {
      icon: <Recycle className="h-6 w-6 text-amber-600" />,
      title: 'Sustainably Sourced',
      desc: 'Seeds procured from trusted farms, processed with care, and bottled responsibly.'
    },
    {
      icon: <Package className="h-6 w-6 text-amber-600" />,
      title: 'Secure Packaging',
      desc: 'Tamper-evident cap with freshness seal to lock in aroma and nutrients.'
    }
  ];

  return (
    <section id="product" className="py-16 sm:py-24 bg-amber-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
              KishansKraft Mustard Oil — 1L Premium Bottle
            </h2>
            <p className="mt-3 text-neutral-700">
              Crafted in small batches using traditional wooden ghani methods and verified on modern quality parameters. Perfect for tadka, pickling, and deep frying with authentic North-Indian essence.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f.title} className="rounded-xl bg-white border p-4 flex items-start gap-3">
                  {f.icon}
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">{f.title}</p>
                    <p className="text-sm text-neutral-600">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-end gap-6">
              <div>
                <div className="text-3xl font-extrabold text-neutral-900">₹349</div>
                <div className="text-xs text-neutral-500">Inclusive of all taxes</div>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-amber-600 px-6 py-3 text-white font-medium shadow hover:bg-amber-700"
              >
                Order via WhatsApp
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="aspect-square rounded-3xl overflow-hidden border bg-white shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1624304923061-67e8aa014fb8?q=80&w=1887&auto=format&fit=crop"
                alt="Mustard seeds and oil bowl"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs text-neutral-600">
              <div className="rounded-md border bg-white p-2">1L Bottle</div>
              <div className="rounded-md border bg-white p-2">Glass & PET options</div>
              <div className="rounded-md border bg-white p-2">Shelf life: 9 months</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
