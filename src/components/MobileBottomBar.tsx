import React from "react";
import { Phone, MessageCircle, MapPin, Instagram } from "lucide-react";
import { STORE_INFO } from "@/data/collectionsData";

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#E2D5BC] px-3 py-2 shadow-2xl">
      <div className="grid grid-cols-4 gap-1.5 text-center">
        {/* Call */}
        <a
          href={`tel:${STORE_INFO.phone}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-heritage-espresso active:bg-[#EFE6D7]"
        >
          <Phone className="w-5 h-5 text-antique-brass mb-0.5" />
          <span className="text-[10px] font-semibold tracking-tight">Call Store</span>
        </a>

        {/* WhatsApp */}
        <a
          href={STORE_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-emerald-800 active:bg-[#EFE6D7]"
        >
          <MessageCircle className="w-5 h-5 text-emerald-600 mb-0.5" />
          <span className="text-[10px] font-semibold tracking-tight">WhatsApp</span>
        </a>

        {/* Directions */}
        <a
          href={STORE_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-heritage-espresso active:bg-[#EFE6D7]"
        >
          <MapPin className="w-5 h-5 text-temple-red mb-0.5" />
          <span className="text-[10px] font-semibold tracking-tight">Directions</span>
        </a>

        {/* Instagram */}
        <a
          href={STORE_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-pink-900 active:bg-[#EFE6D7]"
        >
          <Instagram className="w-5 h-5 text-pink-600 mb-0.5" />
          <span className="text-[10px] font-semibold tracking-tight">Instagram</span>
        </a>
      </div>
    </div>
  );
}
