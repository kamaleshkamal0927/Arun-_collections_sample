"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  MessageCircle,
  X,
  MapPin,
  Instagram,
  ArrowRight,
  Eye,
  Check,
} from "lucide-react";
import MuruganVel from "@/components/MuruganVel";
import DivineBlessingBanner from "@/components/DivineBlessingBanner";
import {
  CATEGORIES,
  ANTIQUE_COLLECTION,
  AntiqueItem,
  STORE_INFO,
} from "@/data/collectionsData";

export default function CollectionsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Objects");
  const [activeItem, setActiveItem] = useState<AntiqueItem | null>(null);

  // Filter items
  const filteredItems =
    selectedCategory === "All Objects"
      ? ANTIQUE_COLLECTION
      : ANTIQUE_COLLECTION.filter((item) => item.category === selectedCategory);

  const getWhatsAppInquiryUrl = (item: AntiqueItem) => {
    const text = encodeURIComponent(
      `Hello Arun Collections, I saw "${item.title}" (${item.category}) in your digital showroom. I would like to inquire about its availability to view at your Mylapore store.`
    );
    return `https://wa.me/919710394404?text=${text}`;
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* Header Banner */}
      <section className="pt-8 sm:pt-14 pb-8 border-b border-[#E5DAC6] bg-gradient-to-b from-[#F5EFE4] to-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAE0CD] border border-antique-gold/40 text-xs font-semibold text-heritage-espresso uppercase tracking-wider">
            <MuruganVel size={18} withAura={false} withVibhuti={true} />
            <span>Curated Digital Showroom</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-heritage-espresso">
            The Collection
          </h1>

          <p className="font-display italic text-lg sm:text-xl text-antique-brassDeep">
            &ldquo;Objects with a story. Pieces from another era.&rdquo;
          </p>

          <p className="text-xs sm:text-sm text-heritage-muted max-w-xl mx-auto leading-relaxed font-light">
            Explore our curated selection of vintage collectibles, heavy brass vessels, mechanical horology, and sacred cultural curiosities available for viewing at our Mylapore walk-in showroom.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Category Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-2 gap-2 scrollbar-none">
          {CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 border ${
                  isSelected
                    ? "bg-heritage-espresso text-parchment-100 border-heritage-espresso shadow-sm"
                    : "bg-[#FAF7F2] text-heritage-charcoal border-[#DFCDB2] hover:bg-[#F0E8D9]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid (Masonry feel) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group bg-[#FAF7F2] border border-[#E5DAC6] rounded-2xl overflow-hidden shadow-card hover:shadow-2xl transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#EFE6D7]">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-heritage-espresso/80 backdrop-blur-sm text-parchment-100 text-[10px] uppercase tracking-wider px-3 py-1 rounded-full font-medium">
                  {item.category}
                </div>

                {/* Inspect Overlay Trigger */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md text-heritage-espresso">
                  <Eye className="w-4 h-4 text-antique-brassDeep" />
                </div>
              </div>

              {/* Card Information */}
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <h3 className="font-serif text-lg font-bold text-heritage-espresso group-hover:text-antique-brassDeep transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-display italic text-xs text-antique-brass">
                    &ldquo;{item.caption}&rdquo;
                  </p>
                  <p className="text-xs text-heritage-muted leading-relaxed line-clamp-2 font-light">
                    {item.description}
                  </p>
                </div>

                {/* Quick features & Inquire button */}
                <div className="pt-3 border-t border-[#EAE1CF] flex items-center justify-between gap-2">
                  <span className="text-[11px] text-antique-brassDeep font-medium">
                    Click to view details
                  </span>

                  <a
                    href={getWhatsAppInquiryUrl(item)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300 text-[11px] font-semibold hover:bg-emerald-100 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    Inquire
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Collector's Detail Modal / Lightbox */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="bg-[#FAF7F2] border border-[#DFCDB2] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/10] w-full bg-[#EFE6D7]">
              <Image
                src={activeItem.imageUrl}
                alt={activeItem.title}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-3 left-4 bg-heritage-espresso/80 backdrop-blur-sm text-parchment-100 text-xs px-3 py-1 rounded-full">
                {activeItem.category}
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-5">
              <div>
                <h3 className="font-serif text-2xl font-bold text-heritage-espresso">
                  {activeItem.title}
                </h3>
                <p className="font-display italic text-sm text-antique-brass mt-1">
                  &ldquo;{activeItem.caption}&rdquo;
                </p>
              </div>

              <p className="text-xs sm:text-sm text-heritage-muted leading-relaxed font-light">
                {activeItem.description}
              </p>

              {/* Object Details / Highlights */}
              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-wider text-antique-brassDeep font-bold block">
                  Curator&apos;s Highlights:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeItem.features.map((feature, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#EFE5D3] text-heritage-espresso text-xs font-medium border border-[#E0D1B9]"
                    >
                      <Check className="w-3.5 h-3.5 text-emerald-700" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Showroom Availability Notice */}
              <div className="p-3.5 rounded-xl bg-[#F0E9DC] border border-[#DFCDB2] text-xs text-heritage-charcoal flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-temple-red flex-shrink-0" />
                <span>
                  Physical inspection available at <strong>Arun Collections, Mylapore</strong>. In-store pickup available.
                </span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={getWhatsAppInquiryUrl(activeItem)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire on WhatsApp</span>
                </a>

                <a
                  href={`tel:${STORE_INFO.phone}`}
                  className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full border border-antique-gold bg-[#FAF7F2] hover:bg-[#F3ECE0] text-heritage-espresso text-xs font-semibold transition-all"
                >
                  <span>Call {STORE_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Divine Blessing Banner */}
      <DivineBlessingBanner compact={true} />

      {/* Discovery from Instagram Notice */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-[#EFE6D7] border border-[#D8C7AA] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-lg font-bold text-heritage-espresso">
              Looking for freshly arrived pieces?
            </h4>
            <p className="text-xs text-heritage-muted max-w-lg leading-relaxed">
              New antique finds and heritage curios are posted almost daily on our Instagram page with video walk-throughs before reaching the website.
            </p>
          </div>

          <a
            href={STORE_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-heritage-espresso text-parchment-100 text-xs font-semibold hover:bg-antique-brassDeep transition-all whitespace-nowrap shadow-sm"
          >
            <Instagram className="w-4 h-4 text-pink-400" />
            <span>See Latest on Instagram</span>
          </a>
        </div>
      </section>
    </div>
  );
}
