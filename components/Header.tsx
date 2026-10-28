"use client";

import React, { useEffect, useState } from "react";
import { Phone, MessageCircle } from "lucide-react";

export default function Header() {
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    const now = new Date();
    const currentMins = now.getHours() * 60 + now.getMinutes();
    const openTime = 9 * 60 + 30; // 9:30 AM
    const closeTime = 20 * 60 + 30; // 8:30 PM
    setIsOpenNow(currentMins >= openTime && currentMins < closeTime);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#0f1523]/85 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-700 to-sky-600 flex items-center justify-center font-extrabold text-xl text-white shadow-lg shadow-sky-600/20 border border-white/15">
            S
          </div>
          <div>
            <span className="font-extrabold tracking-tight text-lg block leading-tight text-white">
              SANGWAN MOBILE CARE
            </span>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span>Charkhi Dadri</span>
              <span className="bg-emerald-500/15 text-emerald-400 font-semibold px-1.5 py-0.5 rounded-full text-[11px]">
                Est. 2017
              </span>
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#estimator" className="hover:text-white transition-colors">
            Cost Calculator
          </a>
          <a href="#services" className="hover:text-white transition-colors">
            Services
          </a>
          <a href="#deals" className="hover:text-white transition-colors">
            Phone Deals
          </a>
          <a href="#why-us" className="hover:text-white transition-colors">
            Why Sangwan
          </a>
          <a href="#reviews" className="hover:text-white transition-colors">
            Reviews
          </a>
          <a href="#location" className="hover:text-white transition-colors">
            Location
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:8222918520"
            className="hidden sm:inline-flex items-center gap-2 bg-[#151d30] border border-white/15 text-slate-100 hover:border-blue-500 hover:bg-[#1d2740] px-4 py-2 rounded-xl text-sm font-semibold transition-all"
          >
            <Phone className="w-4 h-4 text-blue-400" />
            <span>82229 18520</span>
          </a>

          <a
            href="https://wa.me/918222918520?text=Hello%20Sangwan%20Mobile%20Care,%20I%20have%20an%20enquiry%20regarding%20mobile%20repair%20and%20deals."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#20ba59] text-black font-bold px-4 py-2 rounded-xl text-sm transition-transform hover:-translate-y-0.5 shadow-lg shadow-emerald-500/20"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
