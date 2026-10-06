"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Instagram, MapPin, Menu, X, MessageCircle } from "lucide-react";
import MuruganVel from "./MuruganVel";
import { STORE_INFO } from "@/data/collectionsData";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "The Collection", href: "/collections" },
    { label: "Visit & Contact", href: "/visit" },
  ];

  return (
    <>
      {/* Top Divine & Heritage Bar */}
      <div className="bg-heritage-espresso text-parchment-200 border-b border-antique-gold/20 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium tracking-wide">
              Physical Showroom Open in Mylapore, Chennai
            </span>
            <span className="hidden sm:inline text-antique-goldLight">
              • In-Store Shopping &amp; Pickup
            </span>
          </div>

          <div className="flex items-center gap-4 text-parchment-300">
            <a
              href={STORE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-antique-goldLight flex items-center gap-1 transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>{STORE_INFO.instagramFollowers}</span>
            </a>
            <a
              href={`tel:${STORE_INFO.phone}`}
              className="hover:text-antique-goldLight flex items-center gap-1 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{STORE_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DFC9] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo with Murugan Vel */}
            <Link
              href="/"
              className="flex items-center gap-3.5 group focus:outline-none"
            >
              <div className="transition-transform duration-300 group-hover:scale-105">
                <MuruganVel size={34} withAura={true} withVibhuti={true} />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-heritage-espresso group-hover:text-antique-brassDeep transition-colors">
                  ARUN COLLECTIONS
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-antique-brass font-medium">
                  Antique &amp; Vintage Showroom • Mylapore
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm tracking-wide transition-colors py-2 font-medium ${
                      isActive
                        ? "text-antique-brassDeep font-semibold border-b-2 border-antique-gold"
                        : "text-heritage-charcoal hover:text-antique-brass"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Quick Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={STORE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-antique-gold/50 bg-[#F3ECE0] text-heritage-espresso text-xs font-semibold hover:bg-antique-gold hover:text-white transition-all shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                WhatsApp Store
              </a>
              <Link
                href="/visit"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-heritage-espresso text-parchment-100 text-xs font-semibold hover:bg-antique-brassDeep transition-all shadow-sm"
              >
                <MapPin className="w-3.5 h-3.5 text-antique-goldLight" />
                Visit Mylapore
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-heritage-espresso hover:bg-[#F3ECE0] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-heritage-espresso" />
              ) : (
                <Menu className="w-6 h-6 text-heritage-espresso" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF7F2] border-b border-[#E8DFC9] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="space-y-2 mb-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-2.5 rounded-lg text-sm font-medium ${
                      isActive
                        ? "bg-[#EFE6D7] text-antique-brassDeep font-bold"
                        : "text-heritage-charcoal hover:bg-[#F3ECE0]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#E8DFC9]">
              <a
                href={STORE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#EFE6D7] text-heritage-espresso text-xs font-semibold"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                WhatsApp
              </a>
              <a
                href={`tel:${STORE_INFO.phone}`}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-heritage-espresso text-parchment-100 text-xs font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-antique-goldLight" />
                Call Store
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
