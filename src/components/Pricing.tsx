import { Info } from "lucide-react";

const WHATSAPP_LINKS = {
  general: "https://wa.me/2347069329078?text=Hello%20Justgogolicious%2C%20I%E2%80%99d%20like%20to%20place%20an%20order&source=website",
};

interface PriceItem {
  name: string;
  price: string;
}

interface PriceCategory {
  title: string;
  emoji: string;
  items: PriceItem[];
}

const priceCategories: PriceCategory[] = [
  {
    title: "Cupcakes",
    emoji: "🧁",
    items: [
      { name: "Box of 3", price: "₦3,500" },
    ],
  },
  {
    title: "Meat Pies",
    emoji: "🥧",
    items: [
      { name: "Box of 3", price: "₦3,500" },
    ],
  },
  {
    title: "Cake Parfait",
    emoji: "🍨",
    items: [
      { name: "Starting from", price: "₦4,500" },
    ],
  },
  {
    title: "Cake Loafs",
    emoji: "🍞",
    items: [
      { name: "Starting from", price: "₦5,000" },
    ],
  },
  {
    title: "Birthday Cakes",
    emoji: "🎂",
    items: [
      { name: "Starting from", price: "₦13,000" },
    ],
  },
  {
    title: "Foil Cakes",
    emoji: "🍰",
    items: [
      { name: "Small foil cake", price: "₦1,200" },
      { name: "Big foil cake", price: "₦2,500" },
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
              Pricing Info
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-gradient">Pricing</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Quality treats at affordable prices. Here's what we offer!
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {priceCategories.map((category, index) => (
              <div
                key={category.title}
                className="bg-card rounded-2xl border border-border p-6 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{category.emoji}</span>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between py-2 border-b border-border/50 last:border-0"
                    >
                      <span className="text-muted-foreground">{item.name}</span>
                      <span className="font-bold text-primary text-lg">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Notice */}
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-gold/10 border border-gold/30 mb-8">
            <div className="p-2 rounded-full bg-gold/20 shrink-0">
              <Info className="w-5 h-5 text-gold-dark" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Also Available on Request</h4>
              <p className="text-muted-foreground">
                Birthday cakes, custom cakes, chin chin, doughnuts, and food orders available. 
                Prices may vary based on <strong>size</strong>, <strong>quantity</strong>, 
                and <strong>customization</strong>. Contact us on WhatsApp for a personalized quote.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href={WHATSAPP_LINKS.general}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn inline-flex"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Get a Quote on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
