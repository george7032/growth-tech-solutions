import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, Music2, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import logo from "@/assets/zebnex-logo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CONTACT } from "@/lib/site-data";

const ICONS: Record<string, typeof Mail> = {
  Instagram,
  Facebook,
  LinkedIn: Linkedin,
  TikTok: Music2,
};

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M18.2 2.5h3.3l-7.2 8.2 8.5 10.8h-6.7l-5.2-6.6-6 6.6H1.6l7.5-8.5L1 2.5h6.8l4.9 6.2 5.5-6.2Zm-1.2 17.1h1.8L7 4.3H5.1L17 19.6Z" />
    </svg>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" width={512} height={512} loading="lazy" className="h-10 w-10" />
            <span className="font-display font-semibold">Zebnex Tech Solutions</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Empowering Businesses Through Technology &amp; Identity
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Quick links</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/blog", label: "Blog" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Get in touch</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone className="size-4" />
              <a href={CONTACT.phoneHref} className="hover:text-foreground">
                {CONTACT.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4" />
              <a href={`mailto:${CONTACT.email}`} className="break-all hover:text-foreground">
                {CONTACT.email}
              </a>
            </li>
            <li className="text-xs leading-relaxed">{CONTACT.location}</li>
          </ul>
          <div className="mt-5 flex items-center gap-4">
            {CONTACT.socials.map((s) => {
              const Icon = ICONS[s.name];
              return (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.name}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {Icon ? <Icon className="size-4" /> : <XIcon className="size-4" />}
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Newsletter</h3>
          <p className="mt-4 text-sm text-muted-foreground">
            Get tech tips and updates in your inbox
          </p>
          <form
            className="mt-4 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              if (!email.trim()) return;
              setEmail("");
              toast.success("You're subscribed — thanks for joining us.");
            }}
          >
            <Input
              type="email"
              required
              aria-label="Email address"
              placeholder="you@company.co.ke"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" variant="secondary">
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      <div className="border-t border-border/70">
        <div className="container-page py-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Zebnex Tech Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
