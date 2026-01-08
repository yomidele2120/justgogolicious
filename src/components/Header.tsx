import { useState } from "react";
import { Menu, X, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const WHATSAPP_LINKS = {
  general: "https://wa.me/2347069329078?text=Hello%20Justgogolicious%2C%20I%E2%80%99d%20like%20to%20place%20an%20order&source=website",
};

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const SnapchatIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12.922-.215.095-.035.18-.067.251-.092.252-.086.538-.177.836-.177.308 0 .592.098.793.285.245.227.303.552.213.918-.09.363-.362.654-.784.813-.203.076-.42.135-.632.184-.173.04-.351.078-.5.12-.364.096-.625.218-.76.391-.149.187-.217.496-.163.844.023.138.062.27.103.397.074.216.14.46.14.698 0 .194-.042.374-.115.532-.26.554-.897.907-1.418 1.16-.268.128-.508.218-.743.303-.18.065-.355.127-.498.191-.168.076-.263.136-.287.152-.174.1-.322.23-.443.37-.21.247-.346.55-.356.868-.007.202.053.38.173.509.247.265.673.398 1.265.398.135 0 .276-.012.423-.035.378-.056.766-.18 1.158-.304.212-.067.426-.135.64-.19.21-.052.425-.08.64-.08.39 0 .738.112.966.3.271.222.404.524.404.897 0 .378-.145.748-.465 1.006-.285.23-.692.373-1.15.373-.277 0-.583-.048-.897-.145-.264-.08-.51-.206-.756-.333-.193-.1-.396-.206-.576-.277-.238-.095-.46-.145-.696-.145a2.43 2.43 0 0 0-.403.033c-.336.057-.657.176-.98.295-.343.127-.688.255-1.033.315-.19.033-.395.05-.613.05-.223 0-.43-.017-.63-.05-.335-.058-.675-.185-1.015-.31-.32-.118-.64-.235-.974-.293-.117-.02-.246-.032-.38-.032-.203 0-.37.03-.52.09-.171.07-.366.175-.55.27-.242.125-.483.25-.74.33-.304.094-.605.14-.877.14-.452 0-.854-.142-1.135-.37-.31-.252-.452-.616-.452-.988 0-.373.13-.67.398-.89.225-.185.57-.295.958-.295.216 0 .432.027.645.08.216.056.43.124.644.192.388.122.776.246 1.153.302.147.023.288.035.424.035.59 0 1.014-.132 1.26-.396.12-.128.18-.305.173-.505-.01-.318-.145-.62-.354-.867-.12-.14-.267-.27-.439-.368-.026-.015-.12-.076-.285-.15-.144-.066-.317-.128-.497-.193-.235-.085-.475-.175-.742-.303-.52-.252-1.156-.605-1.416-1.157-.072-.157-.114-.336-.114-.53 0-.237.065-.48.138-.694.042-.127.08-.258.104-.396.055-.348-.014-.657-.162-.844-.135-.172-.396-.294-.76-.39-.15-.043-.327-.08-.5-.12-.211-.05-.428-.108-.63-.184-.423-.16-.696-.45-.785-.815-.09-.365-.033-.69.212-.917.2-.186.483-.284.79-.284.3 0 .585.09.837.176.072.025.157.057.253.092.262.095.62.23.92.215.198 0 .326-.045.4-.09-.008-.165-.018-.33-.03-.51l-.002-.06c-.104-1.628-.23-3.654.3-4.847C7.86 1.068 11.216.793 12.206.793z"/>
  </svg>
);

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#menu", label: "Menu" },
    { href: "#gallery", label: "Gallery" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img 
              src={logo} 
              alt="Justgogolicious Logo" 
              className="h-10 md:h-12 w-auto rounded-lg"
            />
            <span className="text-lg md:text-xl font-extrabold text-gradient hidden sm:block">
              Justgogolicious
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-muted-foreground hover:text-primary font-medium transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social Icons & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://instagram.com/justgogolicious"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.snapchat.com/add/justgogo.gogo?share_id=yIycaqpybvU&locale=en-NG"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-[#FFFC00] transition-colors duration-200"
              aria-label="Snapchat"
            >
              <SnapchatIcon />
            </a>
            <a
              href={WHATSAPP_LINKS.general}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-whatsapp hover:text-whatsapp-hover transition-colors duration-200"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon />
            </a>
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              <a href={WHATSAPP_LINKS.general} target="_blank" rel="noopener noreferrer">
                Order Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-muted-foreground hover:text-primary font-medium py-2 transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <a
                  href="https://instagram.com/justgogolicious"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.snapchat.com/add/justgogo.gogo?share_id=yIycaqpybvU&locale=en-NG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-[#FFFC00] transition-colors duration-200"
                  aria-label="Snapchat"
                >
                  <SnapchatIcon />
                </a>
                <a
                  href={WHATSAPP_LINKS.general}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-whatsapp hover:text-whatsapp-hover transition-colors duration-200"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon />
                </a>
              </div>
              <Button
                asChild
                className="whatsapp-btn w-full justify-center mt-2"
              >
                <a href={WHATSAPP_LINKS.general} target="_blank" rel="noopener noreferrer">
                  Order on WhatsApp
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
