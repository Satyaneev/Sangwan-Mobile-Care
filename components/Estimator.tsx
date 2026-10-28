"use client";

import React, { useState } from "react";
import { MessageCircle, Clock, ShieldCheck, Zap, ChevronDown } from "lucide-react";

type ModelTier = "budget" | "standard_mid" | "flagship_mid" | "flagship_high" | "flagship_ultra";

interface ModelItem {
  id: string;
  name: string;
  tier: ModelTier;
}

interface BrandConfig {
  name: string;
  models: ModelItem[];
}

interface IssueConfig {
  name: string;
  desc: string;
  duration: string;
  warranty: string;
  priceMap: Record<ModelTier, string>;
}

const repairData: {
  brands: Record<string, BrandConfig>;
  issues: Record<string, IssueConfig>;
} = {
  brands: {
    apple: {
      name: "Apple iPhone",
      models: [
        { id: "ip16pro", name: "iPhone 16 / 16 Pro / Pro Max", tier: "flagship_high" },
        { id: "ip15pro", name: "iPhone 15 / 15 Plus / 15 Pro", tier: "flagship_high" },
        { id: "ip14", name: "iPhone 14 / 14 Plus / 14 Pro", tier: "flagship_mid" },
        { id: "ip13", name: "iPhone 13 / 13 Pro / 13 Mini", tier: "flagship_mid" },
        { id: "ip12", name: "iPhone 12 / 12 Pro / 12 Mini", tier: "flagship_mid" },
        { id: "ip11", name: "iPhone 11 / 11 Pro / XR / XS", tier: "standard_mid" },
        { id: "ipse", name: "iPhone X / 8 / 7 / SE Series", tier: "budget" },
      ],
    },
    samsung: {
      name: "Samsung",
      models: [
        { id: "samfold", name: "Galaxy Z Fold / Z Flip Series", tier: "flagship_ultra" },
        { id: "sams24", name: "Galaxy S24 / S23 / S22 Ultra", tier: "flagship_high" },
        { id: "samsfe", name: "Galaxy S21 / S20 FE / Note Series", tier: "flagship_mid" },
        { id: "sama", name: "Galaxy A Series (A55, A35, A15, etc.)", tier: "standard_mid" },
        { id: "samm", name: "Galaxy M / F Series", tier: "budget" },
      ],
    },
    oneplus: {
      name: "OnePlus",
      models: [
        { id: "op12", name: "OnePlus 12 / 12R / Open", tier: "flagship_high" },
        { id: "op11", name: "OnePlus 11 / 11R / 10 Pro", tier: "flagship_mid" },
        { id: "op9", name: "OnePlus 9 / 8 / 7 Pro Series", tier: "standard_mid" },
        { id: "opnord", name: "Nord CE 4 / Nord 3 / CE Series", tier: "budget" },
      ],
    },
    vivo: {
      name: "Vivo / iQOO",
      models: [
        { id: "vivox", name: "Vivo X100 / X90 Series / Fold", tier: "flagship_high" },
        { id: "vivov", name: "Vivo V40 / V30 / V29 Pro Series", tier: "standard_mid" },
        { id: "iqoo", name: "iQOO 12 / Neo 9 / Neo 7 Pro", tier: "standard_mid" },
        { id: "vivoy", name: "Vivo T & Y Series (Y200, T3, etc.)", tier: "budget" },
      ],
    },
    oppo: {
      name: "Oppo",
      models: [
        { id: "oppofind", name: "Find X Series / Find N Fold", tier: "flagship_high" },
        { id: "opporeno", name: "Reno 12 / Reno 11 / Reno 10 Series", tier: "standard_mid" },
        { id: "oppoa", name: "Oppo A & F Series (A79, F25 Pro)", tier: "budget" },
      ],
    },
    realme: {
      name: "Realme",
      models: [
        { id: "realmegt", name: "Realme GT 6 / GT 5 Pro Series", tier: "flagship_mid" },
        { id: "realmenum", name: "Realme 13 / 12 / 11 Pro+ 5G", tier: "standard_mid" },
        { id: "realmec", name: "Realme Narzo / C Series", tier: "budget" },
      ],
    },
    xiaomi: {
      name: "Xiaomi / Redmi",
      models: [
        { id: "mi14", name: "Xiaomi 14 / 13 Pro Ultra Series", tier: "flagship_high" },
        { id: "redminote", name: "Redmi Note 13 / 12 / 11 Pro+", tier: "standard_mid" },
        { id: "pocop", name: "POCO X / F Series (F6, X6 Pro)", tier: "standard_mid" },
        { id: "redmib", name: "Redmi 13C / A Series / Budget", tier: "budget" },
      ],
    },
  },
  issues: {
    folder: {
      name: "Screen / Folder Replacement",
      desc: "Full Display assembly with original touch response & high refresh rate.",
      duration: "30 - 45 mins",
      warranty: "Up to 6 Months Warranty",
      priceMap: {
        budget: "₹1,299 - ₹2,199",
        standard_mid: "₹2,199 - ₹4,499",
        flagship_mid: "₹3,999 - ₹7,999",
        flagship_high: "₹6,499 - ₹14,999",
        flagship_ultra: "₹11,999 - ₹22,999",
      },
    },
    glass: {
      name: "Glass Only Replacement (OCA)",
      desc: "Retain 100% factory original display, change only broken outer glass.",
      duration: "45 - 60 mins",
      warranty: "Original Display Preserved",
      priceMap: {
        budget: "₹799 - ₹1,299",
        standard_mid: "₹1,299 - ₹2,199",
        flagship_mid: "₹1,999 - ₹3,499",
        flagship_high: "₹3,499 - ₹6,499",
        flagship_ultra: "₹5,499 - ₹9,999",
      },
    },
    battery: {
      name: "Original Battery Replacement",
      desc: "Grade-A 100% capacity cell, fix heating and quick discharge.",
      duration: "25 - 35 mins",
      warranty: "3 to 6 Months Warranty",
      priceMap: {
        budget: "₹799 - ₹1,199",
        standard_mid: "₹1,199 - ₹1,699",
        flagship_mid: "₹1,499 - ₹2,299",
        flagship_high: "₹2,199 - ₹3,499",
        flagship_ultra: "₹2,999 - ₹4,499",
      },
    },
    board: {
      name: "Motherboard & IC Repair",
      desc: "Fix dead phone, audio IC, network search issue, power IC, restart loop.",
      duration: "60 - 90 mins",
      warranty: "Micro-soldering Lab Bench",
      priceMap: {
        budget: "₹899 - ₹1,799",
        standard_mid: "₹1,499 - ₹2,499",
        flagship_mid: "₹2,499 - ₹4,499",
        flagship_high: "₹3,499 - ₹6,999",
        flagship_ultra: "₹4,999 - ₹8,999",
      },
    },
    charging: {
      name: "Charging Jack / Mic / Speaker",
      desc: "Fix slow charging, loose connector, mic voice cut, or distorted speaker.",
      duration: "20 - 30 mins",
      warranty: "Instant Replacement",
      priceMap: {
        budget: "₹399 - ₹699",
        standard_mid: "₹599 - ₹999",
        flagship_mid: "₹899 - ₹1,499",
        flagship_high: "₹1,299 - ₹2,199",
        flagship_ultra: "₹1,699 - ₹2,699",
      },
    },
    water: {
      name: "Water Damage Ultrasonic Care",
      desc: "Complete motherboard chemical de-oxidation and short trace repair.",
      duration: "1 - 2 hours",
      warranty: "Data Recovery Priority",
      priceMap: {
        budget: "₹599 - ₹1,199",
        standard_mid: "₹899 - ₹1,699",
        flagship_mid: "₹1,499 - ₹2,799",
        flagship_high: "₹2,499 - ₹4,499",
        flagship_ultra: "₹3,499 - ₹5,999",
      },
    },
  },
};

