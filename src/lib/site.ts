/* Single source of truth for contact details and navigation, so the
   navbar, footer and contact page can never drift apart again. */

export const site = {
  name: "Shalla Wellness Center",
  description:
    "Preventive healthcare and metabolic wellness solutions for healthier, more productive lives.",
  logo: "/images/logo/shalla-logo.png",
  mark: "/images/logo/shalla-mark.png",
  icon: "/images/logo/shalla-icon.png",
  address: "Bole, Atlas, Platinum Plaza, 5th floor, House no. 386",
  city: "Addis Ababa, Ethiopia",
  email: "Shallawell7@gmail.com",
  phones: [
    { label: "+251 920 244 516", href: "tel:+251920244516" },
    { label: "+251 988 035 023", href: "tel:+251988035023" },
  ],
  telegram: "https://t.me/Shallawell",
  map: "https://maps.google.com/maps?q=9.000318,38.779938&ll=9.000318,38.779938&z=16&output=embed",
};

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];
