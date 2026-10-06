import React from "react";
import Link from "next/link";
import { Phone, Instagram, MapPin, MessageCircle, Star } from "lucide-react";
import MuruganVel from "./MuruganVel";
import { STORE_INFO } from "@/data/collectionsData";

export default function Footer() {
  return (
    <footer className="bg-heritage-espresso text-parchment-200 border-t-2 border-antique-gold/40 relative overflow-hidden">
      {/* Decorative Warm Backlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-28 bg-antique-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-24 md:pb-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12">
          {/* Col 1: Brand & Tagline with Sacred Vel */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <MuruganVel size={40} withAura={true} withVibhuti={true} />
              <div>
                <span className="font-serif text-2xl font-bold tracking-widest text-[#FFFDF9] block">
                  {STORE_INFO.name}
                </span>
                <span className="text-xs uppercase tracking-widest text-antique-goldLight">
                  Mylapore, Chennai • Vintage &amp; Antiques
                </span>
              </div>
            </div>

            <p className="font-serif italic text-lg text-antique-goldLight/90">
              &ldquo;{STORE_INFO.tagline}&rdquo;
            </p>

            <p className="text-sm text-parchment-300/80 max-w-md leading-relaxed">
              A private collector&apos;s digital showroom and physical walk-in store in the historic heart of Mylapore, Chennai. Preserving timeless antiques, brass heirlooms, vintage horology, and sacred cultural curiosities.
            </p>

            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/30 border border-antique-gold/30 text-xs">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <span className="font-bold text-white">{STORE_INFO.rating} ★</span>
              <span className="text-parchment-300">({STORE_INFO.reviewCount} Google Reviews)</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-serif text-base uppercase tracking-wider text-antique-goldLight mb-4 font-semibold">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-parchment-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home Showroom
                </Link>
              </li>
              <li>
                <Link href="/collections" className="hover:text-white transition-colors">
                  The Collection Gallery
                </Link>
              </li>
              <li>
                <Link href="/visit" className="hover:text-white transition-colors">
                  Visit Mylapore Store
                </Link>
              </li>
              <li>
                <a
                  href={STORE_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-400" />
                  Instagram (@aruncollections2024)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Mylapore Store Coordinates */}
          <div>
            <h4 className="font-serif text-base uppercase tracking-wider text-antique-goldLight mb-4 font-semibold">
              Mylapore Store
            </h4>
            <p className="text-xs text-parchment-300 leading-relaxed mb-3">
              94/3, Adam Street, Alamelu Manga Puram, Sankarapuram, Mylapore, Chennai, Tamil Nadu, India.
            </p>
            <div className="space-y-2 text-xs text-parchment-300">
              <a
                href={`tel:${STORE_INFO.phone}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-antique-goldLight" />
                Phone: {STORE_INFO.phoneDisplay}
              </a>
              <a
                href={STORE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                WhatsApp: {STORE_INFO.phoneDisplay}
              </a>
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                Directions to Showroom
              </a>
            </div>

            <div className="mt-4 pt-3 border-t border-parchment-300/10 text-[11px] text-antique-goldLight/80">
              In-store shopping • In-store pickup
            </div>
          </div>
        </div>

        {/* Bottom Divine Energy Line & Copyright */}
        <div className="mt-12 pt-6 border-t border-antique-gold/20 flex flex-col sm:flex-row items-center justify-between text-xs text-parchment-300/70 gap-4">
          <div className="flex items-center gap-2">
            <span className="text-antique-goldLight font-serif">ஓம்</span>
            <span>வெற்றிவேல் • அருள்மிகு மயிலை பாரம்பரியம்</span>
          </div>

          <div>
            Copyright &copy; {new Date().getFullYear()} {STORE_INFO.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={STORE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <span>•</span>
            <a
              href={STORE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              WhatsApp
            </a>
            <span>•</span>
            <a
              href={STORE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Google Maps
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
