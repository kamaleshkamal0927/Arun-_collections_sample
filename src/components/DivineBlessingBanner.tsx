import React from "react";
import MuruganVel from "./MuruganVel";

interface DivineBlessingBannerProps {
  compact?: boolean;
}

export default function DivineBlessingBanner({ compact = false }: DivineBlessingBannerProps) {
  if (compact) {
    return (
      <div className="bg-gradient-to-r from-[#2A1D13] via-[#3D2919] to-[#2A1D13] text-parchment-100 py-3 px-4 border-y border-antique-gold/30">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-3 text-center">
          <MuruganVel size={22} withAura={false} withVibhuti={true} />
          <span className="text-xs sm:text-sm font-serif tracking-wider text-[#F7E5B5]">
            ஓம் • வெற்றிவேல் முருகன் துணை • Divine Heritage &amp; Positive Energy in Every Piece
          </span>
          <MuruganVel size={22} withAura={false} withVibhuti={true} />
        </div>
      </div>
    );
  }

  return (
    <section className="relative py-12 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-[#2A1D13] via-[#352315] to-[#24170E] text-parchment-100 border-y-2 border-antique-gold/40 shadow-inner">
      {/* Background Sacred Geometric & Radiant Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-antique-gold/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4">
        {/* Sacred Murugan Vel with Radiant Aura */}
        <div className="flex justify-center mb-2">
          <div className="p-3 rounded-full bg-black/40 border border-antique-gold/50 shadow-divine">
            <MuruganVel size={52} withAura={true} withVibhuti={true} />
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-antique-gold/15 border border-antique-gold/30 text-antique-goldLight text-xs tracking-widest uppercase font-medium">
          <span>மயிலாப்பூர் தொன்மை</span>
          <span>•</span>
          <span>Sacred Heritage of Mylapore</span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#FFF8E7] font-normal tracking-wide">
          Divine Aura &amp; Timeless Crafts
        </h3>

        <p className="text-sm sm:text-base text-parchment-200/85 max-w-2xl mx-auto leading-relaxed font-light">
          Nestled in holy Mylapore near century-old temple precincts, every heirloom, deepam, sacred bronze, and vintage collectible at Arun Collections carries the warmth, soul, and positive vibrations of generations gone by.
        </p>

        <div className="pt-2 flex items-center justify-center gap-6 text-xs text-antique-goldLight tracking-wider">
          <span>✦ சுபமஸ்து</span>
          <span>✦ வெற்றிவேல்</span>
          <span>✦ கலைகளின் மேன்மை</span>
        </div>
      </div>
    </section>
  );
}
