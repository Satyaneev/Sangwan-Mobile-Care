/**
 * SANGWAN MOBILE CARE - CLIENT INTERACTIVE LOGIC
 * Includes Live Repair Estimator, WhatsApp Quotation Dispatcher,
 * Stock Filtering, Business Hours Calculation, and FAQ Accordions.
 */

document.addEventListener('DOMContentLoaded', () => {
  initBusinessStatus();
  initRepairEstimator();
  initStockTabs();
  initFaqAccordion();
});

/* -------------------------------------------------------------
   1. Real-Time Business Status Indicator (Open vs Closed)
   Hours: 9:30 AM to 8:30 PM, Everyday
   ------------------------------------------------------------- */
function initBusinessStatus() {
  const statusBadge = document.getElementById('shopStatusBadge');
  const statusText = document.getElementById('shopStatusText');
  if (!statusBadge || !statusText) return;

  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentTimeVal = currentHour * 60 + currentMinute;

  const openTime = 9 * 60 + 30;  // 9:30 AM
  const closeTime = 20 * 60 + 30; // 8:30 PM

  if (currentTimeVal >= openTime && currentTimeVal < closeTime) {
    statusBadge.innerHTML = '<span class="pulse-dot"></span> Open Today until 8:30 PM';
    statusBadge.className = 'pill-status';
    if (statusText) statusText.textContent = 'Open Now (Closes 8:30 PM)';
  } else {
    statusBadge.innerHTML = '<span style="width:8px;height:8px;background:#94a3b8;border-radius:50%"></span> Opens Tomorrow 9:30 AM';
    statusBadge.className = 'pill-status';
    statusBadge.style.borderColor = 'rgba(148, 163, 184, 0.3)';
    statusBadge.style.color = '#94a3b8';
    if (statusText) statusText.textContent = 'Opens at 9:30 AM Tomorrow';
  }
}

/* -------------------------------------------------------------
   2. Interactive Live Repair Estimator & WhatsApp Generator
   ------------------------------------------------------------- */