export default function Estimator() {
  const [selectedBrand, setSelectedBrand] = useState("apple");
  const [selectedModelId, setSelectedModelId] = useState(
    repairData.brands["apple"].models[1].id // iPhone 15 Pro default
  );
  const [selectedIssue, setSelectedIssue] = useState("folder");

  const brandObj = repairData.brands[selectedBrand];
  const modelObj =
    brandObj.models.find((m) => m.id === selectedModelId) || brandObj.models[0];
  const issueObj = repairData.issues[selectedIssue];

  const priceRange = issueObj.priceMap[modelObj.tier] || "₹1,499 - ₹3,499";

  const waMessage = `Hello Sangwan Mobile Care, I want to book a repair in Charkhi Dadri:
📱 Device: ${brandObj.name} (${modelObj.name})
🛠️ Service Needed: ${issueObj.name}
💰 Estimated Range: ${priceRange}
Please confirm parts availability and appointment time.`;

  const waLink = `https://wa.me/918222918520?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="bg-[#151d30] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl max-w-4xl mx-auto relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400" />

      {/* Step 1: Brand Selection */}
      <div className="mb-6">
        <label className="text-sm font-bold text-slate-200 flex items-center gap-2 mb-3">
          <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-black">
            1
          </span>
          Select Device Brand
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          {Object.entries(repairData.brands).map(([key, item]) => {
            const isActive = selectedBrand === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => {
                  setSelectedBrand(key);
                  setSelectedModelId(repairData.brands[key].models[0].id);
                }}
                className={`py-3 px-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all text-center ${
                  isActive
                    ? "bg-blue-600/20 border-blue-500 text-blue-300 shadow-md shadow-blue-500/20"
                    : "bg-[#0f1523] border-white/10 text-slate-400 hover:text-white hover:border-white/20"
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 2: Model Dropdown */}
      <div className="mb-6">
        <label className="text-sm font-bold text-slate-200 flex items-center gap-2 mb-3">
          <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-black">
            2
          </span>
          Select Specific Model / Series
        </label>
        <div className="relative">
          <select
            value={selectedModelId}
            onChange={(e) => setSelectedModelId(e.target.value)}
            className="w-full bg-[#0f1523] border border-white/15 rounded-xl px-4 py-3.5 text-sm sm:text-base text-white appearance-none cursor-pointer focus:border-blue-500 focus:outline-none"
          >
            {brandObj.models.map((m) => (
              <option key={m.id} value={m.id} className="bg-[#0f1523] text-white">
                {m.name}
              </option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Step 3: Issue Grid */}
      <div className="mb-8">
        <label className="text-sm font-bold text-slate-200 flex items-center gap-2 mb-3">
          <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-black">
            3
          </span>
          Select Issue / Service Required
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {Object.entries(repairData.issues).map(([key, issue]) => {
            const isActive = selectedIssue === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setSelectedIssue(key)}
                className={`p-4 rounded-xl border text-left flex flex-col justify-between transition-all ${
                  isActive
                    ? "bg-blue-600/15 border-blue-500 text-white shadow-md shadow-blue-500/15"
                    : "bg-[#0f1523] border-white/10 text-slate-400 hover:border-white/20 hover:text-slate-200"
                }`}
              >
                <div>
                  <div
                    className={`font-bold text-sm mb-1 ${
                      isActive ? "text-blue-400" : "text-white"
                    }`}
                  >
                    {issue.name}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-3">
                    {issue.desc}
                  </p>
                </div>
                <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5" />
                  <span>{issue.duration}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Quote Summary Box */}
      <div className="bg-gradient-to-br from-[#1d2740] to-[#0e1524] border border-blue-500/30 rounded-2xl p-6 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6">
        <div>
          <h4 className="text-lg font-extrabold text-white mb-1">
            {brandObj.name} — {modelObj.name}
          </h4>
          <p className="text-sm text-slate-300 mb-3">{issueObj.name}</p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 px-2.5 py-1 rounded-full font-semibold flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {issueObj.duration}
            </span>
            <span className="bg-amber-500/15 text-amber-300 border border-amber-500/30 px-2.5 py-1 rounded-full font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              {issueObj.warranty}
            </span>
            <span className="bg-blue-500/15 text-blue-300 border border-blue-500/30 px-2.5 py-1 rounded-full font-semibold">
              Live Counter Inspection
            </span>
          </div>
        </div>

        <div className="flex flex-col items-stretch lg:items-end gap-3 min-w-[240px]">
          <div className="text-center lg:text-right">
            <span className="text-xs text-slate-400 block uppercase tracking-wider">
              Estimated Cost
            </span>
            <span className="text-2xl font-black text-white">{priceRange}</span>
          </div>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20ba59] text-black font-extrabold px-5 py-3 rounded-xl text-sm transition-all shadow-lg shadow-emerald-500/25"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
            <span>Book Bench Slot on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
