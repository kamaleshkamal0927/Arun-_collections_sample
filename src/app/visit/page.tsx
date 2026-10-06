"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  MessageCircle,
  Instagram,
  Star,
  Copy,
  Check,
  Navigation,
  Clock,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import MuruganVel from "@/components/MuruganVel";
import DivineBlessingBanner from "@/components/DivineBlessingBanner";
import { STORE_INFO } from "@/data/collectionsData";

export default function VisitPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(STORE_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* Header Banner */}
      <section className="pt-8 sm:pt-14 pb-8 border-b border-[#E5DAC6] bg-gradient-to-b from-[#F5EFE4] to-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAE0CD] border border-antique-gold/40 text-xs font-semibold text-heritage-espresso uppercase tracking-wider">
            <MuruganVel size={18} withAura={false} withVibhuti={true} />
            <span>Mylapore Physical Showroom</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-heritage-espresso">
            Visit the Store
          </h1>

          <p className="font-display italic text-lg sm:text-xl text-antique-brassDeep">
            &ldquo;Adding Values to Lives.&rdquo;
          </p>

          <p className="text-xs sm:text-sm text-heritage-muted max-w-xl mx-auto leading-relaxed font-light">
            We welcome collectors, interior enthusiasts, and vintage lovers to visit our physical showroom in Mylapore, Chennai. Experience the pieces in person, inspect their patina, and discover treasures for your space.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Store Coordinates Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FAF7F2] border border-[#DFCDB2] rounded-3xl p-6 sm:p-8 shadow-card space-y-6">
              <div className="flex items-center gap-3">
                <MuruganVel size={36} withAura={true} withVibhuti={true} />
                <div>
                  <h2 className="font-serif text-2xl font-bold text-heritage-espresso">
                    {STORE_INFO.name}
                  </h2>
                  <span className="text-xs uppercase tracking-widest text-antique-brass font-medium">
                    {STORE_INFO.category}
                  </span>
                </div>
              </div>

              {/* Physical Address */}
              <div className="space-y-2 border-t border-[#EAE1CF] pt-4">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-antique-brassDeep font-bold">
                  <MapPin className="w-4 h-4 text-temple-red" />
                  <span>Showroom Address</span>
                </div>
                <div className="text-sm text-heritage-charcoal leading-relaxed font-normal bg-[#F5ECE0] p-4 rounded-xl border border-[#E2D5BC]">
                  <p className="font-semibold text-heritage-espresso">94/3, Adam Street,</p>
                  <p>Alamelu Manga Puram,</p>
                  <p>Sankarapuram,</p>
                  <p className="font-medium">Mylapore, Chennai,</p>
                  <p className="text-heritage-muted text-xs">Tamil Nadu, India</p>
                </div>

                {/* Copy Address Button */}
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg border border-antique-gold/40 bg-white hover:bg-[#F3ECE0] text-xs font-medium text-heritage-espresso transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Address Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-antique-brass" />
                      <span>Copy Full Address</span>
                    </>
                  )}
                </button>
              </div>

              {/* Verified Services */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-[#F5ECE0] border border-[#E2D5BC] flex items-center gap-2 text-xs font-semibold text-heritage-espresso">
                  <ShoppingBag className="w-4 h-4 text-emerald-700" />
                  <span>In-Store Shopping</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F5ECE0] border border-[#E2D5BC] flex items-center gap-2 text-xs font-semibold text-heritage-espresso">
                  <Clock className="w-4 h-4 text-amber-700" />
                  <span>In-Store Pickup</span>
                </div>
              </div>

              {/* Direct Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <a
                  href={STORE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-heritage-espresso text-parchment-100 text-xs font-semibold hover:bg-antique-brassDeep transition-all shadow-sm"
                >
                  <Navigation className="w-4 h-4 text-antique-goldLight" />
                  <span>Get Directions on Google Maps</span>
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${STORE_INFO.phone}`}
                    className="inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-full border border-antique-gold bg-[#FAF7F2] text-heritage-espresso text-xs font-semibold hover:bg-[#F3ECE0] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-antique-brass" />
                    <span>Call: {STORE_INFO.phoneDisplay}</span>
                  </a>

                  <a
                    href={STORE_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-full bg-emerald-700 text-white text-xs font-semibold hover:bg-emerald-800 transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Google Rating Trust Badge */}
            <div className="p-5 rounded-2xl bg-[#EFE6D7] border border-[#DFCDB2] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-amber-500 text-white">
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <div className="font-serif text-base font-bold text-heritage-espresso">
                    {STORE_INFO.rating} Stars Rating
                  </div>
                  <div className="text-xs text-heritage-muted">
                    Based on {STORE_INFO.reviewCount} Google Business Reviews
                  </div>
                </div>
              </div>

              <div className="text-[11px] font-semibold text-antique-brassDeep uppercase tracking-wider">
                Verified
              </div>
            </div>
          </div>

          {/* Interactive Google Map & Instagram Details */}
          <div className="lg:col-span-7 space-y-6">
            {/* Embedded Google Map Frame */}
            <div className="bg-[#FAF7F2] border border-[#DFCDB2] rounded-3xl overflow-hidden shadow-card p-4 space-y-4">
              <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-2 text-xs font-bold text-heritage-espresso">
                  <MapPin className="w-4 h-4 text-temple-red" />
                  <span>Showroom Location Map (Mylapore, Chennai)</span>
                </div>
                <a
                  href={STORE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-antique-brassDeep font-medium hover:underline"
                >
                  Open in Maps &rarr;
                </a>
              </div>

              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-[#E5DAC6] bg-[#EFE6D7]">
                <iframe
                  title="Arun Collections Location Map in Mylapore, Chennai"
                  src="https://maps.google.com/maps?q=94/3,+Adam+Street,+Alamelu+Manga+Puram,+Mylapore,+Chennai&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              <div className="text-xs text-heritage-muted px-2 flex items-center justify-between">
                <span>Near historic Kapaleeshwarar &amp; Alamelu Manga Puram</span>
                <span className="text-[11px] text-antique-brass font-medium">Adam Street, Sankarapuram</span>
              </div>
            </div>

            {/* Instagram Community Showcase */}
            <div className="bg-gradient-to-br from-[#24170E] via-[#332215] to-[#1C140E] text-parchment-100 rounded-3xl p-6 sm:p-8 border border-antique-gold/40 shadow-xl space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-xs text-antique-goldLight">
                    <Instagram className="w-4 h-4 text-pink-400" />
                    <span>Instagram Community</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                    {STORE_INFO.instagramHandle}
                  </h3>
                  <p className="text-xs text-parchment-300">
                    Follow Arun Collections on Instagram to discover newly available pieces and updates from the collection.
                  </p>
                </div>

                <div className="text-right sm:text-right flex-shrink-0">
                  <div className="font-serif text-3xl font-bold text-antique-goldLight">
                    {STORE_INFO.instagramFollowers}
                  </div>
                  <div className="text-[11px] text-parchment-300">Followers</div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-parchment-300/80 italic">
                  &ldquo;Discover timeless antiques, vintage collectibles and objects with a story.&rdquo;
                </p>

                <a
                  href={STORE_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-full bg-gradient-to-r from-pink-600 to-amber-600 text-white text-xs font-semibold hover:opacity-95 transition-all shadow-md"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>See Latest Arrivals on Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divine Blessing Banner */}
      <DivineBlessingBanner />

      {/* Direct Quick Inquiry Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-[#FAF7F2] border border-[#DFCDB2] rounded-3xl p-6 sm:p-10 shadow-card text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-antique-brassDeep font-bold">
            <Sparkles className="w-4 h-4 text-antique-gold" />
            <span>Plan Your Store Visit</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl text-heritage-espresso font-normal">
            Have Questions About a Specific Vintage Object?
          </h3>

          <p className="text-xs sm:text-sm text-heritage-muted max-w-xl mx-auto leading-relaxed font-light">
            You can call us directly or drop a quick WhatsApp message to inquire about our current store pieces, store visiting hours, or directions to Adam Street.
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`tel:${STORE_INFO.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-8 rounded-full bg-heritage-espresso text-parchment-100 text-xs font-semibold hover:bg-antique-brassDeep transition-all shadow-sm"
            >
              <Phone className="w-4 h-4 text-antique-goldLight" />
              <span>Call Store: {STORE_INFO.phoneDisplay}</span>
            </a>

            <a
              href={STORE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-8 rounded-full bg-emerald-700 text-white text-xs font-semibold hover:bg-emerald-800 transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Message on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
