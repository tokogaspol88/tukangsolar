"use client";

import Image from "next/image";
import { useState } from "react";
import {
  FaShoppingCart,
  FaTiktok,
  FaWhatsapp,
  FaStar,
  FaTruck,
  FaIndustry,
  FaMotorcycle,
  FaCar,
  FaFlask,
  FaShieldAlt,
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
  FaOilCan,
  FaGasPump,
  FaBolt,
  FaAward,
  FaUsers,
  FaBoxOpen,
  FaArrowRight,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { SiShopee } from "react-icons/si";
import { HiBeaker, HiChartBar, HiChatBubbleLeftRight } from "react-icons/hi2";

/* ───────────────────── DATA ───────────────────── */

const products = [
  {
    name: "Aditif Solar",
    tagline: "Best Seller — 150.000+ Botol Terjual",
    price: "Rp 19.999",
    image: "/produk_aditif_solar.jpeg",
    badge: "Best Seller",
    badgeColor: "bg-red-brand",
    description:
      "Produk pondasi dari Tukang Solar yang telah membuktikan kualitasnya. Rating 4.9 dari ribuan ulasan pembeli.",
    features: [
      "Rating 4.9 dari ribuan ulasan",
      "Menjaga kebersihan sistem bahan bakar",
      "Cocok untuk diesel harian, bus, truk",
    ],
    icon: FaGasPump,
  },
  {
    name: "Aditif Solar PRO",
    tagline: "High Performance — Uji Dyno Test Thailand",
    price: "Rp 49.999",
    image: "/produk_aditif_solar_pro.jpeg",
    badge: "Pro",
    badgeColor: "bg-blue-brand",
    description:
      "Produk kasta tertinggi. Telah melewati uji mesin dyno di Thailand oleh mekanik drag profesional.",
    features: [
      "Lulus uji Dyno Test di Thailand",
      "Formula mekanik profesional",
      "Untuk diesel modifikasi & jarak jauh",
    ],
    icon: FaBolt,
  },
  {
    name: "Aditif Oli",
    tagline: "Engine Protection — Mesin Halus & Terawat",
    price: "Rp 79.999",
    image: "/produk_aditif_oli.jpeg",
    badge: "Premium",
    badgeColor: "bg-teal-brand",
    description:
      "Melengkapi perawatan dari sisi pelumasan mesin. Pendamping wajib saat ganti oli.",
    features: [
      "Pendamping wajib saat ganti oli",
      "Menjaga pelumasan di suhu tinggi",
      "Cocok untuk diesel & bensin",
    ],
    icon: FaOilCan,
  },
  {
    name: "Aditif Bensin",
    tagline: "Fuel System Cleaner — Ruang Bakar Bersih",
    price: "Rp 24.999",
    image: "/produk_aditif_bensin.jpeg",
    badge: "Popular",
    badgeColor: "bg-red-brand",
    description:
      "Teknologi pembersih untuk kendaraan bensin. Fokus pada pembersihan deposit karbon tanpa merusak komponen.",
    features: [
      "Pembersih deposit karbon efektif",
      "Aman untuk semua komponen mesin",
      "Mobil bensin, motor, hingga moge",
    ],
    icon: FaFlask,
  },
];

const dosageData = [
  {
    product: "Aditif Solar",
    initial: "3 Botol",
    next: "1 Botol",
    capacity: "per 50 Liter BBM",
  },
  {
    product: "Aditif Bensin",
    initial: "3 Botol",
    next: "1 Botol",
    capacity: "per 50 Liter BBM",
  },
  {
    product: "Aditif Solar Pro",
    initial: "1 Botol",
    next: "1 Botol",
    capacity: "per 50 Liter",
  },
  {
    product: "Aditif Oli",
    initial: "1 Botol",
    next: "1 Botol",
    capacity: "per 3-4 Liter Oli",
  },
];

const reviews = [
  "review1.jpeg",
  "review2.jpeg",
  "review3.jpeg",
  "review4.jpeg",
  "review5.jpeg",
  "review6.jpeg",
  "review7.jpeg",
  "review8.jpeg",
  "review9.jpeg",
  "review10.jpeg",
  "review11.jpeg",
  "review12.jpeg",
  "review13.jpeg",
];

const stats = [
  {
    value: "150.000+",
    label: "Botol Terjual",
    icon: FaBoxOpen,
  },
  {
    value: "4.9/5.0",
    label: "Rating Ulasan",
    icon: FaStar,
  },
  {
    value: "10.000+",
    label: "Pengguna Aktif",
    icon: FaUsers,
  },
  {
    value: "100%",
    label: "Teruji Lab & Dyno",
    icon: FaAward,
  },
];

/* ────────────── ORDER MODAL COMPONENT ─────────────── */

function OrderModal({
  product,
  onClose,
}: {
  product: (typeof products)[0];
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-white rounded-t-3xl sm:rounded-2xl p-6 pb-8 animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-gray-900">
            Order {product.name}
          </h3>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <FaTimes className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <p className="text-sm text-gray-500 mb-6">
          Pilih platform pembelian Anda:
        </p>

        <div className="space-y-3">
          <a
            href="https://vt.tiktok.com/ZS9Jt2yQAf4RB-t5pjr/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn flex items-center gap-4 w-full p-4 rounded-xl bg-gray-900 text-white hover:bg-black transition"
          >
            <FaTiktok className="w-6 h-6 flex-shrink-0" />
            <div className="text-left">
              <div className="font-semibold text-sm">TikTok Shop</div>
              <div className="text-xs text-gray-400">
                Bisa Bayar di Tempat / COD
              </div>
            </div>
            <FaArrowRight className="w-4 h-4 ml-auto" />
          </a>

          <a
            href="https://shopee.co.id/tukang_solar"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn flex items-center gap-4 w-full p-4 rounded-xl bg-[#ee4d2d] text-white hover:bg-[#d63a1b] transition"
          >
            <SiShopee className="w-6 h-6 flex-shrink-0" />
            <div className="text-left">
              <div className="font-semibold text-sm">Shopee</div>
              <div className="text-xs text-orange-100">
                Gratis Ongkir Seluruh Indonesia
              </div>
            </div>
            <FaArrowRight className="w-4 h-4 ml-auto" />
          </a>

          <a
            href="https://wa.me/6285189784834?text=Halo%20Tukang%20Solar%2C%20saya%20mau%20order%20produk"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn flex items-center gap-4 w-full p-4 rounded-xl bg-[#25d366] text-white hover:bg-[#1fb855] transition"
          >
            <FaWhatsapp className="w-6 h-6 flex-shrink-0" />
            <div className="text-left">
              <div className="font-semibold text-sm">WhatsApp</div>
              <div className="text-xs text-green-100">
                Diskon 15-20% untuk Grosir
              </div>
            </div>
            <FaArrowRight className="w-4 h-4 ml-auto" />
          </a>
        </div>
      </div>
    </div>
  );
}

/* ────────────── MAIN PAGE ─────────────── */

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof products)[0] | null
  >(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      {/* ─── NAVBAR ─── */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <a href="#" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Tukang Solar"
                width={44}
                height={44}
                className="rounded-lg"
              />
              <span className="font-bold text-lg sm:text-xl text-gray-900">
                Tukang Solar
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#produk"
                className="text-sm font-medium text-gray-600 hover:text-[#1060b9] transition"
              >
                Produk
              </a>
              <a
                href="#dosis"
                className="text-sm font-medium text-gray-600 hover:text-[#1060b9] transition"
              >
                Dosis
              </a>
              <a
                href="#testimoni"
                className="text-sm font-medium text-gray-600 hover:text-[#1060b9] transition"
              >
                Testimoni
              </a>
              <a
                href="#beli"
                className="cta-btn inline-flex items-center gap-2 px-5 py-2.5 bg-[#e91233] text-white text-sm font-semibold rounded-full"
              >
                <FaShoppingCart className="w-4 h-4" />
                Beli Sekarang
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? (
                <FaTimes className="w-6 h-6 text-gray-700" />
              ) : (
                <FaBars className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenu && (
          <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in">
            <div className="px-4 py-4 space-y-3">
              <a
                href="#produk"
                onClick={() => setMobileMenu(false)}
                className="block text-sm font-medium text-gray-700 py-2"
              >
                Produk
              </a>
              <a
                href="#dosis"
                onClick={() => setMobileMenu(false)}
                className="block text-sm font-medium text-gray-700 py-2"
              >
                Dosis
              </a>
              <a
                href="#testimoni"
                onClick={() => setMobileMenu(false)}
                className="block text-sm font-medium text-gray-700 py-2"
              >
                Testimoni
              </a>
              <a
                href="#beli"
                onClick={() => setMobileMenu(false)}
                className="cta-btn flex items-center justify-center gap-2 w-full px-5 py-3 bg-[#e91233] text-white text-sm font-semibold rounded-full"
              >
                <FaShoppingCart className="w-4 h-4" />
                Beli Sekarang
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-20 sm:pt-24 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d2847] to-[#1060b9]" />
        {/* Decorative circles */}
        <div className="absolute top-20 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-[#e91233]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-60 h-60 sm:w-80 sm:h-80 bg-[#80b7a4]/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6 animate-fade-in-up">
                <FaAward className="w-4 h-4 text-yellow-400" />
                <span className="text-xs sm:text-sm text-white/90 font-medium">
                  Rekor Penjualan 150.000+ Botol
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up delay-100">
                Aditif BBM{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e91233] to-[#ff6b6b]">
                  Terpercaya #1
                </span>{" "}
                Indonesia
              </h1>

              <p className="text-base sm:text-lg text-white/70 max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in-up delay-200 leading-relaxed">
                Kami tidak bicara melalui janji, kami bicara melalui bukti di
                lapangan. Diuji secara teknis, dipercaya puluhan ribu pengguna.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-300">
                <a
                  href="#produk"
                  className="cta-btn inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#e91233] text-white font-bold rounded-full text-sm sm:text-base animate-pulse-glow"
                >
                  <FaShoppingCart className="w-5 h-5" />
                  Lihat Produk
                </a>
                <a
                  href="https://wa.me/6285189784834?text=Halo%20Tukang%20Solar%2C%20saya%20mau%20tanya%20produk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full text-sm sm:text-base hover:bg-white/20"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Hubungi Kami
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex items-center gap-4 sm:gap-6 justify-center lg:justify-start mt-10 animate-fade-in-up delay-400">
                <div className="flex items-center gap-2">
                  <FaShieldAlt className="w-5 h-5 text-[#80b7a4]" />
                  <span className="text-xs sm:text-sm text-white/60">
                    Uji Lab Lemigas
                  </span>
                </div>
                <div className="w-px h-5 bg-white/20" />
                <div className="flex items-center gap-2">
                  <HiBeaker className="w-5 h-5 text-[#80b7a4]" />
                  <span className="text-xs sm:text-sm text-white/60">
                    Dyno Test Thailand
                  </span>
                </div>
                <div className="w-px h-5 bg-white/20" />
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="w-5 h-5 text-[#80b7a4]" />
                  <span className="text-xs sm:text-sm text-white/60">
                    Non-Korosif
                  </span>
                </div>
              </div>
            </div>

            {/* Right hero image */}
            <div className="flex justify-center lg:justify-end animate-fade-in-up delay-300">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#e91233]/20 to-[#1060b9]/20 rounded-3xl blur-2xl" />
                <Image
                  src="/produk_aditif_solar.jpeg"
                  alt="Aditif Solar - Produk Best Seller Tukang Solar"
                  width={400}
                  height={400}
                  className="relative rounded-2xl shadow-2xl animate-float w-64 sm:w-80 lg:w-[400px]"
                  priority
                />
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-2xl shadow-xl p-3 sm:p-4 animate-fade-in-up delay-500">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-yellow-50 flex items-center justify-center">
                      <FaStar className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm sm:text-base">
                        4.9 / 5.0
                      </div>
                      <div className="text-xs text-gray-500">Ribuan Ulasan</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS SECTION ─── */}
      <section className="relative -mt-8 sm:-mt-12 z-10 px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-6 text-center animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-[#1060b9]/10 to-[#80b7a4]/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#1060b9]" />
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS SECTION ─── */}
      <section id="produk" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1060b9]/5 border border-[#1060b9]/10 rounded-full mb-4">
              <FaGasPump className="w-4 h-4 text-[#1060b9]" />
              <span className="text-xs sm:text-sm font-semibold text-[#1060b9]">
                Produk Kami
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Daftar Produk <span className="gradient-text">Tukang Solar</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
              Setiap produk telah diuji secara teknis dan dipercaya oleh puluhan
              ribu pengguna di seluruh Indonesia
            </p>
          </div>

          {/* Product grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {products.map((product, i) => {
              const Icon = product.icon;
              return (
                <div
                  key={i}
                  className="product-card bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {/* Image container */}
                  <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Badge */}
                    <div
                      className={`absolute top-3 left-3 ${product.badgeColor} text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full`}
                    >
                      {product.badge}
                    </div>
                    {/* Price tag */}
                    <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm text-gray-900 font-bold text-sm sm:text-base px-3 py-1.5 rounded-xl shadow-lg">
                      {product.price}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-4 h-4 text-[#1060b9]" />
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                        {product.name}
                      </h3>
                    </div>
                    <p className="text-xs text-[#e91233] font-semibold mb-2">
                      {product.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 mb-4 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-1.5 mb-5">
                      {product.features.map((f, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-xs text-gray-600"
                        >
                          <FaCheckCircle className="w-3 h-3 text-[#80b7a4] mt-0.5 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* Order button */}
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="cta-btn w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[#e91233] to-[#c50f2b] text-white font-semibold rounded-xl text-sm"
                    >
                      <FaShoppingCart className="w-4 h-4" />
                      Order Sekarang
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── DOSAGE TABLE ─── */}
      <section
        id="dosis"
        className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#80b7a4]/10 border border-[#80b7a4]/20 rounded-full mb-4">
              <HiBeaker className="w-4 h-4 text-[#80b7a4]" />
              <span className="text-xs sm:text-sm font-semibold text-[#1060b9]">
                Panduan Penggunaan
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Tabel <span className="gradient-text">Dosis Pemakaian</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
              Gunakan sesuai dosis untuk hasil optimal pada kendaraan Anda
            </p>
          </div>

          {/* Mobile cards */}
          <div className="sm:hidden space-y-4">
            {dosageData.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5"
              >
                <h3 className="font-bold text-gray-900 mb-3 text-sm">
                  {item.product}
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-3 bg-blue-50 rounded-xl">
                    <div className="text-[10px] text-gray-500 mb-1">
                      Dosis Awal
                    </div>
                    <div className="font-bold text-sm text-[#1060b9]">
                      {item.initial}
                    </div>
                  </div>
                  <div className="text-center p-3 bg-teal-50 rounded-xl">
                    <div className="text-[10px] text-gray-500 mb-1">
                      Selanjutnya
                    </div>
                    <div className="font-bold text-sm text-[#80b7a4]">
                      {item.next}
                    </div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-xl">
                    <div className="text-[10px] text-gray-500 mb-1">
                      Kapasitas
                    </div>
                    <div className="font-bold text-xs text-gray-700">
                      {item.capacity}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop table */}
          <div className="hidden sm:block overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
            <table className="dosage-table w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left px-6 py-4 text-white font-semibold text-sm">
                    Jenis Produk
                  </th>
                  <th className="text-center px-6 py-4 text-white font-semibold text-sm">
                    Dosis Awal
                  </th>
                  <th className="text-center px-6 py-4 text-white font-semibold text-sm">
                    Dosis Selanjutnya
                  </th>
                  <th className="text-center px-6 py-4 text-white font-semibold text-sm">
                    Kapasitas
                  </th>
                </tr>
              </thead>
              <tbody>
                {dosageData.map((item, i) => (
                  <tr key={i} className="border-t border-gray-100">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      {item.product}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#1060b9]/10 text-[#1060b9] rounded-full font-semibold text-xs">
                        {item.initial}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#80b7a4]/10 text-[#0d7a5a] rounded-full font-semibold text-xs">
                        {item.next}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      {item.capacity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── WHY US SECTION ─── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e91233]/5 border border-[#e91233]/10 rounded-full mb-4">
              <FaShieldAlt className="w-4 h-4 text-[#e91233]" />
              <span className="text-xs sm:text-sm font-semibold text-[#e91233]">
                Mengapa Kami
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Mengapa Membeli di{" "}
              <span className="gradient-text">Tukang Solar?</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {[
              {
                icon: HiChartBar,
                title: "Uji Dyno Test",
                desc: "Aditif Solar Pro telah melewati uji Dyno Test oleh mekanik drag di Thailand",
                color: "from-[#e91233]/10 to-[#e91233]/5",
                iconColor: "text-[#e91233]",
              },
              {
                icon: FaShieldAlt,
                title: "Uji Lab Lemigas",
                desc: "Aditif Solar terbukti tidak menyebabkan korosi, diuji di Lab Lemigas (Lembaga Minyak dan Gas)",
                color: "from-[#1060b9]/10 to-[#1060b9]/5",
                iconColor: "text-[#1060b9]",
              },
              {
                icon: HiChatBubbleLeftRight,
                title: "Real Feedback",
                desc: "Puluhan ribu testimoni jujur dari pengguna langsung di seluruh Indonesia",
                color: "from-[#80b7a4]/10 to-[#80b7a4]/5",
                iconColor: "text-[#80b7a4]",
              },
              {
                icon: FaCheckCircle,
                title: "No Overclaim",
                desc: "Kami membiarkan hasil di mesin kendaraan Anda yang berbicara, tanpa janji berlebihan",
                color: "from-[#1060b9]/10 to-[#80b7a4]/5",
                iconColor: "text-[#1060b9]",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 text-center hover:shadow-lg transition-shadow"
                >
                  <div
                    className={`w-14 h-14 mx-auto mb-5 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center`}
                  >
                    <Icon className={`w-7 h-7 ${item.iconColor}`} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SUITABLE FOR SECTION ─── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Cocok Untuk <span className="gradient-text">Semua Kendaraan</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
              Dari motor harian hingga mesin industri berat
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: FaMotorcycle, label: "Motor Harian" },
              { icon: FaCar, label: "Mobil Bensin" },
              { icon: FaTruck, label: "Truk & Bus" },
              { icon: FaIndustry, label: "Mesin Industri" },
              { icon: FaMotorcycle, label: "Motor Gede" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-center hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#1060b9]/5 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#1060b9]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-700">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section id="testimoni" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 border border-yellow-100 rounded-full mb-4">
              <FaStar className="w-4 h-4 text-yellow-500" />
              <span className="text-xs sm:text-sm font-semibold text-yellow-700">
                Testimoni Asli
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Apa Kata <span className="gradient-text">Pengguna Kami</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
              Ulasan murni dari ribuan pengguna langsung
            </p>
          </div>

          {/* Reviews horizontal scroll on mobile, grid on desktop */}
          <div className="flex sm:hidden gap-4 overflow-x-auto reviews-scroll pb-4 -mx-4 px-4">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="review-card flex-shrink-0 w-72 rounded-2xl overflow-hidden shadow-lg border border-gray-100"
              >
                <Image
                  src={`/${review}`}
                  alt={`Testimoni pengguna ${i + 1}`}
                  width={288}
                  height={360}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>

          <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="review-card rounded-2xl overflow-hidden shadow-md border border-gray-100"
              >
                <Image
                  src={`/${review}`}
                  alt={`Testimoni pengguna ${i + 1}`}
                  width={300}
                  height={380}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PURCHASE CHANNELS ─── */}
      <section
        id="beli"
        className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0a1628] via-[#0d2847] to-[#1060b9] relative overflow-hidden"
      >
        {/* Decorative */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#e91233]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#80b7a4]/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
            <FaShoppingCart className="w-4 h-4 text-white" />
            <span className="text-xs sm:text-sm font-semibold text-white/90">
              Pilih Jalur Pembelian
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4">
            Siap Merasakan Perbedaannya?
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-10 sm:mb-14 text-sm sm:text-base">
            Pilih platform pembelian yang paling nyaman untuk Anda
          </p>

          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
            {/* TikTok */}
            <a
              href="https://vt.tiktok.com/ZS9Jt2yQAf4RB-t5pjr/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <FaTiktok className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-white mb-1 text-sm sm:text-base">
                TikTok Shop
              </h3>
              <p className="text-xs text-white/50">
                Bisa COD / Bayar di Tempat
              </p>
              <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#e91233]">
                Order Sekarang
                <FaArrowRight className="w-3 h-3" />
              </div>
            </a>

            {/* Shopee */}
            <a
              href="https://shopee.co.id/tukang_solar"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <SiShopee className="w-7 h-7 text-[#ee4d2d]" />
              </div>
              <h3 className="font-bold text-white mb-1 text-sm sm:text-base">
                Shopee
              </h3>
              <p className="text-xs text-white/50">
                Gratis Ongkir Seluruh Indonesia
              </p>
              <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#ee4d2d]">
                Order Sekarang
                <FaArrowRight className="w-3 h-3" />
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/6285189784834?text=Halo%20Tukang%20Solar%2C%20saya%20mau%20order%20produk"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <FaWhatsapp className="w-7 h-7 text-[#25d366]" />
              </div>
              <h3 className="font-bold text-white mb-1 text-sm sm:text-base">
                WhatsApp
              </h3>
              <p className="text-xs text-white/50">
                Diskon 15-20% untuk Grosir
              </p>
              <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#25d366]">
                Hubungi Admin
                <FaArrowRight className="w-3 h-3" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ─── FAQ SECTION ─── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Pertanyaan <span className="gradient-text">Umum</span>
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "Apakah aditif ini aman untuk mesin?",
                a: "Ya, 100% aman. Aditif Solar (biru) telah diuji di Lab Lemigas dan terbukti tidak menyebabkan korosi. Aditif Solar Pro telah melewati uji Dyno Test di Thailand oleh mekanik profesional.",
              },
              {
                q: "Berapa dosis penggunaan yang tepat?",
                a: "Untuk Aditif Solar & Bensin: dosis awal 3 botol per 50L BBM, selanjutnya 1 botol per 50L. Untuk Solar Pro & Oli: 1 botol per pemakaian. Lihat tabel dosis untuk detail lengkap.",
              },
              {
                q: "Bisa digunakan untuk motor?",
                a: "Tentu! Aditif Bensin cocok untuk semua motor bensin harian hingga motor gede (Moge). Pastikan gunakan produk yang sesuai jenis bahan bakar kendaraan Anda.",
              },
              {
                q: "Apa bedanya Aditif Solar dan Solar PRO?",
                a: "Aditif Solar adalah produk reguler untuk perawatan harian. Solar PRO adalah formula premium kasta tertinggi yang telah diuji Dyno Test di Thailand, cocok untuk performa maksimal dan jarak jauh.",
              },
              {
                q: "Bagaimana cara mendapatkan diskon grosir?",
                a: "Hubungi kami langsung via WhatsApp untuk mendapatkan potongan harga 15-20% untuk pembelian dalam jumlah banyak/grosir.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 text-left"
                >
                  <span className="font-semibold text-gray-900 text-sm sm:text-base pr-4">
                    {faq.q}
                  </span>
                  {expandedFaq === i ? (
                    <FaChevronUp className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  ) : (
                    <FaChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === i && (
                  <div className="px-5 sm:px-6 pb-5 animate-fade-in">
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FLOATING WHATSAPP BUTTON (Mobile) ─── */}
      <a
        href="https://wa.me/6285189784834?text=Halo%20Tukang%20Solar%2C%20saya%20mau%20tanya%20produk"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25d366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse-glow"
        style={{
          boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)",
        }}
      >
        <FaWhatsapp className="w-7 h-7 text-white" />
      </a>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[#0a1628] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-14">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/logo.png"
                  alt="Tukang Solar"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <span className="font-bold text-lg">Tukang Solar</span>
              </div>
              <p className="text-sm text-white/50 leading-relaxed mb-4">
                Satu-satunya toko aditif dengan rekor penjualan 150.000+ botol &
                rating 4.9 di seluruh marketplace.
              </p>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-bold text-sm mb-4 text-white/80">Produk</h4>
              <ul className="space-y-2.5">
                {products.map((p, i) => (
                  <li key={i}>
                    <a
                      href="#produk"
                      className="text-sm text-white/40 hover:text-white/80 transition"
                    >
                      {p.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-bold text-sm mb-4 text-white/80">
                Marketplace
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="https://vt.tiktok.com/ZS9Jt2yQAf4RB-t5pjr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-white/40 hover:text-white/80 transition"
                  >
                    <FaTiktok className="w-4 h-4" />
                    TikTok Shop
                  </a>
                </li>
                <li>
                  <a
                    href="https://shopee.co.id/tukang_solar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-white/40 hover:text-white/80 transition"
                  >
                    <SiShopee className="w-4 h-4" />
                    Shopee
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/6285189784834"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-white/40 hover:text-white/80 transition"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-sm mb-4 text-white/80">Kontak</h4>
              <ul className="space-y-2.5">
                <li className="flex items-center gap-2 text-sm text-white/40">
                  <FaPhoneAlt className="w-3.5 h-3.5" />
                  +62 851 8978 4834
                </li>
                <li className="flex items-start gap-2 text-sm text-white/40">
                  <FaMapMarkerAlt className="w-3.5 h-3.5 mt-0.5" />
                  Indonesia
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/30">
              &copy; 2026 Tukang Solar. All rights reserved.
            </p>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <FaStar key={s} className="w-4 h-4 text-yellow-500" />
              ))}
              <span className="text-xs text-white/40 ml-2">
                4.9 Rating dari ribuan ulasan
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* ─── ORDER MODAL ─── */}
      {selectedProduct && (
        <OrderModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
