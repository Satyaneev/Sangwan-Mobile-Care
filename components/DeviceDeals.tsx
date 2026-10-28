"use client";

import React, { useState } from "react";
import { MessageCircle, Check } from "lucide-react";

type Category = "all" | "flagship" | "preowned";

interface DeviceItem {
  id: string;
  name: string;
  specs: string;
  badge: string;
  category: "flagship" | "preowned";
  points: string[];
  priceLabel: string;
  priceValue: string;
}

const devices: DeviceItem[] = [
  {
    id: "ip16promax",
    name: "iPhone 16 Pro Max",
    specs: "Desert Titanium / Natural • 256GB / 512GB",
    badge: "Brand New Sealed",
    category: "flagship",
    points: [
      "1 Year Apple Official Warranty",
      "GST Bill & Original Sealed Packaging",
      "Old Phone Exchange Available",
    ],
    priceLabel: "Best Dadri Deal",
    priceValue: "Call for Best Rate",
  },
  {
    id: "ip15pro",
    name: "iPhone 15 Pro",
    specs: "Blue Titanium • 128GB / 256GB",
    badge: "Grade A+ Certified",
    category: "preowned",
    points: [
      "94%+ Battery Health (Original Apple)",
      "Scratchless Condition with Box & Bill",
      "3 Months Shop Testing Warranty",
    ],
    priceLabel: "Certified Price",
    priceValue: "Save ₹35,000+",
  },
  {
    id: "zfold",
    name: "Samsung Galaxy Z Fold Series",
    specs: "Phantom Black / Silver • 12GB RAM / 256GB",
    badge: "Specialist Stock",
    category: "flagship",
    points: [
      "Dual Dynamic AMOLED 120Hz Screens",
      "Full Samsung India Warranty",
      "Free Armor Case & Glass Fitment",
    ],
    priceLabel: "Best Offer Price",
    priceValue: "Special Discount",
  },
  {
    id: "s24ultra",
    name: "Galaxy S24 Ultra 5G",
    specs: "Titanium Gray • 12GB / 256GB with S-Pen",
    badge: "Like-New Mint",
    category: "preowned",
    points: [
      "200MP Camera with 100x Space Zoom",
      "Remaining Company Warranty active",
      "100% Genuine Indian Unit with Box",
    ],
    priceLabel: "Verified Deal",
    priceValue: "Unbeatable Price",
  },
  {
    id: "ip13",
    name: "iPhone 13 / 14",
    specs: "Midnight / Starlight • 128GB",
    badge: "Bestseller",
    category: "preowned",
    points: [
      "Pristine condition, zero dents or drops",
      "FaceID & TrueTone 100% Functional",
      "Verified IMEI check on Apple site",
    ],
    priceLabel: "Starting From",
    priceValue: "₹32,999/-",
  },
  {
    id: "op12r",
    name: "OnePlus 12R 5G",
    specs: "Iron Gray / Cool Blue • 8GB/16GB RAM",
    badge: "New Sealed",
    category: "flagship",
    points: [
      "Snapdragon 8 Gen 2 Flagship Chipset",
      "100W SUPERVOOC Fast Charger in-box",
      "1 Year Official Brand Warranty",
    ],
    priceLabel: "Best Local Deal",
    priceValue: "Spot Discount",
  },
];

export default function DeviceDeals() {
  const [filter, setFilter] = useState<Category>("all");

  const filteredDevices =
    filter === "all" ? devices : devices.filter((d) => d.category === filter);

  return (
    <div>
      <div className="flex justify-center gap-2 mb-10">
        <button
          type="button"
          onClick={() => setFilter("all")}
          className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all ${
            filter === "all"
              ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/25"
              : "bg-[#151d30] border-white/10 text-slate-400 hover:text-white"
          }`}
        >
          All Devices
        </button>
        <button
          type="button"
          onClick={() => setFilter("flagship")}
          className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all ${
            filter === "flagship"
              ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/25"
              : "bg-[#151d30] border-white/10 text-slate-400 hover:text-white"
          }`}
        >
          New Flagships
        </button>
        <button
          type="button"
          onClick={() => setFilter("preowned")}
          className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all ${
            filter === "preowned"
              ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/25"
              : "bg-[#151d30] border-white/10 text-slate-400 hover:text-white"
          }`}
        >
          Certified Pre-Owned
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDevices.map((d) => {
          const isNew = d.category === "flagship";
          const waUrl = `https://wa.me/918222918520?text=${encodeURIComponent(
            `Hi Sangwan Mobile Care, I am interested in inquiring about ${d.name} (${d.specs}).`
          )}`;

          return (
            <div
              key={d.id}
              className="bg-[#151d30] border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all hover:-translate-y-1 shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full border ${
                      isNew
                        ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-400"
                        : "bg-amber-500/15 border-amber-500/30 text-amber-300"
                    }`}
                  >
                    {d.badge}
                  </span>
                  <span className="text-xs text-emerald-400 flex items-center gap-1.5 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    In Shop
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-white mb-1">{d.name}</h3>
                <p className="text-xs text-slate-400 mb-5">{d.specs}</p>

                <ul className="space-y-2 mb-6">
                  {d.points.map((pt, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-slate-300 flex items-center gap-2"
                    >
                      <Check className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-white/10 pt-4 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                    {d.priceLabel}
                  </span>
                  <span className="text-base font-bold text-white">
                    {d.priceValue}
                  </span>
                </div>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-emerald-500/15 hover:bg-emerald-500 border border-emerald-500/30 text-emerald-400 hover:text-black font-bold px-3.5 py-2 rounded-xl text-xs transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Enquire</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
