import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Instagram,
  Star,
  MapPin,
  Sparkles,
  Compass,
  Clock,
  ShieldCheck,
  Heart,
  Store,
  Eye,
  CheckCircle2,
} from "lucide-react";
import MuruganVel from "@/components/MuruganVel";
import DivineBlessingBanner from "@/components/DivineBlessingBanner";
import { STORE_INFO, ANTIQUE_COLLECTION } from "@/data/collectionsData";

export default function HomePage() {
  const featuredPieces = ANTIQUE_COLLECTION.slice(0, 4);

  return (
    <div className="space-y-16 sm:space-y-24 pb-12">
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 sm:pt-16 pb-12 sm:pb-20 overflow-hidden">
        {/* Subtle Background Radial Aura */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Mylapore & Divine Cue */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#EFE5D3] border border-antique-gold/40 text-heritage-espresso text-xs tracking-wider uppercase shadow-sm">
              <MuruganVel size={18} withAura={false} withVibhuti={true} />
              <span className="font-semibold text-antique-brassDeep">Mylapore, Chennai</span>
              <span className="text-antique-gold font-normal">•</span>
              <span className="text-heritage-muted">Heritage Antique Store</span>
            </div>

            {/* Business Title */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-heritage-espresso leading-[1.1]">
              {STORE_INFO.name}
            </h1>

            {/* Tagline */}
            <p className="font-display italic text-2xl sm:text-3xl text-antique-brassDeep">
              &ldquo;{STORE_INFO.tagline}&rdquo;
            </p>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-heritage-muted max-w-2xl mx-auto font-light leading-relaxed">
              Discover timeless antiques, vintage collectibles and objects with a story. A private collector&apos;s digital showroom and walk-in store in the heritage heart of Mylapore.
            </p>

            {/* Hero CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/collections"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-heritage-espresso text-parchment-100 font-medium text-sm hover:bg-antique-brassDeep transition-all duration-200 shadow-md group"
              >
                <span>Explore the Collection</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-antique-gold/60 bg-[#FAF7F2] text-heritage-espresso font-medium text-sm hover:bg-[#F3ECE0] transition-all duration-200 shadow-sm"
              >
                <Instagram className="w-4 h-4 text-pink-600" />
                <span>Visit Instagram ({STORE_INFO.instagramFollowers})</span>
              </a>
            </div>
          </div>

          {/* Hero Featured Photography Showcase */}
          <div className="mt-12 sm:mt-16 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#E5DAC6] aspect-[16/9] max-h-[520px]">
              <Image
                src="https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=1600&q=85"
                alt="Arun Collections antique store showcase in Mylapore Chennai with brass collectibles"
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              {/* Overlay Information */}
              <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 text-white">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 text-antique-goldLight text-xs tracking-wider uppercase font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Private Collector&apos;s Room</span>
                  </div>
                  <h2 className="font-serif text-xl sm:text-3xl font-normal text-parchment-100">
                    Hand-Selected Heirlooms &amp; Patinated Bronzes
                  </h2>
                  <p className="text-xs sm:text-sm text-parchment-200/80 max-w-lg">
                    Every piece in our Mylapore store is personally discovered and preserved for its historical charm and soul.
                  </p>
                </div>

                <Link
                  href="/collections"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-antique-gold text-heritage-espresso font-semibold text-xs hover:bg-antique-goldLight transition-all"
                >
                  <span>View All Categories</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Trust Metrics Bar */}
            <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DFC9] flex items-center gap-3 shadow-card">
                <div className="p-2.5 rounded-lg bg-[#EFE6D7] text-antique-brassDeep">
                  <Instagram className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <div className="font-serif text-lg font-bold text-heritage-espresso">
                    {STORE_INFO.instagramFollowers}
                  </div>
                  <div className="text-[11px] text-heritage-muted">Instagram Followers</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DFC9] flex items-center gap-3 shadow-card">
                <div className="p-2.5 rounded-lg bg-[#EFE6D7] text-antique-brassDeep">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-500" />
                </div>
                <div>
                  <div className="font-serif text-lg font-bold text-heritage-espresso">
                    {STORE_INFO.rating} ★ Rating
                  </div>
                  <div className="text-[11px] text-heritage-muted">{STORE_INFO.reviewCount} Google Reviews</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DFC9] flex items-center gap-3 shadow-card">
                <div className="p-2.5 rounded-lg bg-[#EFE6D7] text-antique-brassDeep">
                  <MapPin className="w-5 h-5 text-temple-red" />
                </div>
                <div>
                  <div className="font-serif text-lg font-bold text-heritage-espresso">
                    Mylapore Store
                  </div>
                  <div className="text-[11px] text-heritage-muted">Walk-in Showroom</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DFC9] flex items-center gap-3 shadow-card">
                <div className="p-2.5 rounded-lg bg-[#EFE6D7] text-antique-brassDeep">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="font-serif text-lg font-bold text-heritage-espresso">
                    Store Shopping
                  </div>
                  <div className="text-[11px] text-heritage-muted">&amp; In-Store Pickup</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SACRED MYLAPORE & MURUGAN VEL DIVINE BLESSING SECTION */}
      <DivineBlessingBanner />

      {/* 3. ABOUT ARUN COLLECTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] border border-[#E2D5BC] rounded-3xl p-8 sm:p-14 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual representation */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-antique-gold/40 shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1609743522653-52354461eb27?auto=format&fit=crop&w=800&q=80"
                  alt="Traditional bronze and brass collectibles at Arun Collections Mylapore"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating quote badge */}
              <div className="absolute -bottom-4 -right-4 bg-heritage-espresso text-parchment-100 p-4 rounded-xl border border-antique-gold/40 shadow-xl max-w-xs">
                <p className="font-display italic text-xs text-antique-goldLight">
                  &ldquo;Connecting people with unique vintage objects that carry a story.&rdquo;
                </p>
              </div>
            </div>

            {/* Story & Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-antique-brassDeep font-semibold">
                <Compass className="w-4 h-4 text-antique-gold" />
                <span>About Arun Collections</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-heritage-espresso font-normal leading-snug">
                A Passion for Preserving Pieces with History
              </h2>

              <div className="space-y-4 text-heritage-muted text-sm sm:text-base leading-relaxed font-light">
                <p>
                  At Arun Collections, our journey stems from a deep, genuine passion for antiques and the belief that everyday objects can hold timeless soul. Each piece we bring to our Mylapore showroom has lived through decades, carrying the patina, memories, and touch of generations.
                </p>
                <p>
                  We are devoted to collecting objects with history, preserving rare pieces from the past, and connecting individuals who appreciate authentic craftsmanship and nostalgia. Whether it is the resonant bell metal of a traditional brass uruli, the steady heartbeat of a mechanical pendulum clock, or the tactile click of an analogue camera, these treasures bring character and warmth into modern living spaces.
                </p>
                <p>
                  Located in Mylapore, Chennai, our store offers an intimate, personal space where collectors, homeowners, and vintage enthusiasts can discover something truly distinctive.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/visit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-antique-brassDeep text-white text-xs font-medium hover:bg-heritage-espresso transition-all shadow-sm"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Visit Us in Mylapore</span>
                </Link>

                <a
                  href={STORE_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-antique-gold text-heritage-espresso text-xs font-medium hover:bg-[#F3ECE0] transition-all"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-600" />
                  <span>Explore on Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CURATED SHOWCASE PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-antique-brass font-semibold mb-2">
              <Eye className="w-4 h-4 text-antique-gold" />
              <span>Curated Showroom</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-heritage-espresso font-normal">
              Objects with a Story
            </h2>
            <p className="text-sm text-heritage-muted mt-1 max-w-xl">
              A glimpse into the diverse vintage categories showcased in our physical store and Instagram gallery.
            </p>
          </div>

          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-sm font-semibold text-antique-brassDeep hover:text-heritage-espresso transition-colors self-start md:self-end"
          >
            <span>View Complete Collection</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPieces.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAF7F2] border border-[#E8DFC9] rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#EFE6D7]">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-heritage-espresso/80 backdrop-blur-sm text-parchment-100 text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full font-medium">
                  {item.category}
                </div>
              </div>

              <div className="p-5 flex-grow flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-serif text-lg font-semibold text-heritage-espresso group-hover:text-antique-brassDeep transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-display italic text-xs text-antique-brass mt-1">
                    &ldquo;{item.caption}&rdquo;
                  </p>
                  <p className="text-xs text-heritage-muted mt-2 line-clamp-2 font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EAE1CF] flex items-center justify-between text-xs">
                  <span className="text-heritage-muted text-[11px]">Available in store</span>
                  <Link
                    href="/collections"
                    className="text-antique-brassDeep font-medium hover:underline inline-flex items-center gap-1"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. WHY ARUN COLLECTIONS (6 Verified Core Pillars) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F2ECE0] border border-[#DFCDB2] rounded-3xl p-8 sm:p-12 lg:p-16">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs uppercase tracking-widest text-antique-brassDeep font-semibold">
              The Collector&apos;s Standard
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-heritage-espresso font-normal">
              Why Arun Collections
            </h2>
            <p className="text-sm text-heritage-muted font-light">
              We focus on genuine curiosity, preservation, and creating a welcoming space for anyone who appreciates the character of old-world objects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E2D5BC] space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#EFE6D7] flex items-center justify-center text-antique-brassDeep">
                <Heart className="w-5 h-5 text-temple-red" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-heritage-espresso">
                Passion for Antiques
              </h3>
              <p className="text-xs text-heritage-muted leading-relaxed font-light">
                Driven by a personal reverence for craftsmanship and the stories embedded in artifacts from bygone eras.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E2D5BC] space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#EFE6D7] flex items-center justify-center text-antique-brassDeep">
                <Sparkles className="w-5 h-5 text-antique-gold" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-heritage-espresso">
                Unique Vintage Finds
              </h3>
              <p className="text-xs text-heritage-muted leading-relaxed font-light">
                Every discovery brings its own individual patina, hand-forged quirks, and nostalgic aesthetic.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E2D5BC] space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#EFE6D7] flex items-center justify-center text-antique-brassDeep">
                <ShieldCheck className="w-5 h-5 text-emerald-700" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-heritage-espresso">
                Carefully Selected Collectibles
              </h3>
              <p className="text-xs text-heritage-muted leading-relaxed font-light">
                Each piece is thoughtfully evaluated for integrity, aesthetic character, and cultural preservation.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E2D5BC] space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#EFE6D7] flex items-center justify-center text-antique-brassDeep">
                <Store className="w-5 h-5 text-antique-brassDeep" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-heritage-espresso">
                Physical Store in Mylapore
              </h3>
              <p className="text-xs text-heritage-muted leading-relaxed font-light">
                A welcoming brick-and-mortar space at Adam Street where you can see, touch, and experience items in person.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E2D5BC] space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#EFE6D7] flex items-center justify-center text-antique-brassDeep">
                <Compass className="w-5 h-5 text-blue-800" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-heritage-espresso">
                Personal Experience &amp; Knowledge
              </h3>
              <p className="text-xs text-heritage-muted leading-relaxed font-light">
                Direct conversations with passionate curators ready to share what makes each object distinctive.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E2D5BC] space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#EFE6D7] flex items-center justify-center text-antique-brassDeep">
                <Clock className="w-5 h-5 text-amber-700" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-heritage-espresso">
                Constantly Evolving Collection
              </h3>
              <p className="text-xs text-heritage-muted leading-relaxed font-light">
                Regularly updated with fresh discoveries arriving weekly across Tamil Nadu and ancestral homes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INSTAGRAM SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#201712] via-[#2D1F17] to-[#1C140E] text-parchment-100 rounded-3xl p-8 sm:p-12 lg:p-14 border border-antique-gold/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-antique-goldLight text-xs">
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <span>Primary Discovery Channel</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#FFFDF9] font-normal">
                Follow {STORE_INFO.instagramHandle}
              </h2>

              <p className="text-sm sm:text-base text-parchment-200/80 leading-relaxed font-light">
                Follow Arun Collections on Instagram to discover newly available pieces and updates from the collection. We frequently share short video showcases and newly arrived heirlooms straight from our store in Mylapore.
              </p>

              <div className="pt-2 flex items-center gap-4 text-xs text-antique-goldLight font-medium">
                <span className="text-white text-lg font-bold font-serif">{STORE_INFO.instagramFollowers}</span>
                <span>Enthusiasts &amp; Collectors Following Our Finds</span>
              </div>

              <div className="pt-2">
                <a
                  href={STORE_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-gradient-to-r from-pink-600 to-amber-600 text-white font-semibold text-xs hover:opacity-95 transition-all shadow-md"
                >
                  <Instagram className="w-4 h-4" />
                  <span>See Latest Arrivals on Instagram</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 p-0.5">
                  <div className="w-full h-full rounded-full bg-heritage-espresso flex items-center justify-center text-antique-gold font-serif font-bold text-sm">
                    AC
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-sm text-white">{STORE_INFO.instagramHandle}</div>
                  <div className="text-xs text-parchment-300">Arun Collections • Mylapore, Chennai</div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-3 text-xs text-parchment-200/90 leading-relaxed">
                <p className="italic">
                  &ldquo;Adding Values to Lives.&rdquo;
                </p>
                <p className="mt-1 text-parchment-300">
                  Antiques • Brass Heirlooms • Mechanical Horology • Heritage Curios • Physical Store in Mylapore
                </p>
              </div>

              <a
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-all"
              >
                Open Instagram Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CUSTOMER TRUST & VISIT CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFE6D7] border border-antique-gold/40 text-heritage-espresso text-xs font-semibold">
          <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
          <span>{STORE_INFO.rating} Stars from {STORE_INFO.reviewCount} Verified Google Reviews</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl text-heritage-espresso font-normal">
          Experience Arun Collections in Person
        </h2>

        <p className="text-sm text-heritage-muted max-w-xl mx-auto font-light leading-relaxed">
          Walk into our showroom at 94/3 Adam Street, Mylapore. Take your time exploring the brass, clocks, traditional idols, and timeless curiosities.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/visit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-heritage-espresso text-parchment-100 text-xs font-semibold hover:bg-antique-brassDeep transition-all shadow-md"
          >
            <MapPin className="w-4 h-4 text-antique-goldLight" />
            <span>Store Location &amp; Directions</span>
          </Link>
          <a
            href={`tel:${STORE_INFO.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-antique-gold bg-[#FAF7F2] text-heritage-espresso text-xs font-semibold hover:bg-[#F3ECE0] transition-all"
          >
            <span>Call {STORE_INFO.phoneDisplay}</span>
          </a>
        </div>
      </section>
    </div>
  );
}
