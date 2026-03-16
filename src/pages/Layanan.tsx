import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Phone, Zap, Wifi, Shield, ArrowRight } from "lucide-react";
import heroTower from "@/assets/hero-tower.jpg";
import levelUpImg from "@/assets/layanan-level-up.jpg";

const paketAndalan = [
  {
    speed: "5 Mbps",
    features: ["Fiber Optik", "Unit Router", "FUP Tinggi", "Layanan 24/7"],
    price: "180.000",
  },
  {
    speed: "10 Mbps",
    features: ["Fiber Optik", "Unit Router", "FUP Tinggi", "Layanan 24/7"],
    price: "220.000",
  },
  {
    speed: "15 Mbps",
    features: ["Fiber Optik", "Unit Router", "FUP Tinggi", "Layanan 24/7"],
    price: "250.000",
    popular: true,
  },
  {
    speed: "20 Mbps",
    features: ["Fiber Optik", "Unit Router", "FUP Tinggi", "Layanan 24/7"],
    price: "300.000",
  },
];

const paketExclusive = [
  {
    speed: "50 Mbps",
    features: [
      "Fiber Optik",
      "Unit Router",
      "Jaringan Prioritas",
      "Gratis Biaya Pemasangan",
      "FUP Tinggi",
      "Layanan 24/7",
    ],
    price: "456.000",
  },
  {
    speed: "100 Mbps",
    features: [
      "Fiber Optik",
      "Unit Router",
      "Jaringan Prioritas",
      "Gratis Biaya Pemasangan",
      "FUP Tinggi",
      "Layanan 24/7",
    ],
    price: "699.000",
  },
];

const Layanan = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] flex items-center pt-16"
        style={{
          backgroundImage: `linear-gradient(to bottom, hsl(160 30% 8% / 0.7), hsl(160 20% 4% / 0.95)), url(${heroTower})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container py-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-3xl">
            LAYANAN INTERNET KAMI
          </h1>
          <p className="mt-4 text-muted-foreground text-sm md:text-base max-w-lg">
            Kami menyediakan Berbagai Solusi Untuk Kebutuhan Internet Anda
          </p>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 bg-primary text-primary-foreground font-bold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Phone size={20} />
            HUBUNGI KAMI
          </a>
        </div>
      </section>

      {/* Nikmati Layanan Section - Redesigned */}
      <section className="relative bg-section-dark py-20 overflow-hidden">
        {/* Background glow effect */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />

        <div className="container relative z-10">
          <div className="grid md:grid-cols-5 gap-10 items-center">
            {/* Image - takes 2 cols */}
            <div className="md:col-span-2 relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-transparent rounded-2xl blur-sm group-hover:blur-md transition-all duration-500" />
              <div className="relative rounded-2xl overflow-hidden border border-primary/20">
                <img
                  src={levelUpImg}
                  alt="Layanan Jaringan Internet"
                  className="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
            </div>

            {/* Content - takes 3 cols */}
            <div className="md:col-span-3 space-y-6">
              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
                NIKMATI{" "}
                <span className="text-gradient-green italic">LAYANAN</span>
                <br />
                <span className="text-gradient-green italic">
                  JARINGAN INTERNET
                </span>
                <br />
                TERPADU KAMI
              </h2>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-xs font-semibold px-4 py-2 rounded-full">
                  <Zap size={14} /> Super Cepat
                </span>
                <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-xs font-semibold px-4 py-2 rounded-full">
                  <Wifi size={14} /> Stabil 24/7
                </span>
                <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-xs font-semibold px-4 py-2 rounded-full">
                  <Shield size={14} /> Jaringan Aman
                </span>
              </div>

              {/* Price highlight */}
              <div className="bg-card/60 backdrop-blur border border-border rounded-xl p-6 inline-block">
                <p className="text-muted-foreground text-sm">Harga mulai</p>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-sm text-primary font-bold">Rp.</span>
                  <span className="text-4xl md:text-5xl font-extrabold text-primary">
                    180
                  </span>
                  <span className="text-sm text-primary font-bold">.000,-</span>
                  <span className="text-sm text-muted-foreground ml-2">
                    / Bulan
                  </span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#paket-andalan"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3 rounded-lg text-sm hover:bg-primary/90 transition-all hover:gap-3"
                >
                  Mulai Berlangganan <ArrowRight size={16} />
                </a>
                <a
                  href="#paket-andalan"
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors underline underline-offset-4"
                >
                  Detail Lain
                </a>
              </div>

              {/* <p className="text-sm text-muted-foreground border-l-2 border-primary/40 pl-4">
                <span className="font-bold text-foreground">Lanjut Baca</span>
                <br />
                Untuk Lebih Tau <span className="font-bold text-foreground">Keunggulan Kami</span>
              </p> */}
            </div>
          </div>
        </div>
      </section>

      {/* Daftar Sekarang + Paket Andalan */}
      <section
        id="paket-andalan"
        className="bg-background min-h-screen py-16 scroll-mt-16"
      >
        <div className="container">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-foreground text-foreground font-bold px-8 py-3 text-sm tracking-wider hover:bg-foreground hover:text-background transition-colors"
            >
              DAFTAR SEKARANG
            </a>
            <div className="text-right">
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-[0.3em]">
                PAKET ANDALAN
              </h2>
              <p className="text-xs text-muted-foreground mt-1">
                Pilihan Paket Internet Terjangkau Untuk Kebutuhan Digital Anda
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {paketAndalan.map((pkg) => (
              <div
                key={pkg.speed}
                className={`relative border rounded-lg p-6 flex flex-col ${
                  pkg.popular
                    ? "border-primary bg-card"
                    : "border-border bg-card"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-4 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded">
                    Terlaris
                  </span>
                )}
                <h3 className="text-2xl font-extrabold text-foreground text-center">
                  {pkg.speed}
                </h3>
                <ul className="mt-4 space-y-2 flex-1">
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-center">
                  <span className="text-primary font-bold text-xl">
                    Rp {pkg.price}
                  </span>{" "}
                  <span className="text-xs text-muted-foreground">
                    Per Bulan
                  </span>
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground mt-8 italic">
            harga dapat sewaktu berubah dalam kebijakan promo atau penambahan
          </p>
        </div>
      </section>

      {/* Paket Produktif / Exclusive */}
      <section
        id="paket-produktif"
        className="bg-section-dark min-h-screen py-16 scroll-mt-16"
      >
        <div className="container">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-[0.3em]">
                PAKET PRODUKTIF
              </h2>
              <p className="text-xs text-muted-foreground mt-1">
                Pilihan Paket Internet Terjangkau Untuk Kebutuhan Digital Anda
              </p>
            </div>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-foreground text-foreground font-bold px-8 py-3 text-sm tracking-wider hover:bg-foreground hover:text-background transition-colors"
            >
              DAFTAR SEKARANG
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {paketExclusive.map((pkg) => (
              <div
                key={pkg.speed}
                className="border border-border rounded-lg p-6 bg-card"
              >
                <h3 className="text-lg font-extrabold text-foreground text-center tracking-wider">
                  PAKET EXCLUSIVE
                </h3>
                <p className="text-2xl font-extrabold text-primary text-center mt-2">
                  {pkg.speed}
                </p>
                <ul className="mt-6 space-y-2">
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-center">
                  <span className="text-primary font-bold text-xl">
                    Rp {pkg.price}
                  </span>{" "}
                  <span className="text-xs text-muted-foreground">
                    Per Bulan
                  </span>
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground mt-8 italic">
            harga dapat sewaktu berubah dalam kebijakan promo atau penambahan
          </p>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Layanan;
