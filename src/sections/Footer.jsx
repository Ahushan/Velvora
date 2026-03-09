import { copyrightSign } from "../assets/icons";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">

        {/* Logo + About */}
        <div className="flex flex-col items-start">
          <a href="/">
            <h6 className="text-white font-extrabold font-palanquin text-2xl tracking-widest">VELVORA</h6>
          </a>

          <p className="mt-6 text-base leading-7 font-montserrat text-slate-400 sm:max-w-sm">
            Discover modern furniture crafted for comfort, elegance, and
            timeless design. Transform your living spaces with our curated
            collection of sofas, chairs, tables, and home essentials.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
                {section.title}
              </h4>

              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 font-montserrat text-base leading-normal text-slate-400 hover:text-white transition"
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex justify-between text-slate-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat">
          <img
            src={copyrightSign}
            alt="copyright sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>© 2026 Velvora Furniture. All rights reserved.</p>
        </div>

        <p className="font-montserrat cursor-pointer hover:text-white transition">
          Terms & Conditions
        </p>
      </div>
    </footer>
  );
};

export default Footer;