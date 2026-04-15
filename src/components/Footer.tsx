import { Plus } from "lucide-react";
import { useState } from "react";

const footerSections = [
  {
    title: "Customer Service",
    links: ["Contact Us", "Delivery", "Returns", "Size Guide", "FAQ"],
  },
  {
    title: "Brand",
    links: ["About Us", "Careers", "Sustainability", "Press"],
  },
  {
    title: "Legal",
    links: ["Terms & Conditions", "Privacy Policy", "Cookie Policy"],
  },
];

const Footer = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <button
                className="flex items-center justify-between w-full md:cursor-default"
                onClick={() =>
                  setOpenSection(
                    openSection === section.title ? null : section.title
                  )
                }
              >
                <h3 className="text-xs tracking-[0.2em] uppercase font-medium text-footer-foreground">
                  {section.title}
                </h3>
                <Plus
                  size={14}
                  className={`text-footer-foreground md:hidden transition-transform ${
                    openSection === section.title ? "rotate-45" : ""
                  }`}
                />
              </button>
              <ul
                className={`mt-4 space-y-2 ${
                  openSection === section.title ? "block" : "hidden"
                } md:block`}
              >
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-footer-muted text-xs hover:text-footer-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase font-medium text-footer-foreground mb-4">
              Stay Posted
            </h3>
            <p className="text-footer-muted text-xs mb-4">
              Sign up to our newsletter for latest news, offers and updates.
            </p>
            <div className="flex border border-footer-border">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-transparent text-footer-foreground text-xs px-3 py-2.5 placeholder:text-footer-muted outline-none"
              />
              <button className="text-footer-foreground text-xs tracking-[0.1em] uppercase font-medium px-4 hover:opacity-60 transition-opacity">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-footer-border px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-footer-muted text-[10px] tracking-wide">
          © 2025 Jaded London. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {["Instagram", "TikTok", "Twitter", "YouTube"].map((social) => (
            <a
              key={social}
              href="#"
              className="text-footer-muted text-[10px] tracking-wide hover:text-footer-foreground transition-colors"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
