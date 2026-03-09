import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import {
  customer1,
  customer2,
  prod1,
  prod2,
  prod3,
  prod4
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#collection", label: "Collection" },
  { href: "#products", label: "Products" },
  { href: "#contact", label: "Contact" },
];

export const statistics = [
  { value: "2k+", label: "Furniture Designs" },
  { value: "500+", label: "Stores Worldwide" },
  { value: "300k+", label: "Happy Customers" },
];

export const products = [
  {
    imgURL: prod1,
    name: "Modern Comfort Sofa",
    price: "899",
    mrp: "1099"
  },
  {
    imgURL: prod2,
    name: "Minimalist Long curved shofa",
    price: "399",
    mrp: "499"
  },
  {
    imgURL: prod3,
    name: "Wooden Coffee Table",
    price: "249",
    mrp: "329"
  },
  {
    imgURL: prod4,
    name: "Scandinavian Chair",
    price: "179",
    mrp: "229"
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free Delivery",
    subtext: "Enjoy free and fast delivery for all furniture orders."
  },
  {
    imgURL: shieldTick,
    label: "Quality Guarantee",
    subtext: "Our furniture is crafted with premium materials and lasting durability."
  },
  {
    imgURL: support,
    label: "Customer Support",
    subtext: "Our team is always ready to help you choose the perfect furniture."
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Sophia Williams",
    rating: 4.8,
    feedback:
      "The furniture quality is amazing and the design perfectly fits my living room. Highly recommended!"
  },
  {
    imgURL: customer2,
    customerName: "Daniel Roberts",
    rating: 4.7,
    feedback:
      "Beautiful modern furniture with excellent craftsmanship. Delivery was quick and hassle-free."
  }
];

export const footerLinks = [
  {
    title: "Shop",
    links: [
      { name: "Sofas", link: "/" },
      { name: "Chairs", link: "/" },
      { name: "Tables", link: "/" },
      { name: "Beds", link: "/" },
      { name: "Storage", link: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", link: "/" },
      { name: "Our Story", link: "/" },
      { name: "Careers", link: "/" },
      { name: "Blog", link: "/" },
    ],
  },
  {
    title: "Contact",
    links: [
      { name: "support@velvora.com", link: "mailto:support@velvora.com" },
      { name: "+1 123 456 7890", link: "tel:+91 1234567890" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];