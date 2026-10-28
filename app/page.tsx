import React from "react";
import Header from "@/components/Header";
import Estimator from "@/components/Estimator";
import DeviceDeals from "@/components/DeviceDeals";
import FaqSection from "@/components/FaqSection";
import MobileStickyBar from "@/components/MobileStickyBar";
import {
  ShieldCheck,
  Clock,
  Lock,
  Layers,
  Wrench,
  Smartphone,
  Cpu,
  BatteryCharging,
  Droplets,
  Volume2,
  MapPin,
  Instagram,
  Star,
  ExternalLink,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-14 sm:py-20 border-b border-white/10">
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2.5 mb-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/15 border border-emerald-500/30 rounded-full text-emerald-400 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-indicator" />
                  <span>Open Everyday 9:30 AM – 8:30 PM</span>
                </div>
                <a
                  href="https://www.instagram.com/sangwan_mobile_care82/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-pink-500/10 border border-pink-500/30 rounded-full text-pink-300 text-xs font-semibold hover:bg-pink-500/20 transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-400" />
                  <span>11.5K+ Followers • @sangwan_mobile_care82</span>
                </a>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-5 text-white">
                Charkhi Dadri&apos;s Most Trusted{" "}
                <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                  iPhone & Smartphone
                </span>{" "}
                Care.
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
                From 30-minute express screen & folder replacements to complex
                motherboard chip-level micro-soldering. Genuine parts, instant
                warranty, and best local prices on brand new & certified pre-owned
                smartphones.
              </p>

              <div className="flex flex-col sm:flex-row gap-3.5 mb-10">
                <a
                  href="#estimator"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 text-white font-bold px-6 py-3.5 rounded-xl text-base shadow-lg shadow-blue-600/30 transition-transform hover:-translate-y-0.5"
                >
                  <Wrench className="w-4 h-4" />
                  <span>Estimate Repair Cost</span>
                </a>
                <a
                  href="https://wa.me/918222918520?text=Hi%20Sangwan%20Mobile%20Care,%20I%20want%20to%20know%20more%20about%20phone%20repair%20and%20deals."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#151d30] hover:bg-[#1d2740] border border-white/15 text-slate-100 font-semibold px-6 py-3.5 rounded-xl text-base transition-colors"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white">7+ Years</div>
                  <div className="text-xs text-slate-400">Serving Dadri Since 2017</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white">35,000+</div>
                  <div className="text-xs text-slate-400">Repairs Completed</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white">4.2 ★</div>
                  <div className="text-xs text-slate-400">Google & Justdial Reviews</div>
                </div>
              </div>
            </div>

            {/* Hero Visual Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#151d30] border border-white/10 rounded-2xl p-6 shadow-2xl relative">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <span className="font-extrabold text-white text-base">
                    Service Standards
                  </span>
                  <span className="bg-blue-500/15 text-blue-400 text-xs font-bold px-2.5 py-1 rounded-full border border-blue-500/30">
                    100% Genuine Lab
                  </span>
                </div>

                <div className="space-y-3.5 mb-5">
                  <div className="flex items-start gap-3 p-3 bg-[#0f1523] rounded-xl border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/15 text-blue-400 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">
                        30-Min Fast-Track Repair
                      </div>
                      <div className="text-xs text-slate-400">
                        Folder & battery replacement done right across the counter.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-[#0f1523] rounded-xl border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">
                        Up to 6 Months Warranty
                      </div>
                      <div className="text-xs text-slate-400">
                        Warrantied screen replacement with touch-defect replacement.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-[#0f1523] rounded-xl border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0">
                      <Lock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">
                        Zero Data Loss Guarantee
                      </div>
                      <div className="text-xs text-slate-400">
                        Your photos, WhatsApp chats, and sensitive banking data remain untouched.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-[#0f1523] rounded-xl border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/15 text-sky-400 flex items-center justify-center shrink-0">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">
                        OCA Vacuum Lamination Lab
                      </div>
                      <div className="text-xs text-slate-400">
                        Replace broken glass without sacrificing original display panels.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 text-xs text-emerald-300 flex items-center gap-2">
                  <MapPin className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span>Opp. Bus Stand, Gali No 1, Puran Market, Charkhi Dadri</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Repair Cost Estimator */}
      <section id="estimator" className="py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase font-extrabold tracking-wider text-cyan-400 block mb-2">
              Instant Quotation Engine
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white mb-3">
              Check Repair Cost & Turnaround Time
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              Select your brand, model series, and issue to get an accurate estimate
              with warranty coverage. Dispatch your booking directly to WhatsApp.
            </p>
          </div>

          <Estimator />
        </div>
      </section>

      {/* Repair Services Suite */}
      <section id="services" className="py-20 bg-[#0f1523] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase font-extrabold tracking-wider text-cyan-400 block mb-2">
              Professional Workshop
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white mb-3">
              Specialized Smartphone Care
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              Equipped with German thermal inspection cameras, micro-soldering
              microscopes, and dust-free OCA laminators in Charkhi Dadri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#151d30] border border-white/10 rounded-2xl p-6 transition-all hover:border-white/20 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center mb-5">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Display & Folder Replacement
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                Available for Apple iPhone, Samsung Galaxy, OnePlus, Vivo, Oppo &
                Xiaomi. High brightness, original refresh rates, zero ghost touches.
              </p>
              <div className="flex flex-wrap gap-1.5 text-xs">
                <span className="bg-[#0f1523] px-2.5 py-1 rounded text-slate-300">
                  OLED / AMOLED
                </span>
                <span className="bg-[#0f1523] px-2.5 py-1 rounded text-slate-300">
                  6 Mo Warranty
                </span>
                <span className="bg-[#0f1523] px-2.5 py-1 rounded text-slate-300">
                  30 Min Fitting
                </span>
              </div>
            </div>

            <div className="bg-[#151d30] border border-white/10 rounded-2xl p-6 transition-all hover:border-white/20 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-sky-500/15 text-sky-400 flex items-center justify-center mb-5">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                OCA Glass Lamination
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                If your screen displays clear picture and touch functions normally,
                we replace only the broken top glass, saving you up to 65% of screen cost.
              </p>
              <div className="flex flex-wrap gap-1.5 text-xs">
                <span className="bg-[#0f1523] px-2.5 py-1 rounded text-slate-300">
                  Preserve Factory Display
                </span>
                <span className="bg-[#0f1523] px-2.5 py-1 rounded text-slate-300">
                  Save 60%+
                </span>
              </div>
            </div>

            <div className="bg-[#151d30] border border-white/10 rounded-2xl p-6 transition-all hover:border-white/20 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center mb-5">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Motherboard Chip-Level Repair
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                Our micro-soldering bench fixes problems declared unrepairable: CPU
                reballing, audio codec IC, baseband network IC, and Face ID sensors.
              </p>
              <div className="flex flex-wrap gap-1.5 text-xs">
                <span className="bg-[#0f1523] px-2.5 py-1 rounded text-slate-300">
                  Dead Phone Restoration
                </span>
                <span className="bg-[#0f1523] px-2.5 py-1 rounded text-slate-300">
                  Micro-soldering
                </span>
              </div>
            </div>

            <div className="bg-[#151d30] border border-white/10 rounded-2xl p-6 transition-all hover:border-white/20 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center mb-5">
                <BatteryCharging className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Certified Battery Restoration
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                Solve rapid battery drain, sudden shutdown, and overheating. We install
                100% health fresh cycle batteries with circuit overload protection.
              </p>
              <div className="flex flex-wrap gap-1.5 text-xs">
                <span className="bg-[#0f1523] px-2.5 py-1 rounded text-slate-300">
                  100% Capacity
                </span>
                <span className="bg-[#0f1523] px-2.5 py-1 rounded text-slate-300">
                  Replacement Warranty
                </span>
              </div>
            </div>

            <div className="bg-[#151d30] border border-white/10 rounded-2xl p-6 transition-all hover:border-white/20 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center mb-5">
                <Droplets className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Liquid & Water Damage Care
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                Accidental spill or dip in water? We perform ultrasonic chemical
                de-oxidation and motherboard short-circuit trace diagnosis.
              </p>
              <div className="flex flex-wrap gap-1.5 text-xs">
                <span className="bg-[#0f1523] px-2.5 py-1 rounded text-slate-300">
                  Ultrasonic Bath
                </span>
                <span className="bg-[#0f1523] px-2.5 py-1 rounded text-slate-300">
                  Data Recovery First
                </span>
              </div>
            </div>

            <div className="bg-[#151d30] border border-white/10 rounded-2xl p-6 transition-all hover:border-white/20 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center mb-5">
                <Volume2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Audio, Mic & Charging Port
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                Fix inaudible earpieces, muffled microphone during calls, crackling
                speakers, or cables that fail to charge steadily.
              </p>
              <div className="flex flex-wrap gap-1.5 text-xs">
                <span className="bg-[#0f1523] px-2.5 py-1 rounded text-slate-300">
                  20-Min Bench Job
                </span>
                <span className="bg-[#0f1523] px-2.5 py-1 rounded text-slate-300">
                  OEM Connectors
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flagships & Pre-Owned Stock Deals */}
      <section id="deals" className="py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase font-extrabold tracking-wider text-cyan-400 block mb-2">
              Smart Buying & Exchange
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white mb-3">
              Flagship Stock & Pre-Owned Deals
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              Verified iPhones, Samsung Galaxy Z Fold series, and flagship Androids
              with complete bill, original box, and testing warranty in Dadri.
            </p>
          </div>

          <DeviceDeals />
        </div>
      </section>

      {/* Why Sangwan Mobile Care */}
      <section id="why-us" className="py-20 bg-[#0f1523] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase font-extrabold tracking-wider text-cyan-400 block mb-2">
              The Sangwan Standard
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white mb-3">
              Why Dadri & Surrounding Regions Choose Us
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              Combining master technician expertise, specialized micro-soldering
              infrastructure, and honest upfront pricing without hidden charges.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-[#151d30] border border-white/10 rounded-2xl p-6">
              <div className="w-11 h-11 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                7+ Years of Trust
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Established in 2017 in Puran Market. Over 35,000 satisfied mobile
                repairs across Charkhi Dadri, Satnali, and Bhiwani.
              </p>
            </div>

            <div className="bg-[#151d30] border border-white/10 rounded-2xl p-6">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                30-Min Counter Turnaround
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                No sending your device to Delhi or waiting for days. Watch your screen
                or battery repaired right across the counter.
              </p>
            </div>

            <div className="bg-[#151d30] border border-white/10 rounded-2xl p-6">
              <div className="w-11 h-11 rounded-xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Guaranteed Data Privacy
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Your photos, chats, contacts, and banking apps are never accessed or
                wiped. We strictly respect your confidentiality.
              </p>
            </div>

            <div className="bg-[#151d30] border border-white/10 rounded-2xl p-6">
              <div className="w-11 h-11 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center mb-4">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Written Testing Warranty
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Clear warranty on folders and batteries. Any manufacturing defect
                is handled with immediate replacement.
              </p>
            </div>
          </div>

          {/* Instagram Community Banner */}
          <div className="bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-amber-900/20 border border-pink-500/30 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-pink-500/30">
                <Instagram className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-white">
                  Join 11,500+ Community on Instagram
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Watch daily smartphone deliveries, repair tutorials, and flash deals on{" "}
                  <strong>@sangwan_mobile_care82</strong>.
                </p>
              </div>
            </div>
            <a
              href="https://www.instagram.com/sangwan_mobile_care82/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-lg shadow-pink-600/30 whitespace-nowrap"
            >
              <span>View Reels & Deals</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section id="reviews" className="py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase font-extrabold tracking-wider text-cyan-400 block mb-2">
              Verified Feedback
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white mb-3">
              Rated 4.2★ Across Google & Justdial
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              Read real customer experiences from Charkhi Dadri and nearby Haryana
              regions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#151d30] border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#1d2740] border border-white/15 text-blue-400 font-bold flex items-center justify-center text-sm">
                      VS
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Vikas Sharma</div>
                      <div className="text-xs text-slate-400">
                        Charkhi Dadri • Google Review
                      </div>
                    </div>
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  &ldquo;Got my iPhone 13 screen replaced in just 35 minutes. Other
                  shops were asking for 2 days. The touch response is 100% genuine and
                  colors are crystal clear. Very honest pricing by Sanket bhai.&rdquo;
                </p>
              </div>
              <span className="text-xs font-semibold text-blue-400">
                ✓ iPhone Screen Replacement
              </span>
            </div>

            <div className="bg-[#151d30] border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#1d2740] border border-white/15 text-blue-400 font-bold flex items-center justify-center text-sm">
                      RK
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Rahul Kumar</div>
                      <div className="text-xs text-slate-400">
                        Puran Market • Justdial Review
                      </div>
                    </div>
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  &ldquo;Best shop in Dadri for Samsung and OnePlus repairs. My
                  Samsung phone was dropped in water and completely dead. They restored
                  it with full data intact. Highly recommended!&rdquo;
                </p>
              </div>
              <span className="text-xs font-semibold text-blue-400">
                ✓ Water Damage & Data Recovery
              </span>
            </div>

            <div className="bg-[#151d30] border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#1d2740] border border-white/15 text-blue-400 font-bold flex items-center justify-center text-sm">
                      AS
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Amit Sheoran</div>
                      <div className="text-xs text-slate-400">
                        Satnali / Dadri • Customer
                      </div>
                    </div>
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  &ldquo;Purchased a certified pre-owned iPhone 14 from Sangwan Mobile
                  Care. Got original bill, 95% battery health, and zero scratches. Way
                  cheaper than showroom retail with full testing warranty.&rdquo;
                </p>
              </div>
              <span className="text-xs font-semibold text-blue-400">
                ✓ Pre-Owned iPhone Purchase
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section id="location" className="py-20 bg-[#0f1523] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-6 bg-[#151d30] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-wider text-cyan-400 block mb-2">
                  Visit Our Workshop
                </span>
                <h3 className="text-2xl font-black text-white mb-6">
                  Sangwan Mobile Care
                </h3>

                <div className="space-y-5 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white mb-1">
                        Main Workshop & Store
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        Gali No 1, Puran Market, Opposite Bus Stand,
                        <br />
                        Near Gramin Bank, Charkhi Dadri, Haryana - 127306
                      </p>
                      <p className="text-xs text-blue-400 mt-1">
                        Also serving: Satnali & Mahendergarh branch
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white mb-1">
                        Working Hours
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300">
                        Open Everyday: 9:30 AM – 8:30 PM (Mon – Sun)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center shrink-0">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white mb-1">
                        Direct Lines
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300">
                        Primary Booking:{" "}
                        <a href="tel:8222918520" className="text-blue-400 underline font-semibold">
                          82229 18520
                        </a>
                      </p>
                      <p className="text-xs sm:text-sm text-slate-300">
                        iPhone Support:{" "}
                        <a href="tel:8398860104" className="text-blue-400 underline font-semibold">
                          83988 60104
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.google.com/maps/search/Sangwan+Mobile+Care+Puran+Market+Charkhi+Dadri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-5 py-3 rounded-xl text-sm transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#151d30] border border-white/10 rounded-2xl overflow-hidden min-h-[360px] flex">
              <iframe
                className="w-full h-full min-h-[360px] border-0"
                title="Sangwan Mobile Care Charkhi Dadri Location Map"
                src="https://maps.google.com/maps?q=Puran+Market,+Charkhi+Dadri,+Haryana+127306&t=&z=15&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase font-extrabold tracking-wider text-cyan-400 block mb-2">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              Clear answers so you feel 100% confident trusting us with your
              device.
            </p>
          </div>

          <FaqSection />
        </div>
      </section>

      {/* Site Footer */}
      <footer className="bg-[#07090f] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="text-lg font-black text-white mb-3">
                SANGWAN MOBILE CARE
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                Charkhi Dadri&apos;s trusted destination for smartphone repairs,
                original folder replacements, motherboard micro-soldering, and
                certified pre-owned flagship devices. Established 2017.
              </p>
              <a
                href="https://www.instagram.com/sangwan_mobile_care82/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-pink-400 font-semibold flex items-center gap-1.5"
              >
                <Instagram className="w-4 h-4" />
                <span>@sangwan_mobile_care82</span>
              </a>
            </div>

            <div>
              <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
                Services
              </h5>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    iPhone Screen Repair
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Samsung AMOLED Folders
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    OCA Glass Replacement
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Motherboard IC Fix
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Original Battery Change
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
                Brands Supported
              </h5>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                <li>
                  <a href="#estimator" className="hover:text-white transition-colors">
                    Apple iPhone
                  </a>
                </li>
                <li>
                  <a href="#estimator" className="hover:text-white transition-colors">
                    Samsung Galaxy
                  </a>
                </li>
                <li>
                  <a href="#estimator" className="hover:text-white transition-colors">
                    OnePlus
                  </a>
                </li>
                <li>
                  <a href="#estimator" className="hover:text-white transition-colors">
                    Vivo & iQOO
                  </a>
                </li>
                <li>
                  <a href="#estimator" className="hover:text-white transition-colors">
                    Oppo & Realme
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
                Shop Contacts
              </h5>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                <li>
                  <a href="tel:8222918520" className="hover:text-white transition-colors">
                    📞 82229 18520
                  </a>
                </li>
                <li>
                  <a href="tel:8398860104" className="hover:text-white transition-colors">
                    📱 83988 60104
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/918222918520"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    💬 WhatsApp Direct
                  </a>
                </li>
                <li className="text-slate-500 text-xs">
                  Opp. Bus Stand, Puran Market, Charkhi Dadri
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>&copy; 2017 – 2026 Sangwan Mobile Care. All Rights Reserved.</div>
            <div>Gali No 1, Puran Market, Charkhi Dadri, Haryana 127306</div>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Sticky Bar */}
      <MobileStickyBar />
    </main>
  );
}
