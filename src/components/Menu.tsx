import { BestSellerBadge } from "./BestSellerBadge";

const WHATSAPP_LINKS = {
  general: "https://wa.me/2347069329078?text=Hello%20Justgogolicious%2C%20I%E2%80%99d%20like%20to%20place%20an%20order&source=website",
  bestSeller: "https://wa.me/2347069329078?text=Hello%20Justgogolicious%2C%20I%E2%80%99d%20like%20to%20order%20your%20best%20seller&source=best_seller",
};

interface MenuItem {
  name: string;
  description: string;
  price: string;
  isBestSeller?: boolean;
  emoji: string;
}

const menuItems: MenuItem[] = [
  {
    name: "Birthday Cakes",
    description: "Custom designed celebration cakes for your special day",
    price: "From ₦13,000",
    isBestSeller: true,
    emoji: "🎂",
  },
  {
    name: "Cake Parfait",
    description: "Layered cake and cream in a cup - pure indulgence",
    price: "From ₦4,500",
    isBestSeller: true,
    emoji: "🍰",
  },
  {
    name: "Meatpie",
    description: "Crispy, flaky pastry with savory meat filling",
    price: "Box of 3 – ₦3,500",
    isBestSeller: true,
    emoji: "🥧",
  },
  {
    name: "Cake Loafs",
    description: "Soft, fluffy pound cakes in various flavors",
    price: "From ₦5,000",
    emoji: "🍞",
  },
  {
    name: "Cupcakes",
    description: "Beautifully decorated mini cakes for any occasion",
    price: "Box of 3 – ₦3,500",
    emoji: "🧁",
  },
  {
    name: "Doughnuts",
    description: "Fresh, soft doughnuts with delicious toppings",
    price: "Box of 3 – ₦3,000",
    emoji: "🍩",
  },
  {
    name: "Chin Chin",
    description: "Crunchy Nigerian snack - perfect for parties",
    price: "From ₦1,500",
    emoji: "🍪",
  },
  {
    name: "Foil Cakes",
    description: "Individual portions of moist cake in foil cups",
    price: "Starting from ₦1,200",
    emoji: "🧁",
  },
  {
    name: "Food on Request",
    description: "Custom orders for your special occasions",
    price: "Contact for pricing",
    emoji: "🍽️",
  },
];

export const Menu = () => {
  return (
    <section id="menu" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            Our Menu
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What We <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Freshly baked with love, every item is made to perfection. 
            From cakes to pastries, we've got your cravings covered.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <a
              key={item.name}
              href={item.isBestSeller ? WHATSAPP_LINKS.bestSeller : WHATSAPP_LINKS.general}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-card rounded-2xl p-6 border border-border card-hover cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Best Seller Badge */}
              {item.isBestSeller && (
                <div className="absolute -top-3 right-4">
                  <BestSellerBadge />
                </div>
              )}

              {/* Emoji Icon */}
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.emoji}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {item.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {item.description}
              </p>

              {/* Price */}
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold">
                  {item.price}
                </span>
                <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  Order →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
