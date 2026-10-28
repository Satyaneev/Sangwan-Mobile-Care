"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#0a0d14]/95 backdrop-blur-md border-t border-white/10 px-4 py-2.5 grid grid-cols-2 gap-3 shadow-2xl">
      <a
        href="tel:8222918520"
        className="flex items-center justify-center gap-2 bg-[#151d30] border border-white/15 text-white py-3 rounded-xl font-bold text-sm"
      >
        <Phone className="w-4 h-4 text-blue-400" />
        <span>Call Now</span>
      </a>
      <a
        href="https://wa.me/918222918520?text=Hello%20Sangwan%20Mobile%20Care,%20I%20need%20assistance%20with%20phone%20repair%20/%20deals."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-[#25d366] text-black py-3 rounded-xl font-extrabold text-sm shadow-lg shadow-emerald-500/20"
      >
        <MessageCircle className="w-4 h-4 fill-black" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