const repairData = {
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
        { id: "ipse", name: "iPhone X / 8 / 7 / SE Series", tier: "budget" }
      ]
    },
    samsung: {
      name: "Samsung",
      models: [
        { id: "samfold", name: "Galaxy Z Fold / Z Flip Series", tier: "flagship_ultra" },
        { id: "sams24", name: "Galaxy S24 / S23 / S22 Ultra", tier: "flagship_high" },
        { id: "samsfe", name: "Galaxy S21 / S20 FE / Note Series", tier: "flagship_mid" },
        { id: "sama", name: "Galaxy A Series (A55, A35, A15, etc.)", tier: "standard_mid" },
        { id: "samm", name: "Galaxy M / F Series", tier: "budget" }
      ]
    },
    oneplus: {
      name: "OnePlus",
      models: [
        { id: "op12", name: "OnePlus 12 / 12R / Open", tier: "flagship_high" },
        { id: "op11", name: "OnePlus 11 / 11R / 10 Pro", tier: "flagship_mid" },
        { id: "op9", name: "OnePlus 9 / 8 / 7 Pro Series", tier: "standard_mid" },
        { id: "opnord", name: "Nord CE 4 / Nord 3 / CE Series", tier: "budget" }
      ]
    },
    vivo: {
      name: "Vivo / iQOO",
      models: [
        { id: "vivox", name: "Vivo X100 / X90 Series / Fold", tier: "flagship_high" },
        { id: "vivov", name: "Vivo V40 / V30 / V29 Pro Series", tier: "standard_mid" },
        { id: "iqoo", name: "iQOO 12 / Neo 9 / Neo 7 Pro", tier: "standard_mid" },
        { id: "vivoy", name: "Vivo T & Y Series (Y200, T3, etc.)", tier: "budget" }
      ]
    },
    oppo: {
      name: "Oppo",
      models: [
        { id: "oppofind", name: "Find X Series / Find N Fold", tier: "flagship_high" },
        { id: "opporeno", name: "Reno 12 / Reno 11 / Reno 10 Series", tier: "standard_mid" },
        { id: "oppoa", name: "Oppo A & F Series (A79, F25 Pro)", tier: "budget" }
      ]
    },
    realme: {
      name: "Realme",
      models: [
        { id: "realmegt", name: "Realme GT 6 / GT 5 Pro Series", tier: "flagship_mid" },
        { id: "realmenum", name: "Realme 13 / 12 / 11 Pro+ 5G", tier: "standard_mid" },
        { id: "realmec", name: "Realme Narzo / C Series", tier: "budget" }
      ]
    },
    xiaomi: {
      name: "Xiaomi / Redmi",
      models: [
        { id: "mi14", name: "Xiaomi 14 / 13 Pro Ultra Series", tier: "flagship_high" },
        { id: "redminote", name: "Redmi Note 13 / 12 / 11 Pro+", tier: "standard_mid" },
        { id: "pocop", name: "POCO X / F Series (F6, X6 Pro)", tier: "standard_mid" },
        { id: "redmib", name: "Redmi 13C / A Series / Budget", tier: "budget" }
      ]
    }
  },
  issues: {
    folder: {
      name: "Screen / Folder Replacement",
      desc: "Full Display assembly with original touch response & vibrant colors.",
      duration: "30 - 45 mins",
      warranty: "Up to 6 Months Warranty",
      priceMap: {
        budget: "₹1,299 - ₹2,199",
        standard_mid: "₹2,199 - ₹4,499",
        flagship_mid: "₹3,999 - ₹7,999",
        flagship_high: "₹6,499 - ₹14,999",
        flagship_ultra: "₹11,999 - ₹22,999"
      }
    },
    glass: {
      name: "Glass Only Replacement (OCA)",
      desc: "Retain your 100% factory original display, change only broken outer glass.",
      duration: "45 - 60 mins",
      warranty: "Original Display Preserved",
      priceMap: {
        budget: "₹799 - ₹1,299",
        standard_mid: "₹1,299 - ₹2,199",
        flagship_mid: "₹1,999 - ₹3,499",
        flagship_high: "₹3,499 - ₹6,499",
        flagship_ultra: "₹5,499 - ₹9,999"
      }
    },
    battery: {
      name: "Original Battery Replacement",
      desc: "Grade-A 100% capacity cell, fix heating and rapid discharge.",
      duration: "25 - 35 mins",
      warranty: "3 to 6 Months Warranty",
      priceMap: {
        budget: "₹799 - ₹1,199",
        standard_mid: "₹1,199 - ₹1,699",
        flagship_mid: "₹1,499 - ₹2,299",
        flagship_high: "₹2,199 - ₹3,499",
        flagship_ultra: "₹2,999 - ₹4,499"
      }
    },
    board: {
      name: "Motherboard & Chip-Level IC Repair",
      desc: "Fix dead phone, audio IC, network search issue, light IC, restart loop.",
      duration: "60 - 90 mins",
      warranty: "Tested Diagnostics",
      priceMap: {
        budget: "₹899 - ₹1,799",
        standard_mid: "₹1,499 - ₹2,499",
        flagship_mid: "₹2,499 - ₹4,499",
        flagship_high: "₹3,499 - ₹6,999",
        flagship_ultra: "₹4,999 - ₹8,999"
      }
    },
    charging: {
      name: "Charging Jack / Mic / Speaker",
      desc: "Fix slow charging, loose connector, mic voice issue, or distorted speaker.",
      duration: "20 - 30 mins",
      warranty: "Instant Replacement",
      priceMap: {
        budget: "₹399 - ₹699",
        standard_mid: "₹599 - ₹999",
        flagship_mid: "₹899 - ₹1,499",
        flagship_high: "₹1,299 - ₹2,199",
        flagship_ultra: "₹1,699 - ₹2,699"
      }
    },
    water: {
      name: "Water Damage / Deep Ultrasonic Cleaning",
      desc: "Complete motherboard chemical de-oxidation, short-circuit trace repair.",
      duration: "1 - 2 hours",
      warranty: "Data Recovery Priority",
      priceMap: {
        budget: "₹599 - ₹1,199",
        standard_mid: "₹899 - ₹1,699",
        flagship_mid: "₹1,499 - ₹2,799",
        flagship_high: "₹2,499 - ₹4,499",
        flagship_ultra: "₹3,499 - ₹5,999"
      }
    }
  }
};

let currentBrand = 'apple';
let currentModelId = 'ip15pro';
let currentIssue = 'folder';

function initRepairEstimator() {
  const brandButtons = document.querySelectorAll('.brand-btn');
  const modelSelect = document.getElementById('deviceModelSelect');
  const issueCards = document.querySelectorAll('.issue-card');

  // Brand click listener
  brandButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      brandButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentBrand = btn.getAttribute('data-brand');
      populateModels(currentBrand);
      updateEstimate();
    });
  });

  // Model change listener
  if (modelSelect) {
    modelSelect.addEventListener('change', (e) => {
      currentModelId = e.target.value;
      updateEstimate();
    });
  }

  // Issue card click listener
  issueCards.forEach(card => {
    card.addEventListener('click', () => {
      issueCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      currentIssue = card.getAttribute('data-issue');
      updateEstimate();
    });
  });

  // Initialize models for default brand
  populateModels(currentBrand);
  updateEstimate();
}

function populateModels(brandKey) {
  const modelSelect = document.getElementById('deviceModelSelect');
  if (!modelSelect) return;

  const brandData = repairData.brands[brandKey];
  if (!brandData) return;

  modelSelect.innerHTML = '';
  brandData.models.forEach((m, idx) => {
    const opt = document.createElement('option');
    opt.value = m.id;
    opt.textContent = m.name;
    if (idx === 0) opt.selected = true;
    modelSelect.appendChild(opt);
  });

  currentModelId = brandData.models[0].id;
}

function updateEstimate() {
  const brandObj = repairData.brands[currentBrand];
  const modelObj = brandObj ? brandObj.models.find(m => m.id === currentModelId) : null;
  const issueObj = repairData.issues[currentIssue];

  if (!brandObj || !modelObj || !issueObj) return;

  const priceRange = issueObj.priceMap[modelObj.tier] || "₹999 - ₹2,999";
  
  // Update UI Elements
  const summaryTitle = document.getElementById('summaryModelTitle');
  const summaryDesc = document.getElementById('summaryIssueDesc');
  const summaryPrice = document.getElementById('summaryPrice');
  const summaryTime = document.getElementById('summaryTime');
  const summaryWarranty = document.getElementById('summaryWarranty');
  const waButton = document.getElementById('btnEstimateWhatsApp');

  if (summaryTitle) summaryTitle.textContent = `${brandObj.name} - ${modelObj.name}`;
  if (summaryDesc) summaryDesc.textContent = `${issueObj.name} (${issueObj.desc})`;
  if (summaryPrice) summaryPrice.textContent = priceRange;
  if (summaryTime) summaryTime.textContent = `⏱️ ${issueObj.duration}`;
  if (summaryWarranty) summaryWarranty.textContent = `🛡️ ${issueObj.warranty}`;

  // WhatsApp Pre-filled message generator
  if (waButton) {
    const message = `Hello Sangwan Mobile Care, I want to book a repair in Charkhi Dadri:
📱 Device: ${brandObj.name} (${modelObj.name})
🛠️ Service Needed: ${issueObj.name}
💰 Estimated Range: ${priceRange}
Please confirm parts availability and appointment time.`;

    const encodedMsg = encodeURIComponent(message);
    waButton.href = `https://wa.me/918222918520?text=${encodedMsg}`;
  }
}

/* -------------------------------------------------------------
   3. Stock Deals Tabs (New Flagships, Certified Pre-Owned, Accessories)
   ------------------------------------------------------------- */
function initStockTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const deviceCards = document.querySelectorAll('.device-card');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      deviceCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* -------------------------------------------------------------
   4. FAQ Accordion Logic
   ------------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all others
      faqItems.forEach(i => i.classList.remove('open'));

      // Toggle current
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
}

/* -------------------------------------------------------------
   5. Copy Helper (for Address / Phone) with Toast Feedback
   ------------------------------------------------------------- */
function copyToClipboard(text, message) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(message || 'Copied to clipboard!');
    }).catch(() => {
      fallbackCopy(text);
    });
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  showToast('Copied to clipboard!');
}

function showToast(msg) {
  let toast = document.querySelector('.toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

// Global expose for inline onclick attributes
window.copyToClipboard = copyToClipboard;
